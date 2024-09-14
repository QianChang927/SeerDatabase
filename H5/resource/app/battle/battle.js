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
AbstractAnimatorCon = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.playMovie = function(t) {
        void 0 === t && (t = 1)
    },
    e.prototype.getDescription = function() {
        return ""
    },
    e.prototype.destroy = function() {},
    e
} (egret.EventDispatcher);
__reflect(AbstractAnimatorCon.prototype, "AbstractAnimatorCon");
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
BasePanelObserver = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.subject = e,
        i.subject.registe(i),
        i
    }
    return __extends(e, t),
    e.prototype.destroy = function() {
        this.subject = null
    },
    e.ITEM_CATCH = 4,
    e.ITEM_HP = 1,
    e.ITEM_PP = 2,
    e.ITEM_STAT = 3,
    e
} (egret.Sprite);
__reflect(BasePanelObserver.prototype, "BasePanelObserver");
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
BaseFighterModel = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.changeplayed = !1,
        i._info = e,
        i.addEventListener(PetFightEvent.NO_BLOOD, i.onNoBloodHandler, i),
        i.addEventListener(PetFightEvent.REMAIN_HP, i.onItemRemainHp, i),
        i
    }
    return __extends(e, t),
    e.prototype.onNoBloodHandler = function(t) {
        var e = t.dataObj;
        e.userID == this.info.userID && (FightUserInfo.getUserInfoByID(e.userID).aliveNum--, FightUserInfo.getUserInfoByID(e.userID).aliveNum < 0 && (FightUserInfo.getUserInfoByID(e.userID).aliveNum = 0), this._propView.showPetNum(this))
    },
    e.prototype.createView = function(t) {
        this.initSkillCon();
        var e;
        e = t.OtherInfoPanel;
        var i = e.x;
        e.x = 910,
        egret.Tween.get(e).to({
            x: i
        },
        500),
        this._propView = new BaseFighterPropView(e),
        this._propView.update(this),
        this._petView = new BaseFighterPetView,
        this._petView.addEventListener(PetFightEvent.ON_OPENNING, this.onOpenning, this),
        this.info.userID == MainManager.actorID ? this._petView.update(this.info.petID, this.info.catchTime, this.info.skinId, this.info.isChangeFace) : (this._petView.update(this.info.petID, 0, this.info.skinId, this.info.isChangeFace), this.propView.isShowFtHp = this.propView.isShowFtHp),
        e = null
    },
    e.prototype.setHpView = function(t) {
        void 0 === t && (t = !1),
        t ? this.propView.isShowFtHp = t: this.propView.isShowFtHp = StartFightInfo.isShowFtHp
    },
    e.prototype.catchPet = function(t) {
        void 0 === t && (t = null),
        t ? 0 == t.catchTime ? this.petWin.catchFail() : this.petWin.catchSuccess(t) : this.petWin.catchFail()
    },
    e.prototype.changePet = function(t, e) {
        void 0 === e && (e = !1),
        e && (this.changeplayed = !1),
        this.info.petID = t.petID,
        this.info.catchTime = t.catchTime,
        this.info.petName = PetXMLInfo.getName(this.info.petID),
        this.info.level = t.level,
        this.info.hp = t.hp,
        this.info.maxHP = t.maxHp,
        this.info.resistenceinfo = t.resistenceinfo,
        this.info.skinId = t.skinId,
        this.info.xinHp = t.xinHp,
        this.info.xinMaxHP = t.xinMaxHP,
        this.info.isChangeFace = t.isChangeFace,
        this.info.skillStateInfo = t.skillStateInfo,
        this.propView.update(this, !0),
        this.info.userID == MainManager.actorID ? (this.petWin.update(this.info.petID, this.info.catchTime, this.info.skinId, this.info.isChangeFace), PetFightMsgManager.showPetStartBattle(this.info.petName, !0)) : (this.petWin.update(this.info.petID, 0, this.info.skinId, this.info.isChangeFace), this.propView.isShowFtHp = this.propView.isShowFtHp, PetFightMsgManager.showPetStartBattle(this.info.petName, !1)),
        (this == FighterModelFactory.playerMode || FightManager.isReplay) && TimerManager.start(),
        RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID)
    },
    e.prototype.sysFightPet = function(t) {
        if (this.info.catchTime != t.petcatchtime) {
            var e;
            e = this.info.userID == MainManager.actorID ? FightUserInfo.reconenctinfo.myInfo: FightUserInfo.reconenctinfo.otherInfo,
            e && (this.info.petID = e.petID, this.info.catchTime = e.catchTime, this.info.petName = PetXMLInfo.getName(this.info.petID), this.info.level = e.level, this.info.hp = e.hp, this.info.maxHP = e.maxHP, this.info.resistenceinfo = e.resistenceinfo, this.info.skinId = e.skinId, this.propView.update(this, !0), this.info.userID == MainManager.actorID ? this.petWin.update(this.info.petID, this.info.catchTime, this.info.skinId) : (this.petWin.update(this.info.petID, 0, this.info.skinId), this.propView.isShowFtHp = this.propView.isShowFtHp), RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID))
        }
    },
    e.prototype.initSkillCon = function() {
        this.skillCon = new UseSkillController(this),
        this.skillCon.addEventListener(PetFightEvent.LOST_HP, this.lostHpHandler, this),
        this.skillCon.addEventListener(PetFightEvent.GAIN_HP, this.gainHpHandler, this),
        this.skillCon.addEventListener(PetFightEvent.REMAIN_HP, this.remainHpHandler, this),
        this.skillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onMovieOver, this)
    },
    e.prototype.destroy = function() {
        this.removeEventListener(PetFightEvent.NO_BLOOD, this.onNoBloodHandler, this),
        this.removeEventListener(PetFightEvent.REMAIN_HP, this.onItemRemainHp, this),
        this.skillCon && (this.skillCon.removeEventListener(PetFightEvent.LOST_HP, this.lostHpHandler, this), this.skillCon.removeEventListener(PetFightEvent.GAIN_HP, this.gainHpHandler, this), this.skillCon.removeEventListener(PetFightEvent.REMAIN_HP, this.remainHpHandler, this), this.skillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onMovieOver, this), this.skillCon.destroy(), this.skillCon = null),
        this._propView && (this._propView.destroy(), this._propView = null),
        this._petView && (this._petView.removeEventListener(PetFightEvent.ON_OPENNING, this.onOpenning, this), this._petView.destroy(), this._petView = null),
        this.enemy = null
    },
    e.prototype.onOpenning = function(t) {
        3 != this.info.isChangeFace || this.changeplayed || this.changePetFace()
    },
    e.prototype.useSkill = function(t) {
        this.skillCon.action(t),
        TimerManager.clearTxt(),
        PetFightMsgManager.showSkillText(t),
        0 != t.skillID && PlayerPetEffectView.showCrisisAndPriority(t),
        12 == t.state || 13 == t.state;
        var e = this.petWin.petMC.getWorldPosition(),
        i = new egret.Point(e.x, e.y + 100);
        EnemyPetEffectView.setup(i),
        this.info.userID != MainManager.actorID && EnemyPetEffectView.config(t.petStatus)
    },
    e.prototype.onMovieOver = function(t) {
        this.dispatchEvent(new egret.Event(e.ATTACK_OVER))
    },
    e.prototype.lostHpHandler = function(t) {
        var e = Number(t.dataObj.hp);
        if (this.enemy.info.hp -= e, this.enemy.info.maxHP = Number(t.dataObj.max), this.enemy.info.hp > this.enemy.info.maxHP && (this.enemy.info.hp = this.enemy.info.maxHP), this.enemy.info.hp < 0 && (this.enemy.info.hp = 0), this.enemy.propView.resetBar(this.enemy), this.enemy.info.userID == MainManager.actorID) {
            var i;
            i = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.getPetInfo(this.enemy.info.catchTime) : PetManager.getPetInfo(this.enemy.info.catchTime),
            i && (i.hp = this.enemy.info.hp)
        }
    },
    e.prototype.gainHpHandler = function(t) {
        var e = Number(t.dataObj.hp);
        if (this.info.hp += e, this.info.maxHP = Number(t.dataObj.max), this.info.hp < 0 && (this.info.hp = 0), this.info.hp > this.info.maxHP && (this.info.hp = this.info.maxHP), this.propView.resetBar(this), this.info.userID == MainManager.actorID) {
            var i;
            i = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.getPetInfo(this.info.catchTime) : PetManager.getPetInfo(this.info.catchTime),
            i && (i.hp = this.info.hp)
        }
        t.fun()
    },
    e.prototype.remainHpHandler = function(t) {
        var e = Number(t.dataObj.remain),
        i = Number(t.dataObj.realhurt);
        RemainHpManager.add(this, e, i)
    },
    e.prototype.updateMaxHp = function(t) {
        this.info.maxHP = t
    },
    e.prototype.remainHp = function(t, e) {
        var i = e,
        n = t - this.info.hp + i;
        if (0 >= t && 0 != i && (n = 0), this.info.hp = t, this.propView.resetBar(this, !0), this.skillCon.showChangeTxt(n, i), this.info.userID == MainManager.actorID) {
            var o;
            o = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.getPetInfo(this.info.catchTime) : PetManager.getPetInfo(this.info.catchTime),
            o && (o.hp = this.info.hp)
        }
        this.info.hp <= 0 && PetFightMsgManager.showPetDead(this.info.petName, this.info.userID == MainManager.actorID)
    },
    e.prototype.onItemRemainHp = function(t) {
        var e = Number(t.dataObj);
        this.info.hp = e,
        this.propView.resetBar(this)
    },
    e.prototype.resetMaxHp = function(t) {
        this.info.maxHP = t,
        this.propView.resetBar(this)
    },
    e.prototype.alivepet = function(t) {
        if (0 != t && (FightUserInfo.fighterInfos.otherInfo.aliveNum++, FightUserInfo.fighterInfos.otherInfo.petInfoArr.length)) {
            var e = FightUserInfo.fighterInfos.otherInfo.petInfoArr[t - 1];
            e && (e.hp = e.maxHp)
        }
    },
    e.prototype.getPetByZhuijiId = function(t, e, i) {
        void 0 === i && (i = 0);
        for (var n = FightUserInfo.fighterInfos.otherInfo.petInfoArr,
        o = t,
        r = [], s = 0; s < n.length; s++) n[s].hp > 0 && n[s].id == o && n[s].catchTime != e && r.push(n[s]);
        return r.sort(function(t, e) {
            return t.skinId - e.skinId
        }),
        r.length ? r[0] : n[0]
    },
    e.prototype.resetalivenum = function(t) {
        FightUserInfo.fighterInfos.otherInfo.aliveNum -= t,
        this._propView.showPetNum(this)
    },
    e.prototype.changeHps = function(t) {
        if (t) for (var e = 0; e < t.length; e++) {
            var i, n = t[e];
            i = FightUserInfo.fighterInfos.otherInfo.getPetInfo(n.id),
            i && (i.hp = n.hp, i.maxHp = n.maxhp, i.lock = 0 != n.lock)
        }
    },
    Object.defineProperty(e.prototype, "info", {
        get: function() {
            return this._info
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "propView", {
        get: function() {
            return this._propView
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "petWin", {
        get: function() {
            return this._petView
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "enemyMode", {
        get: function() {
            return this.enemy
        },
        set: function(t) {
            this.enemy = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.changePetFace = function() {
        var t = this;
        3 != this.info.isChangeFace || this.changeplayed || this.petWin.change(3,
        function() {
            t.info.isChangeFace = 2,
            t.changeplayed = !0,
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CHANGEFACE_OVER))
        })
    },
    e.ATTACK_OVER = "attackOver",
    e
} (egret.EventDispatcher);
__reflect(BaseFighterModel.prototype, "BaseFighterModel");
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
BasePlayerComponet = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.lastHp = 0,
        e.lastHp2 = 0,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        this.h1_up.scrollRect = new egret.Rectangle(0, 0, this.h1_up.width, this.h1_up.height),
        this.h1_down.scrollRect = new egret.Rectangle(0, 0, this.h1_down.width, this.h1_down.height),
        this.h2_up.scrollRect = new egret.Rectangle(0, 0, this.h2_up.width, 50),
        this.h2_down.scrollRect = new egret.Rectangle(0, 0, this.h2_down.width, 50),
        ImageButtonUtil.add(this.imprintIcon,
        function() {
            PopViewManager.getInstance().openView(new BattleFieldIntroPop, PopViewManager.createDefaultStyleObject(), {
                type: 2,
                data: e._imprintInfo
            })
        },
        this)
    },
    e.prototype.initState = function() {
        this.updateHpMask(),
        egret.setTimeout(this.updateHpMask, this, 600)
    },
    e.prototype.updateHpMask = function() {
        "vip2" == this.currentState
    },
    e.prototype.changeHP = function(t, e) {
        var i = this.h1_up,
        n = this.h1_down;
        t > this.lastHp && (n = this.h1_up, i = this.h1_down);
        var o = this.h1_up.width * t / e;
        egret.Tween.removeTweens(i.scrollRect),
        egret.Tween.removeTweens(n.scrollRect),
        egret.Tween.get(i.scrollRect).to({
            width: o
        },
        800),
        egret.Tween.get(n.scrollRect).wait(400).to({
            width: o
        },
        700),
        this.lastHp = t
    },
    e.prototype.changeHP2 = function(t, e) {
        var i = this;
        egret.callLater(function() {
            i.delayShowHp2(t, e)
        },
        this)
    },
    e.prototype.delayShowHp2 = function(t, e) {
        this.txtHP2.text = t + "/" + e;
        var i = this.h2_up,
        n = this.h2_down;
        t > this.lastHp2 && (n = this.h2_up, i = this.h2_down);
        var o = this.h2_up.width * t / e;
        egret.Tween.removeTweens(i.scrollRect),
        egret.Tween.removeTweens(n.scrollRect),
        egret.Tween.get(i.scrollRect).to({
            width: o
        },
        800),
        egret.Tween.get(n.scrollRect).wait(400).to({
            width: o
        },
        700),
        this.lastHp2 = t
    },
    e.prototype.updateImprint = function(t) {
        t.imprintNum ? (this.imprintIcon.visible = !0, this.buff_1.right ? this.buff_1.right = 165 : this.buff_1.left ? this.buff_1.left = 165 : this.buff_1.x = 165, this._imprintInfo = t.imprintList) : (this.imprintIcon.visible = !1, this.buff_1.right ? this.buff_1.right = 125 : this.buff_1.left && (this.buff_1.left = 125), this.buff_1.x = 125, this._imprintInfo = null)
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this)
    },
    e
} (eui.Component);
__reflect(BasePlayerComponet.prototype, "BasePlayerComponet");
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
BaseControlPanel = function(t) {
    function e(e) {
        return void 0 === e && (e = null),
        t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.destroy = function() {
        this._panel = null
    },
    Object.defineProperty(e.prototype, "panel", {
        get: function() {
            return this._panel
        },
        enumerable: !0,
        configurable: !0
    }),
    e.PANEL_HEIGHT = 300,
    e
} (egret.EventDispatcher);
__reflect(BaseControlPanel.prototype, "BaseControlPanel", ["IControlPanel"]);
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
SkillBtnView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._islocked = !1,
        e._canUseAnyWay = !1,
        e.startTime = 0,
        e
    }
    return __extends(e, t),
    e.prototype.setSkillInfo = function(t, e) {
        void 0 === e && (e = !1),
        this._info = t,
        this.isHideSkillBtn = e,
        this.mc = new skillMC(t),
        e ? this.mc.currentState = "hide": this.mc.currentState = "normal",
        this.mc.touchEnabled = !0,
        this.mc.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.overHandler, this),
        this.mc.addEventListener(egret.TouchEvent.TOUCH_END, this.outHandler, this),
        this.mc.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outHandler, this),
        this._skillID = t.id,
        this._pp = t.pp,
        this._pp <= 0 && (this._pp = 0, this.canUseAnyWay || this.closeBtns()),
        this.maxPP = t.maxPP
    },
    e.prototype.clear = function() {
        BattleSkillTipController.hide(),
        this.removeEvent(),
        DisplayUtil.removeForParent(this.mc),
        this.mc = null
    },
    e.prototype.autoUse = function() {
        return ! this.canUseAnyWay && (this._pp <= 0 || this._islocked) ? (this.dispatchEvent(new PetFightEvent(PetFightEvent.USE_SKILL, 0)), void this.closeBtns()) : void this.dispatchEvent(new PetFightEvent(PetFightEvent.USE_SKILL, this.skillID))
    },
    e.prototype.changePP = function(t) {
        this._pp += t,
        this._info.pp += t,
        this._pp > this.maxPP ? this._pp = this.maxPP: this._pp <= 0 && (this._pp = 0),
        this.mc.txtCount.text = this._pp + "/" + this.maxPP,
        this._pp > 0 || this.canUseAnyWay ? this.openBtns() : this.closeBtns()
    },
    Object.defineProperty(e.prototype, "skillID", {
        get: function() {
            return this._skillID
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.getMC = function() {
        return this.mc
    },
    Object.defineProperty(e.prototype, "pp", {
        get: function() {
            return this._pp
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "islocked", {
        get: function() {
            return this._islocked
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "canUseAnyWay", {
        get: function() {
            return this._canUseAnyWay
        },
        set: function(t) {
            this._canUseAnyWay = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setSkillState = function(t, e) {
        t > 0 ? (this.mc.imge_runawayIcon.visible = !0, this.mc.txtRunawayNumTx.text = "" + t) : (this.mc.imge_runawayIcon.visible = !1, this.mc.txtRunawayNumTx.text = ""),
        1001 == e ? (this.canUseAnyWay = !0, this.mc.imge_lockSkillmask.visible = !1, this.openBtns()) : (this.canUseAnyWay = !1, e > 0 ? (this._islocked = !0, this.mc.imge_lockSkillmask.visible = !0, this.mc.imge_lockSkillmask.source = "battle_lockedskill_imge_lockskillmask_" + e + "_png", this.mc.touchEnabled = this.mc.touchChildren = !1) : (this._islocked = !1, this.mc.imge_lockSkillmask.visible = !1, this.closeBtns(), this.openBtns()))
    },
    e.prototype.overHandler = function(t) {
        var e = this; (this.canUseAnyWay || !this.islocked) && (this.startTime = egret.getTimer(), this._timeOutFlag = egret.setTimeout(function() {
            BattleSkillTipController.showPetInfoTip(e.petInfo, e._skillID, new egret.Point(t.stageX, t.stageY)),
            e.mc && (BattleSkillTipController.setFixedPos(e.mc), e.mc.removeEventListener(egret.TouchEvent.TOUCH_TAP, e.clickHandler, e))
        },
        this, 300), this.mc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this))
    },
    e.prototype.outHandler = function(t) {
        t.type === egret.TouchEvent.TOUCH_RELEASE_OUTSIDE && this.mc.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this),
        this._clearShowTips()
    },
    e.prototype._clearShowTips = function() {
        egret.clearTimeout(this._timeOutFlag),
        BattleSkillTipController.hide()
    },
    e.prototype.clickHandler = function(t) {
        if (this._clearShowTips(), !this.canUseAnyWay) {
            if (this.islocked) return;
            if (this._pp <= 0) return void this.closeBtns()
        }
        var e = new egret.Event(PetFightEvent.USE_SKILL, !1, !0, this.skillID);
        if (EventManager.dispatchEvent(e)) {
            var i = new PetFightEvent(PetFightEvent.USE_SKILL, this.skillID, null, !1, !0);
            this.dispatchEvent(i)
        }
    },
    e.prototype.openBtns = function() { (this._pp > 0 || this.canUseAnyWay) && (this.mc.touchEnabled = this.mc.touchChildren = !0, this.mc.imge_item_mask.visible = !1)
    },
    e.prototype.closeBtns = function() {
        this.mc.touchEnabled = this.mc.touchChildren = !1,
        this.mc.imge_item_mask.visible = !0
    },
    e.prototype.removeEvent = function() {
        this.mc && (this.mc.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outHandler, this), this.mc.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.overHandler, this), this.mc.removeEventListener(egret.TouchEvent.TOUCH_END, this.outHandler, this), this.mc.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this))
    },
    e.prototype.modifyPP = function(t, e) {
        void 0 === e && (e = 0),
        e = this.maxPP,
        this.mc.txtCount.text = t + "/" + this.maxPP,
        this._info.pp = t,
        this._pp = t,
        t > 0 || this.canUseAnyWay ? this.openBtns() : this.closeBtns()
    },
    e
} (egret.EventDispatcher);
__reflect(SkillBtnView.prototype, "SkillBtnView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
AbstractPetItemCategory = function() {
    function t(t) {
        this._icon = new eui.Image,
        this._icon.width = this._icon.height = 50,
        this._icon.x = this._icon.y = 8,
        this._ui = new itemUI,
        this._txt = this._ui.numTxt,
        this._sprite = new egret.Sprite,
        this._sprite.graphics.beginFill(16711884, 0),
        this._sprite.graphics.drawRect(0, 0, 67, 67),
        this._sprite.cacheAsBitmap = !0,
        this._sprite.touchChildren = !0,
        this._txt.cacheAsBitmap = !0,
        this._txt.touchEnabled = !1,
        this._sprite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this),
        this._sprite.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.overHandler, this),
        this._sprite.addEventListener(egret.TouchEvent.TOUCH_END, this.outHandler, this),
        this._sprite.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outHandler, this),
        this._ui.name = "petItemUI",
        this._sprite.addChild(this._ui),
        this._sprite.addChild(this._icon),
        this.itemID = t
    }
    return t.prototype.setSuperItemId = function(t) {
        this.itemID = t
    },
    Object.defineProperty(t.prototype, "sprite", {
        get: function() {
            return this._sprite
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "itemID", {
        get: function() {
            return this._itemID
        },
        set: function(t) {
            this._itemID = +t,
            this._itemNum = ItemManager.getCollectionInfo(this._itemID).itemNum;
            var e = ItemXMLInfo.getIconURL(this._itemID);
            this._icon.source = e,
            this.refreshInfo()
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.refreshInfo = function() {
        this._txt.text = this._itemNum.toString()
    },
    t.dispatchOnUsePetItem = function() {
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ON_USE_PET_ITEM))
    },
    t.prototype.useItem = function(t) {
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.USE_PET_ITEM))
    },
    t.prototype.destroy = function() {
        DisplayUtil.removeForParent(this._sprite),
        this._sprite.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.useItem, this),
        this._sprite.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.overHandler, this),
        this._sprite.removeEventListener(egret.TouchEvent.TOUCH_END, this.outHandler, this),
        this._sprite.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outHandler, this),
        this._txt = null,
        this._ui = null,
        this._sprite = null
    },
    t.prototype.overHandler = function(t) {
        var e = ItemManager.getCollectionInfo(this._itemID);
        ItemInfoTip.show(e, new egret.Point(t.stageX, t.stageY), !1, MainManager.stage.stage)
    },
    t.prototype.outHandler = function(t) {
        ItemInfoTip.hide()
    },
    t
} ();
__reflect(AbstractPetItemCategory.prototype, "AbstractPetItemCategory", ["IPetItemCategory"]);
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
BaseFighterPetView = function(t) {
    function e() {
        var i = t.call(this) || this;
        return i.animateScaleX = -1,
        i.secondfightmcChanged = !1,
        i.petContainer = new egret.Sprite,
        i.petContainer.graphics.beginFill(16777215, 0),
        i.petContainer.graphics.drawRect(0, 0, e.WIN_WIDTH, e.WIN_HEIGHT),
        i.petAnimate = PetAnimateFactory.getPetAnimate(),
        i.addChild(i.petContainer),
        i.initContainerPos(),
        i.initAniMcArr(),
        i
    }
    return __extends(e, t),
    e.prototype.initContainerPos = function() {
        this.petContainer.x = 960 - e.WIN_WIDTH - 70,
        this.petContainer.y = 115
    },
    Object.defineProperty(e.prototype, "petMC", {
        get: function() {
            return this.petAnimate
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.initAniMcArr = function() {
        if (!e._aniMcArr) {
            var t = DragonbonesUtil.createAnimate("catch_mv_ske_json", "catch_mv_tex_json", "catch_mv_tex_png", "catch_mv");
            e._aniMcArr = [],
            e._aniMcArr.push(t)
        }
    },
    e.prototype.getAniMcClass = function(t) {
        var i;
        switch (t) {
        case 300002:
            i = 0;
            break;
        case 300003:
            i = 1;
            break;
        case 300004:
            i = 2;
            break;
        case 300006:
        case 300010:
            i = 3;
            break;
        case 300007:
            i = 4;
            break;
        case 300009:
            i = 5;
            break;
        case 300141:
            i = 6;
            break;
        case 300502:
            i = 7;
            break;
        case 300503:
            i = 8;
            break;
        case 300504:
            i = 9;
            break;
        default:
            i = 10
        }
        return i = 0,
        e._aniMcArr[i]
    },
    e.prototype.catchFail = function() {
        var t = this;
        this.catchMC = null;
        FighterModelFactory.enemyMode;
        this.catchMC || (this.catchMC = this.getAniMcClass(e.itemID), this.catchMC.x = egret.lifecycle.stage.stageWidth / 2 + 290, this.catchMC.y = 410),
        DragonbonesUtil.play(this.catchMC, "catch", 1).then(function() {
            DragonbonesUtil.play(t.catchMC, "escape", 1).then(function() {
                t.checkIsCatchMovieOver(),
                t.catchMC.parent && t.catchMC.parent.removeChild(t.catchMC)
            });
            var e = setTimeout(function() {
                clearTimeout(e),
                FighterModelFactory.enemyMode.petWin.petMC.animate.visible = !0
            },
            800)
        }),
        PetFightController.mvContainer.addChild(this.catchMC);
        var i = setTimeout(function() {
            clearTimeout(i),
            FighterModelFactory.enemyMode.petWin.petMC.animate.visible = !1
        },
        1e3)
    },
    e.prototype.catchSuccess = function(t) {
        var i = this;
        EventManager.dispatchEvent(new DynamicEvent(PetFightEvent.CATCH_SUCCESS, FighterModelFactory.enemyMode.info.petID)),
        this.catchMC = null,
        this.catchMC || (this.catchMC = this.getAniMcClass(e.itemID), this.catchMC.x = egret.lifecycle.stage.stageWidth / 2 + 290, this.catchMC.y = 410),
        DragonbonesUtil.play(this.catchMC, "catch", 1).then(function() {
            if (DisplayUtil.removeForParent(i.catchMC), FighterModelFactory.enemyMode.petWin) {
                var t = FighterModelFactory.enemyMode.petWin.petMC.animate;
                t.parent && t.parent.removeChild(t)
            }
        });
        FighterModelFactory.enemyMode;
        PetFightController.mvContainer.addChild(this.catchMC),
        FightOverController.isCatch = !0;
        var n = setTimeout(function() {
            PetManager.getBagMap().length < 6 ? (SocketConnection.send(CommandID.PET_RELEASE, t.catchTime, 1), SocketConnection.send(CommandID.GET_PET_INFO, t.catchTime), i.isBagFull = !1) : (i.isBagFull = !0, PetManager.addStorage(t.petID, t.catchTime)),
            clearTimeout(n);
            var e = FighterModelFactory.enemyMode.petWin.petMC.animate;
            e.parent && e.parent.removeChild(e)
        },
        1e3),
        o = setTimeout(function() {
            i.afterCatchSuccess(),
            clearTimeout(o)
        },
        5e3)
    },
    e.prototype.afterCatchSuccess = function() {
        FightOverController.clear(null, !0),
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CATCH_PET)),
        this.isBagFull ? Alarm.show("恭喜！捕捉成功，你可以在精灵仓库中找到它哦！",
        function() {
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CATCH_PET)),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
                data: FightOverController.overData,
                delay: 1
            }))
        }) : Alarm.show("恭喜你，捕捉成功！",
        function() {
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CATCH_PET)),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
                data: FightOverController.overData,
                delay: 1
            }))
        })
    },
    e.prototype.checkIsCatchMovieOver = function() {
        AbstractPetItemCategory.dispatchOnUsePetItem(),
        this.catchMC && this.catchMC.parent && this.catchMC.parent.removeChild(this.catchMC)
    },
    e.prototype.destroy = function() {
        DisplayUtil.removeForParent(this),
        DisplayUtil.removeForParent(this.petContainer),
        this.petContainer = null,
        this.catchMC = null,
        e._aniMcArr = null
    },
    e.prototype.update = function(t, i, n, o) {
        void 0 === i && (i = 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = 0),
        this.petID = t,
        this._skinId = n,
        this.oct = i,
        this.changevalue = 0;
        var r = t;
        if (2 == o) {
            var s = this.petID;
            this._skinId > 0 && (s = PetSkinXMLInfo.getSkinPetId(this._skinId, this.petID)),
            r = PetXMLInfo.getTransform(s)
        }
        var a = -1,
        h = this.petContainer.x + e.WIN_WIDTH / 2,
        l = this.petContainer.y + 145;
        this.petAnimate.showPet(r, i, n, h, l, a),
        this.dispatchEvent(new PetFightEvent(PetFightEvent.ON_OPENNING))
    },
    e.prototype.changeSecondFightMc = function(t) {
        var i = this.animateScaleX,
        n = this.petContainer.x + e.WIN_WIDTH / 2,
        o = this.petContainer.y + 145;
        this.petAnimate.showPet(t, this.oct, this._skinId, n, o, i),
        this.secondfightmcChanged = !0
    },
    e.prototype.changeFirstFightmc = function() {
        if (this.secondfightmcChanged) {
            var t = this.animateScaleX,
            i = this.petContainer.x + e.WIN_WIDTH / 2,
            n = this.petContainer.y + 145;
            this.petAnimate.showPet(this.petID, this.oct, this._skinId, i, n, t),
            this.secondfightmcChanged = !1
        }
    },
    e.prototype.change = function(t, e) {
        return void 0 === e && (e = null),
        this.changevalue == t ? void(null != e && e()) : (this.changefun = e, this.changevalue = t, void this.playChangemovie())
    },
    e.prototype.playChangemovie = function() {
        this.petAnimate.playTransformationAnim(this.changemovieOver, this)
    },
    e.prototype.changemovieOver = function() {
        if (1 == this.changevalue) this.changeFirstFightmc();
        else {
            var t = 0;
            t = this._skinId > 0 ? PetXMLInfo.getTransform(14e5 + this._skinId) : PetXMLInfo.getTransform(this.petID),
            this.changeSecondFightMc(t)
        }
        null != this.changefun && (this.changefun(), this.changefun = null)
    },
    Object.defineProperty(e.prototype, "petID", {
        get: function() {
            return this._petID
        },
        set: function(t) {
            this._petID = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.WIN_WIDTH = 180,
    e.WIN_HEIGHT = 280,
    e
} (egret.Sprite);
__reflect(BaseFighterPetView.prototype, "BaseFighterPetView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BasePetAnimator = function() {
    function t() {}
    return t.prototype.setContainer = function(t) {},
    t.prototype.playAnimate = function(t, e, i, n) {},
    t.prototype.playAppearAnim = function(t, e) {},
    t.prototype.playTransformationAnim = function(t, e) {},
    t.prototype.playDefendAnim = function(t, e) {},
    t.prototype.playStandAnim = function(t, e) {},
    t.prototype.stopAnimateAtActionFrame = function(t, e, i) {},
    t.prototype.showPet = function(t, e, i, n, o, r) {
        this.baseX = n,
        this.baseY = o
    },
    t.prototype.getWorldPosition = function() {
        var t = this.animate.parent.localToGlobal(this.baseX, this.baseY);
        return t
    },
    t.prototype.destroy = function() {},
    t
} ();
__reflect(BasePetAnimator.prototype, "BasePetAnimator");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BaseSkillAnimator = function() {
    function t() {}
    return t.prototype.init = function(t, e, i, n, o) {},
    t.prototype.play = function(t, e, i) {},
    t
} ();
__reflect(BaseSkillAnimator.prototype, "BaseSkillAnimator");
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
BaseBufferIconView = function(t) {
    function e(e, i) {
        var n = t.call(this) || this;
        n._show = !1,
        n._lvNum = 0,
        n._index = e.id,
        n._uid = i,
        n._signInfo = e,
        n._iconSprite = new eui.Group,
        n._icon = new eui.Image,
        n._iconSprite.addChild(n._icon);
        var o = new eui.Label;
        return o.size = 12,
        o.stroke = 1,
        o.strokeColor = 0,
        o.textColor = 16774656,
        o.bottom = 0,
        o.horizontalCenter = 0,
        o.fontFamily = "MFShangHei",
        n._iconSprite.numTxt = o,
        n._iconSprite.addChild(n._iconSprite.numTxt),
        n._fighterModel = FighterModelFactory.getFighterMode(i),
        n.initView(),
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        var t = this;
        this._icon.source = ClientConfig.getBuffIcon(this._index),
        this._icon.scaleX = this._icon.scaleY = .8,
        ImageButtonUtil.add(this._iconSprite,
        function() {
            SignViewController.showInfoView(t.useId, t.index)
        },
        this)
    },
    e.prototype.update = function() {},
    Object.defineProperty(e.prototype, "icon", {
        get: function() {
            return this._iconSprite
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "iconImage", {
        get: function() {
            return this._icon
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isShow", {
        get: function() {
            return this._show
        },
        set: function(t) {
            null != this.icon && this._show != t && (this._show = t, 1e3 != this.index && EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.SIGNBUFF_CHANGE, {
                useId: this.useId,
                index: this.index
            })))
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "iconSource", {
        set: function(t) {
            var e = SignIconXmlInfo.getspIconByidAndLvNum(t, this.lvNum);
            "" != e ? this._icon.source = ClientConfig.getBuffIcon(t, Number(e)) : this._icon.source = ClientConfig.getBuffIcon(t),
            this._icon.scaleX = this._icon.scaleY = .8
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isSelf", {
        get: function() {
            return this._uid == MainManager.actorID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "index", {
        get: function() {
            return this._index
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "useId", {
        get: function() {
            return this._uid
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "lvNum", {
        get: function() {
            return this._lvNum
        },
        set: function(t) {
            this._lvNum != t && (this._lvNum = t, this.iconSource = this.index, EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.SIGNBUFF_CHANGE_LVNUM, {
                useId: this.useId,
                iconId: this.index,
                lvNum: this.lvNum
            })))
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "signInfo", {
        get: function() {
            return this._signInfo
        },
        set: function(t) {
            this._signInfo = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "fightSignInfo", {
        get: function() {
            return this._fightSignInfo
        },
        set: function(t) {
            this._fightSignInfo = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "tipsStr", {
        get: function() {
            return this._tipsStr
        },
        set: function(t) {
            this._tipsStr = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.addIcon = function() {},
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this),
        DisplayUtil.removeForParent(this.icon),
        ToolTipManager.remove(this._icon),
        this._icon = null,
        DisplayUtil.removeAllChild(this)
    },
    e
} (eui.Group);
__reflect(BaseBufferIconView.prototype, "BaseBufferIconView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(o, r) {
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
BaseFighterPropView = function() {
    function t(t) {
        this.effectIcons = {},
        this._isShowFtHp = !1,
        this._effectTip = "",
        this.effectInfos = {},
        this.tiparr = ["无能量", "减少自身受到伤害的8%，每增加1层额外获得8%的减伤", "免疫所有异常状态、免疫所有能力下降状态", "每回合恢复1/3最大HP", "每回合结束后，本回合自身受到的固定伤害转移到对手身上", "所有攻击先制额外+1", "自身所有攻击技能威力提升60%；且第五技能威力提升不再消耗自身神耀能量；赛尔对战中击败对手后自身神耀能量清零且下回合先制额外+3，非赛尔对战4回合后自身神耀能量清零且下回合先制额外+3"],
        this.bossEffectIcons = {},
        this._propView = t,
        this.effectmc = this._propView.effect,
        this._propView.icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEffectClick, this),
        this._propView.head.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHeadClick, this),
        this._propView.headFrame.touchEnabled = !1,
        this.effectmc.tips.visible = !1,
        this.otxtwidth = this.effectmc.msg_txt.width,
        this.obgwidth = this.effectmc.bg.width,
        SignViewController.init()
    }
    return t.prototype.onEffectClick = function(t) {
        ModuleManager.ignoreReshow++,
        ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], {
            obj: this._petinfo,
            parentCon: egret.lifecycle.stage,
            isFight: !0
        },
        "", AppDoStyle.NULL)
    },
    t.prototype.onHeadClick = function(t) {
        this._fighterModel = FighterModelFactory.getFighterMode(this.userId);
        var e = this._fighterModel.info.resistenceinfo;
        ModuleManager.ignoreReshow++,
        ModuleManager.showModule("fightingPetOrBossInfoPop", ["fighting_pet_or_boss_info_pop"], {
            obj: {
                petInfo: this._petinfo,
                userID: this.userId,
                effectInfos: this.effectInfos,
                resistenceinfo: e
            },
            parentCon: egret.lifecycle.stage,
            isFight: !0
        },
        "", AppDoStyle.NULL)
    },
    t.prototype.onEffectIconOver = function(t) {
        if (3393 == this._petId || 190003393 == this._petId || 3550 == this._petId || 3788 == this._petId ? (this.effectmc.msg_txt.width = this.otxtwidth + 400, this.effectmc.bg.width = this.obgwidth + 400) : (this.effectmc.msg_txt.width = this.otxtwidth, this.effectmc.bg.width = this.obgwidth, this._effectTip.length > 120 && (this.effectmc.msg_txt.width = this.otxtwidth + 60, this.effectmc.bg.width = this.obgwidth + 60)), this.effectmc.tips.visible = !0, this.effectmc.msg_txt.text = this._effectTip, this.effectmc.bg.height = this.effectmc.msg_txt.textHeight + 20, this._isMy) this.effectmc.msg_txt.x = 15,
        this.effectmc.bg.x = 5;
        else {
            var e = new egret.Point(egret.lifecycle.stage.stageWidth - this.effectmc.bg.width, 0),
            i = this.effectmc.globalToLocal(e.x, e.y);
            this.effectmc.msg_txt.x = i.x + 5,
            this.effectmc.bg.x = i.x - 5
        }
    },
    t.prototype.onEffectIconOut = function(t) {
        this.effectmc.tips.visible = !1
    },
    Object.defineProperty(t.prototype, "isShowFtHp", {
        get: function() {
            return this._isShowFtHp
        },
        set: function(t) {
            this._isShowFtHp = t,
            this._propView.txtHP1.visible = this._isShowFtHp
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.update = function(t, e) {
        void 0 === e && (e = !1),
        this._petId = t.info.petID,
        e && (this.removeAllEffect(), this.removeAllBossEffect()),
        t.info.level <= 100 ? this._propView.txtLv.text = "Lv." + t.info.level.toString() : this._propView.txtLv.text = "??",
        this.showName(t),
        this.resetBar(t),
        this.addPetPropIcon(t),
        this.showPetNum(t),
        this.updateHeadRect(t.info.petID),
        this.userId = t.info.userID;
        var i;
        this.userId == MainManager.actorID ? (this._isMy = !0, i = ClientConfig.getPetHeadPath(t.info.petID, t.info.catchTime, t.info.skinId), this._propView.head.source = i) : (this._isMy = !1, i = ClientConfig.getPetHeadPath(t.info.petID, 0, t.info.skinId), this._propView.head.source = i),
        this._propView.updateImprint(t.info),
        SignViewController.update(this._propView, this.userId),
        this._propView.icon.source = null;
        var n = !1,
        o = FightUserInfo.fighterInfos.getPetInfo(t.info.catchTime, this._isMy);
        this._petinfo = o;
        for (var r = [], s = 0; s < o.effectList.length; s++) {
            var a = o.effectList[s],
            h = a.args,
            l = EffectIconControl.getIconId(o.id, a.effectID, h),
            c = EffectIconControl.getIconId(o.id, a.effectID);
            l > 0 ? (this._effectTip = EffectIconControl.getTips(o.id, a.effectID, h), this.addEffectIcon(l), n = !0) : c > 0 && (this._effectTip = EffectIconControl.getTips(o.id, a.effectID), this.addEffectIcon(c), n = !0),
            1 == a.status && r.push(a)
        }
        r.sort(function(t, e) {
            var i = BossEffectIconController.getSort(t.effectID, t.args),
            n = BossEffectIconController.getSort(e.effectID, e.args),
            o = BossEffectIconController.getIconId(t.effectID, t.args),
            r = BossEffectIconController.getIconId(e.effectID, e.args);
            return i == n ? r > o ? -1 : 1 : n > i ? -1 : 1
        });
        for (var _ = 0; _ < r.length; _++) {
            var u = r[_];
            0 == FighterModelFactory.enemyMode.info.userID && this.loadBossEffectIcon(u)
        }
        if (!n) {
            var p = EffectIconControl.getIconId(o.id);
            p > 0 && (this._effectTip = EffectIconControl.getTips(o.id), n = !0, this.addEffectIcon(p))
        }
        this.effectmc.visible = n,
        null == this.promiseGodSecondBloodView && "vip2" == this._propView.currentState && (this.promiseGodSecondBloodView = new PromiseGodSecondBloodView(this._propView, this.userId))
    },
    t.prototype.loadBossEffectIcon = function(t) {
        var e = BossEffectIconController.getIconId(t.effectID, t.args);
        if (! (0 > e)) {
            var i = (BossEffectIconController.getTips(t.effectID, t.args), new eui.Image);
            i.name = PetStatusEffectType.BOSS_EFFECT + "_" + t.args + "_" + e,
            i.source = ClientConfig.getBossEffectIcon(e),
            this.bossEffectIcons[i.name] = i;
            BossEffectIconController.getSort(t.effectID, t.args);
            i.skewY = 180,
            this._propView.buff_2.addChild(i);
            var n = this._propView.buff_2.getChildIndex(i);
            console.log("bossIcon——Index：" + n)
        }
    },
    t.prototype.addEffectIcon = function(t) {
        return __awaiter(this, void 0, void 0,
        function() {
            var t;
            return __generator(this,
            function(e) {
                switch (e.label) {
                case 0:
                    return [4, KTool.checkHasAdvanced(this._petinfo)];
                case 1:
                    return t = e.sent(),
                    this._propView.icon.source = ClientConfig.geteffecticon(~~ ! t),
                    [2]
                }
            })
        })
    },
    t.prototype.showPetNum = function(t) {
        PetFightController.updateLiveNum()
    },
    t.prototype.addPetPropIcon = function(t) {
        var e = PetXMLInfo.getType(t.info.petID);
        this._propView.pet_type_icon.source = ClientConfig.getpettypeticon(e),
        ToolTipManager.add(this._propView.pet_type_icon, SkillXMLInfo.petTypeNameCN(Number(e)))
    },
    t.prototype.updateHeadRect = function(t) {
        this._propView.currentState = "normal",
        2607 == t || 2873 == t || 3311 == t ? this._propView.currentState = "vip1": 3788 == t ? this._propView.currentState = "vip2": null != this.promiseGodSecondBloodView && (this.promiseGodSecondBloodView.destroy(), this.promiseGodSecondBloodView = null),
        this._propView.initState()
    },
    t.prototype.destroy = function() {
        this.effectmc && (DisplayUtil.removeForParent(this.effectmc), this.effectmc.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEffectClick, this), this.effectmc = null),
        null != this.promiseGodSecondBloodView && this.promiseGodSecondBloodView.destroy(),
        DisplayUtil.removeForParent(this._propView),
        this._propView = null,
        SignViewController.destroy()
    },
    t.prototype.resetBar = function(t, e) {
        void 0 === e && (e = !1),
        t.info.hp > t.info.maxHP && (t.info.hp = t.info.maxHP),
        t.info.hp <= 0 ? (this.dispatchNoBlood = e, e && 0 == t.info.userID && t.dispatchEvent(new PetFightEvent(PetFightEvent.NO_BLOOD, t.info))) : this.dispatchNoBlood = !1,
        this._propView.changeHP(t.info.hp, t.info.maxHP),
        this._propView.txtHP1.text = t.info.hp.toString() + "/" + t.info.maxHP.toString(),
        this._propView.updateImprint(t.info)
    },
    t.prototype.addEffect = function(t) {
        try {
            var e = new eui.Image,
            i = new eui.Image,
            n = new egret.TextField;
            n.size = 16,
            n.fontFamily = "MFShangHei",
            n.textColor = 15525606;
            var o = new eui.Group;
            switch (t.type) {
            case PetStatusEffectType.TRAIT:
                e.source = ClientConfig.getAbilityIcon(t.id, t.parm > 6),
                i.source = ClientConfig.getAbilityNumIcon(Math.abs(t.parm - 6), t.parm > 6);
                var r = "" + PetStatusEffectType.TRAIT + "_" + t.id;
                if (this.effectIcons[r]) return;
                if (this.effectInfos[r]) return;
                this.effectInfos[r] = t,
                o.addChild(e),
                o.addChild(i),
                this.effectIcons[r] = o,
                this._propView.ability_icons.addChild(o);
                break;
            default:
                if (17 == t.id) return;
                e.source = ClientConfig.getBattleEffectIcon(t.id),
                n.text = String(t.parm),
                n.x = 25,
                n.y = 20;
                var r = "" + PetStatusEffectType.ABNORMAL + "_" + t.id;
                if (this.effectIcons[r]) return;
                this.effectIcons[r] || (o.addChild(e), o.addChild(n), this.effectIcons[r] = o, this._isMy || (o.skewY = 180), this._propView.buff_2.addChild(o))
            }
        } catch(s) {}
    },
    t.prototype.removeAllEffect = function() {
        for (var t in this.effectIcons) DisplayUtil.removeForParent(this.effectIcons[t]);
        this.effectIcons = {};
        for (var t in this.effectInfos) DisplayUtil.removeForParent(this.effectInfos[t]);
        this.effectInfos = {}
    },
    t.prototype.removeAllBossEffect = function() {
        for (var t in this.bossEffectIcons) DisplayUtil.removeForParent(this.bossEffectIcons[t]);
        this.bossEffectIcons = {}
    },
    t.prototype.removeEffect = function(t, e) {
        var i = this.effectIcons["" + t + "_" + e];
        i && i.parent && i.parent.removeChild(i)
    },
    t.prototype.addIcon = function(t) {
        var e = 300 - (t.width + 4) * this.effectIcons.length,
        i = 96,
        n = this._propView.localToGlobal(e, i),
        o = this._propView.parent.globalToLocal(n.x, n.y);
        t.x = o.x,
        t.y = o.y,
        this._propView.parent.addChild(t)
    },
    t.prototype.showName = function(t) {
        this._propView.txtPetName.text = PetXMLInfo.getName(t.info.petID)
    },
    t
} ();
__reflect(BaseFighterPropView.prototype, "BaseFighterPropView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetItemCategoryFactory = function() {
    function t() {}
    return t.getCategory = function(t) {
        var e;
        switch (ItemFilterXMLInfo.pporblood(t)) {
        case 1:
        case 2:
        case 3:
            e = new RenewBloodItemCategory(t);
            break;
        default:
            e = new CatchPetItemCategory(t)
        }
        return e
    },
    t
} ();
__reflect(PetItemCategoryFactory.prototype, "PetItemCategoryFactory");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetStatusEffectController = function() {
    function t() {}
    return t.addEffect = function(t, e) {
        var i = FighterModelFactory.getFighterMode(t);
        i.propView.addEffect(e)
    },
    t.getEffectCls = function(t) {
        var e, i = ["攻击", "防御", "特攻", "命中", "特防", "速度"];
        switch (t.type) {
        case PetStatusEffectType.TRAIT:
            var n = i.indexOf(t.name) + 1;
            e = t.parm > 6 ? "Effect_Trait_Up000" + n: "Effect_Trait_Down000" + n;
            break;
        default:
            e = t.type == PetStatusEffectType.ABNORMAL && 11 == t.id ? "Effect_" + t.type + "_" + t.id + "000" + t.parm: "Effect_" + t.type + "_" + t.id
        }
        return e
    },
    t.removeAllEffect = function(t) {
        var e = FighterModelFactory.getFighterMode(t);
        e.propView.removeAllEffect(),
        e = null
    },
    t
} ();
__reflect(PetStatusEffectController.prototype, "PetStatusEffectController");
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
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
ReadyToFightController = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.setup = function(t) {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(i) {
                switch (i.label) {
                case 0:
                    return [4, e._drawBg()];
                case 1:
                    return i.sent(),
                    FightManager.readyToFight(),
                    [4, this.loadAssets()];
                case 2:
                    return i.sent(),
                    FightUserInfo.readyData = t,
                    FightManager.enemyId = FightUserInfo.fighterInfos.otherInfo.id,
                    MainManager.actorState = UserState.FIGHT,
                    this.hideOtherDisplay(),
                    SoundController.init(),
                    LoadingViewController.setup(FightUserInfo.fighterInfos),
                    PetFightController.init(),
                    FightOverController.init(),
                    [2]
                }
            })
        })
    },
    e.loadAssets = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            return __generator(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                    [4, BossEffectIconController.setup()];
                case 1:
                    return t.sent(),
                    SignIconXmlInfo.setup(),
                    0 != RES.getGroupByName("battle").length ? [3, 4] : [4, RES.loadConfig("resource/assets/ui/battle.json", "resource/assets/ui/")];
                case 2:
                    return t.sent(),
                    [4, RES.loadGroup("battle", 0)];
                case 3:
                    t.sent(),
                    t.label = 4;
                case 4:
                    return LoadingManager.instance.hideloading(),
                    [2]
                }
            })
        })
    },
    e.hideOtherDisplay = function() {
        CjsUtil.removeAllAni(),
        ModuleManager.hideAllModule(),
        AwardManager.pause(),
        AchieveManager.pauseShowNotice(),
        DisplayUtil.removeAllChild(LevelManager.topLevel)
    },
    e._drawBg = function() {
        var t = this;
        return new Promise(function(e, i) {
            t._loadingBattleViewBg ? (t._loadingBattleViewBg.texture.disposeBitmapData = !0, t._loadingBattleViewBg.texture.dispose()) : t._loadingBattleViewBg = new egret.Bitmap;
            var n = new egret.RenderTexture;
            n.drawToTexture(egret.lifecycle.stage),
            t._loadingBattleViewBg.texture = n,
            MainManager.stage.addChild(t._loadingBattleViewBg),
            egret.setTimeout(function() {
                e()
            },
            t, 100)
        })
    },
    e.getDrawBg = function() {
        return this._loadingBattleViewBg
    },
    e.removeDrawBg = function() {
        e._loadingBattleViewBg && DisplayUtil.removeForParent(e._loadingBattleViewBg)
    },
    e
} (egret.Sprite);
__reflect(ReadyToFightController.prototype, "ReadyToFightController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RefractiveMagicWeatherController = function() {
    function t() {}
    return t.nextRound = function() {},
    t.destroy = function() {},
    t
} ();
__reflect(RefractiveMagicWeatherController.prototype, "RefractiveMagicWeatherController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RemainHpManager = function() {
    function t() {}
    return t.add = function(t, e, i) {
        void 0 === i && (i = 0),
        this.array.push({
            mode: t,
            remainHP: e,
            realhurt: i
        })
    },
    t.showChange = function() {
        for (var t = 0,
        e = this.array; t < e.length; t++) {
            var i = e[t],
            n = i.mode;
            n.remainHp(i.remainHP, i.realhurt),
            n = null
        }
        this.array = []
    },
    t.clear = function() {
        this.array && (this.array = [])
    },
    t.array = [],
    t
} ();
__reflect(RemainHpManager.prototype, "RemainHpManager");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
SignViewController = function() {
    function t() {}
    return t.init = function() {},
    t.onBuffChange = function(t, e, i) {
        void 0 === e && (e = null),
        void 0 === i && (i = !1);
        var n;
        n = e;
        var o;
        if (null != t) {
            var r = t.dataObj;
            o = r.useId;
            r.index;
            n = this.isSelf(o) ? this.mySignIconArr: this.otherSignIconArr
        } else o = i ? this._myUserId: this._otherUseId;
        n.sort(function(t, e) {
            return t.isShow == e.isShow ? t.signInfo.sort == e.signInfo.sort ? t.index < e.index ? -1 : 1 : t.signInfo.sort < e.signInfo.sort ? -1 : 1 : 1 == t.isShow ? -1 : (1 == e.isShow, 1)
        }),
        this.removeAllBuff(n),
        this.removetHeadFrameIcon(o),
        this.isSelf(o) || i ? this.mySignShowObjecctArr = [] : (this.otherSignShowObjecctArr = [], n = n.reverse());
        for (var s = 0,
        a = 0,
        h = 0,
        l = n; h < l.length; h++) {
            var c = l[h];
            c.isShow && 1 != c.index && (c.isSelf ? (this.mySignShowObjecctArr.indexOf(c) < 0 && 1e3 != c.index && this.mySignShowObjecctArr.push(c), 1e3 != c.index && (void 0 != c.signInfo.frame ? (s++, this.showtHeadFrameIcon(c, this._myUserId)) : this.mySignShowObjecctArr.length - s < this.maxShowNum && this.addLeftIcon(c.icon)), this.mySignShowObjecctArr.length - s >= this.maxShowNum && 1e3 == c.index && this.addLeftIcon(c.icon)) : (this.otherSignShowObjecctArr.indexOf(c) < 0 && 1e3 != c.index && this.otherSignShowObjecctArr.push(c), 1e3 != c.index && (void 0 != c.signInfo.frame ? (a++, this.showtHeadFrameIcon(c, this._otherUseId)) : this.otherSignShowObjecctArr.length - a < this.maxShowNum && this.addRightIcon(c.icon)), this.otherSignShowObjecctArr.length - a >= this.maxShowNum && 1e3 == c.index && this.addRightIcon(c.icon)))
        }
        this.isSelf(o) || i ? this.setSignBuggInfoView(this._myUserId) : this.setSignBuggInfoView(this._otherUseId),
        EventManager.removeEventListener(PetFightEvent.SIGNBUFF_CHANGE, this.onBuffChange, this),
        EventManager.addEventListener(PetFightEvent.SIGNBUFF_CHANGE, this.onBuffChange, this)
    },
    t.update = function(t, e) {
        this._userId = e,
        this.isSelf(e) ? (this._myPropWin = t, this._myUserId = e, this.onIconLoadHandle(!0)) : (this._otherPropWin = t, this._otherUseId = e, this.onIconLoadHandle(!1))
    },
    t.onIconLoadHandle = function(t) {
        var e = SignIconXmlInfo.getAllSignIconInfos();
        if (t) {
            this.destroy1(),
            this.mySignIconArr = [];
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if ("*" != n.className) {
                    var o = egret.getDefinitionByName(n.className);
                    this.mySignIconArr.push(new o(n, this._userId))
                } else {
                    var r = egret.getDefinitionByName("SignBuffView");
                    this.mySignIconArr.push(new r(n, this._userId))
                }
            }
            this.onBuffChange(null, this.mySignIconArr, t)
        } else {
            this.destroy2(),
            this.otherSignIconArr = [];
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                if ("*" != s.className) {
                    var a = egret.getDefinitionByName(s.className);
                    this.otherSignIconArr.push(new a(s, this._userId))
                } else {
                    var h = egret.getDefinitionByName("SignBuffView");
                    this.otherSignIconArr.push(new h(s, this._userId))
                }
            }
            this.onBuffChange(null, this.otherSignIconArr, t)
        }
    },
    t.addLeftIcon = function(t) {
        this._myPropWin.buff_1.addChild(t)
    },
    t.addRightIcon = function(t) {
        this._otherPropWin.buff_1.addChild(t)
    },
    t.removeAllBuff = function(t) {
        for (var e = 0,
        i = t; e < i.length; e++) {
            var n = i[e];
            DisplayUtil.removeForParent(n.icon)
        }
    },
    t.isSelf = function(t) {
        return t == MainManager.actorID
    },
    t.destroy1 = function() {
        for (var t = 0,
        e = this.mySignIconArr; t < e.length; t++) {
            var i = e[t];
            null != i && i.destroy()
        }
        for (var n = 0; 6 > n; n++) null != this.secretLawIconArr[n] && (this.secretLawIconArr[n] = null)
    },
    t.destroy2 = function() {
        for (var t = 0,
        e = this.otherSignIconArr; t < e.length; t++) {
            var i = e[t];
            null != i && i.destroy()
        }
        for (var n = 0; 6 > n; n++) null != this.secretLawIconArr1[n] && (this.secretLawIconArr1[n] = null)
    },
    t.getMySignShowArr = function() {
        return this.mySignShowObjecctArr
    },
    t.getOtherSignShowArr = function() {
        return this.otherSignShowObjecctArr
    },
    t.setSignBuggInfoView = function(t) {
        if (null == this._infosViewMap && (this._infosViewMap = new HashMap), this._infosViewMap.getValue(t)) {
            var e = this._infosViewMap.getValue(t);
            e.updateView()
        } else {
            var i = new SignBuffInfosView(t);
            this._myUserId == t ? (i.left = 40, i.y = 150) : (i.right = 40, i.y = 150),
            this._infosViewMap.add(t, i),
            this._myPropWin.parent.addChild(i)
        }
    },
    t.showInfoView = function(t, e) {
        var i = this._infosViewMap.getValue(t);
        i && i.show(e)
    },
    t.showtHeadFrameIcon = function(t, e) {
        this.removetHeadFrameIcon(e, t),
        null == this._headFrameViewMap && (this._headFrameViewMap = new HashMap);
        var i;
        if (null == this._headFrameViewMap.getValue(e + t.index) ? (i = new BuffHeadFrameView(t, e), this._headFrameViewMap.add(e + t.index, i)) : i = this._headFrameViewMap.getValue(e + t.index), this.isSelf(e)) {
            if (this._myPropWin.headFrame.addChild(i), this._myPropWin.headFrame.numChildren > 1) {
                var n = this._myPropWin.headFrame.getChildAt(this._myPropWin.headFrame.numChildren - 2);
                n && i.id < n.id && this._myPropWin.headFrame.swapChildren(i, n)
            }
        } else if (this._otherPropWin.headFrame.addChild(i), this._otherPropWin.headFrame.numChildren > 1) {
            var o = this._otherPropWin.headFrame.getChildAt(this._otherPropWin.headFrame.numChildren - 2);
            o && i.id < o.id && this._otherPropWin.headFrame.swapChildren(i, o)
        }
    },
    t.removetHeadFrameIcon = function(t, e) {
        if (void 0 === t && (t = null), void 0 === e && (e = null), null == t) {
            if (null != this._headFrameViewMap) {
                var i = this._headFrameViewMap.getValues();
                i.forEach(function(t) {
                    t.destroy()
                }),
                this._headFrameViewMap.clear()
            }
        } else if (null != this._headFrameViewMap) if (null != e) {
            var n = this._headFrameViewMap.getValue(t + e.index);
            null != n && n.destroy(),
            this._headFrameViewMap.remove(t + e.index)
        } else {
            var o = this._headFrameViewMap.getValues();
            o.forEach(function(e) {
                e.useId == t && e.destroy()
            })
        }
    },
    t.destroy = function() {
        if (this.mySignShowObjecctArr = null, this.otherSignShowObjecctArr = null, this.destroy1(), this.destroy2(), null != this._infosViewMap) {
            var t = this._infosViewMap.getValue(this._myUserId),
            e = this._infosViewMap.getValue(this._otherUseId);
            null != t && t.destroy(),
            null != e && e.destroy(),
            this._infosViewMap = null
        }
        this.removetHeadFrameIcon(),
        this._myPropWin && this._myPropWin.destroy(),
        this._otherPropWin && this._otherPropWin.destroy(),
        this._myPropWin = null,
        this._otherPropWin = null,
        EventManager.removeEventListener(PetFightEvent.SIGNBUFF_CHANGE, this.onBuffChange, this)
    },
    t.mySignIconArr = [],
    t.otherSignIconArr = [],
    t.secretLawIconArr = [],
    t.secretLawIconArr1 = [],
    t.myaddIcons = [],
    t.otheraddIcons = [],
    t.mySignShowObjecctArr = [],
    t.otherSignShowObjecctArr = [],
    t._infosViewMap = new HashMap,
    t._headFrameViewMap = new HashMap,
    t.maxShowNum = 8,
    t
} ();
__reflect(SignViewController.prototype, "SignViewController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
SkillAnimateFactory = function() {
    function t() {}
    return t.getSkillAnimate = function() {
        var t;
        return t = 0 == FightManager.fightAnimateMode ? new CJSSkillAnimator: new DBSkillAnimator
    },
    t
} ();
__reflect(SkillAnimateFactory.prototype, "SkillAnimateFactory");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
SoundController = function() {
    function t() {}
    return t.init = function() {
        var e = this;
        SoundManager.stopMusic(),
        this.soundResState = 0,
        PetFightModel.type == PetFightModel.PET_TOPLEVEL || PetFightModel.type == PetFightModel.FIGHT_ARENA || PetFightModel.type == PetFightModel.TOP_WAR_BEYOND ? t.soundurl = ClientConfig.getResPath("assets/fightResource/music/TopFight_Sound.mp3") : PetFightModel.status == PetFightModel.FIGHT_WITH_BOSS || PetFightModel.type == PetFightModel.PET_MELEE_FIGHT_BOSS ? t.soundurl = ClientConfig.getResPath("assets/fightResource/music/Boss_sound.mp3") : t.soundurl = ClientConfig.getResPath("assets/fightResource/music/FightBg_Sound.mp3"),
        EventManager.addEventListener(PetFightEvent.START_FIGHT, t.onStartFight, this),
        SoundManager.loadFightMusic(t.soundurl).then(function() {
            e.soundResState++,
            e.playFightMusic()
        })
    },
    t.playFightMusic = function() {
        this.soundResState >= 2 && SoundManager.playFightMusic()
    },
    t.onStartFight = function(t) {
        this.soundResState++,
        this.playFightMusic()
    },
    t.playEndMusic = function(t) {
        var e;
        e = t ? ClientConfig.getResPath("assets/fightResource/music/Sound_Win.mp3") : ClientConfig.getResPath("assets/fightResource/music/Sound_Lost.mp3"),
        SoundManager.playEffectSound(e)
    },
    t.destroy = function() {
        EventManager.removeEventListener(PetFightEvent.START_FIGHT, t.onStartFight, this),
        SoundManager.stopFightMusic()
    },
    t.soundResState = 0,
    t
} ();
__reflect(SoundController.prototype, "SoundController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
TimerManager = function() {
    function t() {}
    return Object.defineProperty(t, "autoAction", {
        get: function() {
            return this._autoAction
        },
        set: function(t) {
            this._autoAction = t
        },
        enumerable: !0,
        configurable: !0
    }),
    t.setup = function(t) {
        this._mcCountDown = t,
        this._mcCountDown.visible = !0,
        this._mcCountDown.waitpng.visible = !1,
        this._mcCountDown.txtClock.visible = !0,
        this._mcCountDown.touchChildren = this._mcCountDown.touchEnabled = !1,
        this._autoTimer = new egret.Timer(2e3, 1),
        this._autoTimer.addEventListener(egret.TimerEvent.TIMER, this.onAutoTimer, this),
        this._replayTimer = new egret.Timer(2e3, 1),
        this._replayTimer.addEventListener(egret.TimerEvent.TIMER, this.onReplayTimer, this),
        FightManager.isReplay && (this._mcCountDown.visible = !1);
        var e = +egret.localStorage.getItem("fight_report_content"),
        i = +egret.localStorage.getItem("fight_report_position");
        2 == e && 2 == i && (this._mcCountDown.y = 95)
    },
    t.destroy = function() {
        this._autoTimer.stop(),
        this._autoTimer.removeEventListener(egret.TimerEvent.TIMER, this.onAutoTimer, this),
        this._replayTimer.stop(),
        this._replayTimer.removeEventListener(egret.TimerEvent.TIMER, this.onReplayTimer, this),
        this._mcCountDown = null,
        null != this._autoAction && (this._autoAction.destroy(), this._autoAction = null),
        void 0 != this.timeout && egret.clearInterval(this.timeout)
    },
    t.onAutoTimer = function(t) {},
    t.onReplayTimer = function(t) {
        FightManager.isReplay && EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.REPLAY_NEXT))
    },
    t.start = function() {
        FightManager.isReplay ? (this._replayTimer.stop(), this._replayTimer.reset(), this._replayTimer.start()) : (this.autoDid = !1, this._mcCountDown.visible = !0, this._mcCountDown.waitpng.visible = !1, this._mcCountDown.txtClock.visible = !0, this.thistime = 10, this._mcCountDown.txtClock.text = this.thistime.toString(), this._mcCountDown.clockBg.source = "battle_clock_bg_png", this.stopCountDown(), GuideManager.isCompleted() ? (this.timeout = egret.setInterval(this.timeoutfun, this, 1e3), EventManager.dispatchEventWith("resetCountdownLine")) : (this._mcCountDown.txtClock.visible = !1, this._mcCountDown.clockBg.visible = !1), this._autoTimer.stop(), this._autoTimer.start())
    },
    t.timeoutfun = function() {
        this.thistime--,
        this._mcCountDown.txtClock.text = this.thistime.toString(),
        this._mcCountDown.clockBg.source = this.thistime > 3 ? "battle_clock_bg_png": "battle_clock_bg2_png",
        this.thistime <= 0 && (this.countDownOverHandler(), this.stopCountDown())
    },
    t.stopCountDown = function() {
        this._mcCountDown.txtClock && void 0 != this.timeout && (egret.clearInterval(this.timeout), this.timeout = 0)
    },
    t.stop = function() {
        FightManager.isReplay || this.stopCountDown()
    },
    t.wait = function() {
        FightManager.isReplay || (this.stopCountDown(), RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID), this._mcCountDown.visible = !0, this._mcCountDown.waitpng.visible = !0, this._mcCountDown.txtClock.visible = !1, EventManager.dispatchEventWith("stopCountdownLine"))
    },
    t.clearTxt = function() {
        FightManager.isReplay || (this.stopCountDown(), RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID), this._mcCountDown.visible = !1)
    },
    t.countDownOverHandler = function() {
        var t = this,
        e = function() {
            FightManager.closeClock || (RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID), t._autoAction.auto(), t.autoDid = !0)
        };
        SocketConnection.mainSocket.connected ? e() : EventManager.once(SocketEvent.SOCKETRECONNECT, e, this)
    },
    t.autoDid = !1,
    t.timeout = -1,
    t
} ();
__reflect(TimerManager.prototype, "TimerManager");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
TimeScaleManager = function() {
    function t() {}
    return t.setBattleAnimateSpeedBySetting = function() {
        this.setAccelerateEnabled(!0),
        this.GameSpeed = 1;
        var t = egret.localStorage.getItem("fight_speed");
        if (void 0 != t && 1 != FightManager.fightAnimateMode) {
            var e = ~~t;
            if (e > 1) for (var i = 0; e > i; i++) this.setBattleAnimateSpeed(i)
        }
    },
    t.resetAnimateSpeed = function() {
        this.setAccelerateEnabled(!1),
        CjsUtil.setAniFrameRate(30),
        DragonbonesUtil.setTimeScale(1),
        this.GameSpeed = 1
    },
    t.setBattleAnimateSpeed = function(t) {
        var e = this;
        egret.setTimeout(function() {
            e.GameSpeed = t,
            CjsUtil.setAniFrameRate(30 * t),
            DragonbonesUtil.setTimeScale(t)
        },
        this, 100 * t)
    },
    t.setAccelerateEnabled = function(t) {
        t ? (this._startFrames = LevelManager.stage.frameRate, LevelManager.stage.frameRate = this._accelerateFrames) : LevelManager.stage.frameRate = this._startFrames,
        this._lastFrames = LevelManager.stage.frameRate
    },
    t.framePause = function() {
        this._lastFrames = LevelManager.stage.frameRate,
        LevelManager.stage.frameRate = 0
    },
    t.framePlay = function() {
        LevelManager.stage.frameRate = this._lastFrames
    },
    t.GameSpeed = 1,
    t._startFrames = 24,
    t._lastFrames = 24,
    t._accelerateFrames = 60,
    t
} ();
__reflect(TimeScaleManager.prototype, "TimeScaleManager");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
UsePetItemController = function() {
    function t() {}
    return t.useItem = function(t, e, i) {
        void 0 === i && (i = !1),
        e.userID == MainManager.actorID && TimerManager.clearTxt();
        var n = e.userHP,
        o = e.itemID,
        r = ItemFilterXMLInfo.pporblood(o),
        n = e.userHP;
        switch (i ? 1 == r ? 0 != t.info.hp || t instanceof PlayerModel ? (t.info.hp = n, t.propView.resetBar(t)) : PetFightController.lastItemHpValue = n: (t.info.hp = n, t.propView.resetBar(t)) : 0 != t.info.hp || t instanceof PlayerModel ? (t.info.hp = n, t.propView.resetBar(t)) : 1 == r ? PetFightController.lastItemHpValue = n: (t.info.hp = n, t.propView.resetBar(t)), ItemFilterXMLInfo.pporblood(o)) {
        case 1:
            new RenewBloodEffect(t, o, e.changeHp);
            break;
        case 2:
            new RenewPPEffect(t, o);
            break;
        case 3:
            new RemoveStatusEffect(t, o)
        }
    },
    t
} ();
__reflect(UsePetItemController.prototype, "UsePetItemController");
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
UseSkillController = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.size = 43,
        i.HP_X_SELF = 225,
        i.HP_X_ENEMY = 735,
        i.HP_Y = 130,
        i.HP_Y_2 = 159,
        i.reslutMcArr = [],
        i.isZhuiji = !1,
        i.changePlayed = !1,
        i.changePlayed2 = !1,
        i._playerMode = e,
        i.HP_X_SELF = egret.lifecycle.stage.stageWidth / 2 - 255,
        i.HP_X_ENEMY = egret.lifecycle.stage.stageWidth / 2 + 255,
        i.hpFont = BitmapFontController.getFont("hp_damage_num"),
        i.hpFont.letterSpacing = -37,
        i.gainHpTxt = BitmapFontController.getFont("hp_recovery_num"),
        i.gainHpTxt.letterSpacing = -37,
        i.changeHpTxt = BitmapFontController.getFont("fixed_damage_num"),
        i.changeHpTxt.letterSpacing = -37,
        i.realHurtHpTxt = BitmapFontController.getFont("hp_damage_num2"),
        i.realHurtHpTxt.letterSpacing = -37,
        i.skillNameBar = new SkillNameBar,
        i.skillNameBaojiBar = new SkillNameBaojiBar,
        i
    }
    return __extends(e, t),
    e.prototype.destroy = function() {
        this.clearNewAttack(),
        this.defenceMC && (this.defenceMC.destroy(), this.defenceMC = null),
        this.attackMC && (this.attackMC.destroy(), this.attackMC = null),
        DisplayUtil.removeForParent(this.hpCritMc),
        this.hpCritMc = null,
        DisplayUtil.removeForParent(this.hpFont),
        this.hpFont = null,
        DisplayUtil.removeForParent(this.gainHpTxt),
        this.gainHpTxt = null,
        DisplayUtil.removeForParent(this.changeHpTxt),
        this.changeHpTxt = null,
        DisplayUtil.removeForParent(this.realHurtHpTxt),
        this.realHurtHpTxt = null,
        this._playerMode = null,
        this.stateMc && DisplayUtil.removeForParent(this.stateMc),
        this.zhuijiPet = null
    },
    e.prototype.clearNewAttack = function() {
        this.newAttack && (this.newAttack.destroy(), this.newAttack = null, this.attackMC = this._playerMode.petWin.petMC)
    },
    e.prototype.action = function(t) {
        var i = this;
        if (this.changePlayed = !1, this.attackValue = t, this.attackMC = this._playerMode.petWin.petMC, this.defenceMC = this._playerMode.enemyMode.petWin.petMC, this.isZhuiji = t.isZhuiJi, this.isZhuiji || 0 == t.zhuijiId || 0 != t.skillID || (t.lostHP = t.zhuijiHurt, t.isZhuiJi = !0, t.atkTimes = 1, this.attackValue = t, this.isZhuiji = !0), this.isZhuiji) {
            var n = !1,
            o = ZhuijiXmlInfo.getCover(t.zhuijiId);
            this.attackMC.animate.visible = 1 > o;
            var r = "",
            s = ZhuijiXmlInfo.getMonsterID(t.zhuijiId);
            if (0 != s ? (this.zhuijiPet = this._playerMode.getPetByZhuijiId(s, this._playerMode.info.catchTime), PetFightMsgManager.showZhuijiTxt(t, this.zhuijiPet.skinId, this._playerMode.info.petName), r = ZhuijiXmlInfo.getAnmStr(t.zhuijiId, this.zhuijiPet.skinId), this.newAttack = PetAnimateFactory.getPetAnimate(), this.newAttack.showPet(this.zhuijiPet.id, this.zhuijiPet.catchTime, this.zhuijiPet.skinId, this.attackMC.animate.x, this.attackMC.animate.y, this.attackMC.animate.scaleX), this.newAttack && (this.attackMC = this.newAttack)) : (r = ZhuijiXmlInfo.getAnmStr(t.zhuijiId, this._playerMode.info.skinId), PetFightMsgManager.showZhuijiTxt(t, this._playerMode.info.skinId, this._playerMode.info.petName)), this.attackMC instanceof CJSPetAnimator) {
                var a = this.attackMC.animate.labels;
                for (var h in a) if (a[h].label == r) {
                    n = !0;
                    break
                }
            }
            return n ? this.playLabel = r: this.playLabel = "cp",
            this.attackMC.stopAnimateAtActionFrame(this.playLabel, null, null),
            void this.skillMoviePlay()
        }
        if (0 == this.attackValue.skillID) return void this.dispatchRemainHp();
        this.useSkillID = this.attackValue.skillID;
        var l = PetFightSkinSkillReplaceXMLInfo.getReplaceAction(this._playerMode.info.skinId, this.useSkillID, this._playerMode.info.petID);
        if (l && l.length > 0) this.playLabel = l;
        else if (10825 == this.useSkillID || 12551 == this.useSkillID && 1069 == this._playerMode.info.petID) this.playLabel = "attack1",
        this.playLabel = e.LABEL_ARRAY[SkillXMLInfo.getCategory(this.useSkillID)];
        else {
            var c = !1;
            if (this.playLabel = "moves_" + this.attackValue.skillID, this.attackMC instanceof CJSPetAnimator) {
                var _ = this.attackMC.animate.labels;
                for (var u in _) if (_[u].label == this.playLabel) {
                    c = !0;
                    break
                }
            }
            c || (this.playLabel = e.LABEL_ARRAY[SkillXMLInfo.getCategory(this.useSkillID)])
        }
        if (BattleFPSManager.startMonitor(), this.attackMC.stopAnimateAtActionFrame(this.playLabel, null, null), 13582 == this.useSkillID || 13583 == this.useSkillID || 13584 == this.useSkillID || 13585 == this.useSkillID) this.skillMoviePlay();
        else if (t.issecondFight) {
            var p = PetSkinXMLInfo.getSkinPetId(this._playerMode.info.skinId, this._playerMode.info.petID),
            f = PetXMLInfo.getCombo(p);
            if (f != p) {
                var d, g, m = t.userID == MainManager.actorInfo.userID ? 10 * f + 1 : 10 * f + 2,
                y = SkillAnimateFactory.getSkillAnimate();
                d = this.attackMC.getWorldPosition(),
                g = this._playerMode.petWin.parent.globalToLocal(d.x, d.y),
                g.x = g.x - 80,
                this.attackMC.animate.scaleX > 0 && (g.x = g.x - 40),
                0 == FightManager.fightAnimateMode;
                var v = 0;
                this.attackMC.animate.scaleX > 0 && (v = -40),
                y.init(m, "" + m, v, 0, 1) ? y.play(function() {},
                function() {
                    i.skillMoviePlay()
                },
                this) : this.skillMoviePlay()
            } else this.skillMoviePlay()
        } else this.skillMoviePlay()
    },
    e.prototype.refightmcComplete = function(t) {
        var e = t.target;
        e.removeEventListener(egret.MovieClipEvent.COMPLETE, this.refightmcComplete, this),
        e.parent.removeChild(e),
        e = null,
        this.skillMoviePlay()
    },
    e.prototype.showChangeTxt = function(t, e) {
        var i;
        if (0 != t && (t > 0 ? (i = this.gainHpTxt, i.text = "+" + t.toString()) : (i = this.changeHpTxt, i.text = t.toString()), i.y = this.HP_Y, this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? i.x = this.HP_X_SELF: i.x = this.HP_X_ENEMY - i.width, PetFightController.mvContainer.addChild(i), this.showTweenMovie(i, this.HP_Y - 15)), 0 != e) {
            if (!this.realHurtHpTxt) return;
            this.realHurtHpTxt.y = 0,
            this.realHurtHpTxt.text = "-" + e.toString(),
            this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.realHurtHpTxt.x = this.HP_X_SELF: this.realHurtHpTxt.x = this.HP_X_ENEMY - this.realHurtHpTxt.width;
            var n;
            n = 0 != t ? this.HP_Y + 60 : this.HP_Y,
            this.realHurtHpTxt.y = n + 60,
            PetFightController.mvContainer.addChild(this.realHurtHpTxt),
            this.showTweenMovie(this.realHurtHpTxt, n - 15)
        }
    },
    e.prototype.closeChangeTxt = function(t) {
        this.closeTimer.stop(),
        this.closeTimer.removeEventListener(egret.TimerEvent.TIMER, this.closeChangeTxt, this),
        this.closeTimer = null,
        DisplayUtil.removeForParent(this.gainHpTxt),
        DisplayUtil.removeForParent(this.realHurtHpTxt)
    },
    e.prototype.skillMoviePlay = function() {
        var t = this;
        this.dispatchEvent(new egret.Event(e.MOVIE_START));
        var i;
        i = this.attackValue.userID == MainManager.actorInfo.userID ? this._playerMode.petWin.petID: this._playerMode.enemyMode.petWin.petID,
        this.played = !1,
        this.attackMC.playAnimate(this.playLabel,
        function(e) {
            return t.isZhuiji ? void t.onMovieHit(null) : void(t.played || t.petPlay(null))
        },
        function() {
            return t.isZhuiji ? void t.onMovieOver(null) : void(t.played || t.petPlay(null))
        },
        this);
        var n = "";
        this.attackValue.isZhuiJi && (n = null != this.zhuijiPet ? ZhuijiXmlInfo.getSkillName(this.attackValue.zhuijiId, this.zhuijiPet.skinId) : ZhuijiXmlInfo.getSkillName(this.attackValue.zhuijiId, this._playerMode.info.skinId)),
        this.attackValue.isCrit ? this.showSkillNameBaoji(n) : this.showSkillName(n)
    },
    e.prototype.petPlay = function(t) {
        var i = this;
        if (this.attackMC) {
            this.played = !0;
            var n, o = 0;
            n = this._playerMode.petWin.petID,
            o = this._playerMode.info.skinId;
            var r = e.LABEL_ARRAY[SkillXMLInfo.getCategory(this.useSkillID)];
            "attack" != r && "sa" != r && "cp" != r && (r = "attack");
            var s, a = SkillAnimateFactory.getSkillAnimate();
            s = this.attackMC.getWorldPosition();
            var h = "" + PetFightSkinSkillReplaceXMLInfo.getReplaceSkill(o, this.useSkillID, n);
            if (0 == FightManager.fightAnimateMode) {
                var l = SkillXMLInfo.getSkillObj(this.useSkillID);
                l && void 0 != l.Fullscreen ? s.x = .5 * egret.lifecycle.stage.stageWidth - CjsUtil.cjsContainer.x: s.x = this._playerMode.petWin.petContainer.x + BaseFighterPetView.WIN_WIDTH / 2
            }
            a.init(this.useSkillID, h, s.x, s.y, this.attackMC.animate.scaleX),
            a.play(function() {
                i.onMovieHit(null)
            },
            function() {
                i.onMovieOver(null)
            },
            this)
        }
    },
    e.prototype.showSkillName = function(t) {
        void 0 === t && (t = ""),
        PetFightController.mvContainer.addChild(this.skillNameBar);
        var e = FighterModelFactory.getFighterMode(this.attackValue.userID);
        this.skillNameBar.y = 170,
        this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.skillNameBar.setSkill(this.useSkillID, !0, t, e.info.skinId).then(function() {}) : this.skillNameBar.setSkill(this.useSkillID, !1, t, e.info.skinId)
    },
    e.prototype.showSkillNameBaoji = function(t) {
        void 0 === t && (t = ""),
        LevelManager.tipLevel.addChild(this.skillNameBaojiBar);
        var e = FighterModelFactory.getFighterMode(this.attackValue.userID);
        this.skillNameBaojiBar.y = 170,
        this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.skillNameBaojiBar.setSkill(this.useSkillID, !0, t, e.info.skinId).then(function() {}) : this.skillNameBaojiBar.setSkill(this.useSkillID, !1, t, e.info.skinId)
    },
    e.prototype.showCritMc = function(t) {
        this.removeCritMc();
        var e = RES.getRes("crisit2_json"),
        i = RES.getRes("crisit2_png"),
        n = new egret.MovieClipDataFactory(e, i);
        this.critMc = new egret.MovieClip(n.generateMovieClipData("crisit2")),
        this.critMc.touchEnabled = !1,
        this.critMc.gotoAndPlay(1, -1);
        var o = this._playerMode.petWin.parent.parent.grpEffectMovieContainer;
        t ? (this.critMc.x = 90, this.critMc.y = -50, this.critMc.scaleX = 1) : (this.critMc.x = 1100, this.critMc.y = -50, this.critMc.scaleX = -1),
        o.addChild(this.critMc)
    },
    e.prototype.removeCritMc = function() {
        this.critMc && this.critMc.parent && this.critMc.parent.removeChild(this.critMc),
        this.critMc = null
    },
    e.prototype.onMovieOver = function(t, i) {
        var n = this;
        void 0 === i && (i = null);
        var o = {
            Miss: "m",
            "微弱": "r",
            "克制": "k",
            "无效": "w"
        };
        if (BattleFPSManager.stopMonistor(), this._playerMode) {
            var r = this._playerMode.petWin.parent.parent.grpEffectMovieContainer;
            if (0 != this.attackValue.changeValue && !this.changePlayed) return void this._playerMode.petWin.change(this.attackValue.changeValue,
            function() {
                n.changePlayed = !0,
                n.onMovieOver(t, n._playerMode.petWin.petMC)
            });
            if (0 != this.attackValue.changeValue2 && !this.changePlayed2) return void this._playerMode.enemyMode.petWin.change(this.attackValue.changeValue2,
            function() {
                n.changePlayed2 = !0,
                n.onMovieOver(t, n._playerMode.enemyMode.petWin.petMC)
            });
            if (null == i ? this.defenceMC.playStandAnim() : (i.playDefendAnim(), i.playStandAnim()), this.attackValue.isCrit) {
                this.hpCritMc || (this.hpCritMc = BitmapFontController.getFont("crits_attack_hp_num"), this.hpCritMc.letterSpacing = -11),
                this.hpCritMc.textAlign = "center",
                this.showCrisHp(this.hpCritMc, this.attackValue.lostHP);
                this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? (this.hpCritMc.x = this.HP_X_ENEMY - 100, this.showCritMc(!0)) : (this.hpCritMc.x = this.HP_X_SELF, this.showCritMc(!1)),
                this.hpCritMc.y = 150,
                r.addChild(this.hpCritMc),
                this.showTweenMovie(this.hpCritMc, this.HP_Y - 15),
                this.showTweenMovie(this.critMc, -65)
            } else {
                0 == this.attackValue.atkTimes ? this.hpFont.text = "m": 4 == SkillXMLInfo.getCategory(this.useSkillID) && 0 == this.attackValue.lostHP ? this.hpFont.text = "": -1 != e.SKILLS_IGNORE.indexOf(this.useSkillID) && "微弱" == this.attackValue.effectName ? this.hpFont.text = "-" + this.attackValue.lostHP: -1 != [17514].indexOf(this.useSkillID) && "无效" == this.attackValue.effectName ? this.hpFont.text = "-" + this.attackValue.lostHP: "无效" == this.attackValue.effectName && 0 == this.attackValue.lostHP ? this.hpFont.text = "w": o[this.attackValue.effectName] ? this.hpFont.text = o[this.attackValue.effectName] + "-" + this.attackValue.lostHP: this.hpFont.text = "-" + this.attackValue.lostHP;
                for (var s = this.attackValue.immunizationStates.length,
                a = 0; s > a; a++) if (1 == this.attackValue.immunizationStates[a]) {
                    this.stateMc = new eui.Image,
                    this.stateMc.source = RES.getRes("fightpngs.immunizatipnMc");
                    break
                }
                if (this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.hpFont.x = this.HP_X_ENEMY - this.hpFont.width: this.hpFont.x = this.HP_X_SELF, this.hpFont.y = this.HP_Y, this.hpFont.visible = !0, r.addChild(this.hpFont), 0 != this.attackValue.gainHP) {
                    if (!this.gainHpTxt) return;
                    this.gainHpTxt.y = 0,
                    this.attackValue.gainHP > 0 ? this.gainHpTxt.text = "+" + this.attackValue.gainHP.toString() : this.gainHpTxt.text = this.attackValue.gainHP.toString(),
                    this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.gainHpTxt.x = this.HP_X_SELF: this.gainHpTxt.x = this.HP_X_ENEMY - this.gainHpTxt.width,
                    this.gainHpTxt.y = this.HP_Y,
                    r.addChild(this.gainHpTxt)
                }
                if (this.showTweenMovie(this.hpFont, this.HP_Y - 15), this.attackValue.isZhuiJi) {
                    var h = ZhuijiXmlInfo.showDamage(this.attackValue.zhuijiId);
                    this.hpFont.visible = h
                }
                this.showTweenMovie(this.gainHpTxt, this.HP_Y - 15),
                this.stateMc && (this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? this.stateMc.x = this.HP_X_ENEMY + 25 : this.stateMc.x = this.HP_X_SELF - this.stateMc.width - 25, this.stateMc.y = 72, this._playerMode.petWin.parent.addChild(this.stateMc), egret.Tween.get(this.stateMc).to({
                    y: this.HP_Y - 15
                },
                1e3).call(function() {
                    DisplayUtil.removeForParent(n.stateMc)
                }))
            }
            this.removeAllSkillReslut();
            for (var l = 0; l < this.attackValue.skillResult.length; l++) this.attackValue.skillResult.indexOf(1) >= 0 && this.attackValue.skillResult.indexOf(2) >= 0 && this.attackValue.skillResult.indexOf(2) == l || this.showSkillReslut(this.attackValue.skillResult[l]);
            this.attackValue.issecondFight && this._playerMode.petWin.changeFirstFightmc(),
            this.attackValue.isZhuiJi && (this.clearNewAttack(), this.zhuijiPet = null, this.attackMC.animate.visible = !0),
            this.textTimer = new egret.Timer(1500, 1),
            this.textTimer.addEventListener(egret.TimerEvent.TIMER, this.closeTxt, this),
            this.textTimer.start(),
            this.dispatchEvent(new PetFightEvent(PetFightEvent.LOST_HP, {
                hp: this.attackValue.lostHP,
                max: this.attackValue.maxHpOther
            })),
            this.dispatchEvent(new PetFightEvent(PetFightEvent.GAIN_HP, {
                hp: this.attackValue.gainHP,
                max: this.attackValue.maxHpSelf
            },
            function() {
                n.dispatchEvent(new PetFightEvent(PetFightEvent.REMAIN_HP, {
                    remain: n.attackValue.remainHP,
                    realhurt: n.attackValue.realHurtHp
                }))
            }))
        }
    },
    e.prototype.showCrisHp = function(t, e, i, n) {
        void 0 === i && (i = 0),
        void 0 === n && (n = !1),
        t.text = (0 - e).toString()
    },
    e.prototype.dispatchRemainHp = function() {
        this.attackValue.isZhuiJi || this.attackValue.issecondFight || this.dispatchEvent(new PetFightEvent(PetFightEvent.REMAIN_HP, {
            remain: this.attackValue.remainHP,
            realhurt: this.attackValue.realHurtHp
        }))
    },
    e.prototype.closeTxt = function(t) {
        return this.textTimer && (this.textTimer.removeEventListener(egret.TimerEvent.TIMER, this.closeTxt, this), this.textTimer.stop(), this.textTimer = null),
        this.attackValue.zhuijiId > 0 && !this.attackValue.isZhuiJi ? (this.attackValue.isZhuiJi = !0, this.attackValue.lostHP = this.attackValue.zhuijiHurt, this.attackValue.effectName = "", this.attackValue.atkTimes = 1, this.attackValue.gainHP = 0, this.attackValue.immunizationStates = [], this.attackValue.skillResult = [], this.attackValue.isCrit = 0, void this.action(this.attackValue)) : void this.dispatchEvent(new egret.Event(e.MOVIE_OVER))
    },
    e.prototype.onMovieHit = function(t) {
        this.defencePetPlay()
    },
    e.prototype.defencePetPlay = function() {
        if (PetFightController.zhuqueStatus) {
            PetFightController.zhuqueStatus = !1;
            var t = new eui.Image(RES.getRes("fightpngs.zhuqueStatus_UI")),
            e = this._playerMode.petWin.parent.parent.grpEffectMovieContainer;
            e.addChild(t),
            PetFightMsgManager.showTipText("【菲尼克斯】进入绝对守护状态，3回合内没有击破守护盾，朱雀将进入狂暴状态");
            var i = setTimeout(function() {
                clearTimeout(i),
                DisplayUtil.removeForParent(t),
                t = null
            },
            2e3)
        }
        this.defenceMC.playDefendAnim()
    },
    e.prototype.showSkillReslut = function(t) {
        var e = this._playerMode.petWin.parent.parent.grpEffectMovieContainer,
        i = new eui.Image;
        i.source = RES.getRes("battle_skill_reslut_" + t + "_png"),
        this.reslutMcArr.push(i),
        this.attackValue.userID == MainManager.actorID || FightManager.isReplay && 0 != this.attackValue.userID ? "属性攻击" == SkillXMLInfo.getCategoryName(this.attackValue.skillID) ? i.x = this.HP_X_SELF - 50 : i.x = this.HP_X_ENEMY - 50 : "属性攻击" == SkillXMLInfo.getCategoryName(this.attackValue.skillID) ? i.x = this.HP_X_ENEMY - 50 : i.x = this.HP_X_SELF - 50,
        i.y = 210,
        e.addChild(i),
        this.showTweenMovie(i, 195)
    },
    e.prototype.removeAllSkillReslut = function() {
        for (var t = 0,
        e = this.reslutMcArr; t < e.length; t++) {
            var i = e[t];
            void 0 != i && DisplayUtil.removeForParent(i)
        }
        this.reslutMcArr = []
    },
    e.prototype.showTweenMovie = function(t, e, i) {
        void 0 === i && (i = 1500),
        t.visible = !0,
        t.alpha = 0;
        var n = t.y;
        egret.Tween.get(t).to({
            alpha: 1,
            y: e > n ? n + 1.5 : n - 1.5
        },
        150).call(function() {
            egret.Tween.get(t).to({
                alpha: 1,
                y: e > n ? n + 13.5 : n - 13.5
            },
            1200).call(function() {
                egret.Tween.get(t).to({
                    alpha: 0,
                    y: e
                },
                150).call(function() {
                    DisplayUtil.removeForParent(t)
                })
            })
        })
    },
    e.SKILLS_IGNORE = [19843, 19734, 19477, 19586, 17299, 17514, 17774, 17946, 17950, 17954, 18331, 19123, 19230, 19295, 19324, 19765, 19989, 19965, 19926, 30017, 30074, 30148, 30158, 30518, 30678, 19856, 30757, 30791, 30861, 30809, 25555, 30839, 30961, 30949, 30955, 31091, 31273, 31219, 31529, 19001, 30878, 31261, 31351, 31570, 31600, 31654, 31762, 31797, 32045, 32128, 32444, 32519, 32639, 32669, 33014, 33404, 33698, 33953, 33994, 34593, 34900, 35438, 35653, 36371, 36377, 36647],
    e.MOVIE_START = "movieStart",
    e.MOVIE_OVER = "movieOver",
    e.LABEL_ARRAY = ["", "attack", "sa", "", "cp"],
    e
} (egret.EventDispatcher);
__reflect(UseSkillController.prototype, "UseSkillController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
Battle = function() {
    function t() {}
    return t.init = function() {
        FightManager.setup(),
        FightNoteCmdListener.start()
    },
    t
} ();
__reflect(Battle.prototype, "Battle");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BattleItemTipController = function() {
    function t() {}
    return t.showItemTip = function(t, e) {
        this.itemTip || (this.itemTip = new BattleItemTip),
        this.itemTip.showTip(t),
        this.itemTip.x = 20,
        this.itemTip.y = 467 - this.itemTip.height,
        this.itemTip.alpha = .5,
        egret.Tween.removeTweens(this.itemTip),
        LevelManager.tipLevel.addChild(this.itemTip),
        egret.Tween.get(this.itemTip).to({
            alpha: 1
        },
        150, egret.Ease.quadOut)
    },
    t.hideTip = function() {
        var t = this;
        this.itemTip && this.itemTip.parent && (egret.Tween.removeTweens(this.itemTip), egret.Tween.get(this.itemTip).to({
            alpha: 0
        },
        100, egret.Ease.quartIn).call(function() {
            DisplayUtil.removeForParent(t.itemTip)
        }))
    },
    t
} ();
__reflect(BattleItemTipController.prototype, "BattleItemTipController");
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
CatchPetItemCategory = function(t) {
    function e(e) {
        var i = t.call(this, e) || this;
        return i.neilArr = [77, 78, 79, 310, 311, 312],
        i.updateBtn(e),
        i
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "itemID", {
        set: function(e) {
            t.prototype.setSuperItemId.call(this, e),
            this.updateBtn(e)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.updateBtn = function(t) {
        this._sprite.filters = null,
        this._sprite.touchEnabled = !0,
        this._sprite.touchChildren = !0;
        var e = this._sprite.getChildByName("petItemUI"),
        i = e.getChildByName("currency_mask");
        i.visible = !1;
        var n = FighterModelFactory.enemyMode;
        0 == n.info.catchType ? (i.visible = !0, this._sprite.touchEnabled = !1, this._sprite.touchChildren = !1) : 1 == n.info.catchType && t >= 300141 && 300150 >= t ? (i.visible = !0, this._sprite.touchChildren = !1, this._sprite.touchEnabled = !1) : 2 == n.info.catchType && (300141 > t || t > 300150) && (i.visible = !0, this._sprite.touchEnabled = !1, this._sprite.touchChildren = !1)
    },
    e.prototype.useItem = function(e) {
        t.prototype.useItem.call(this, e);
        FighterModelFactory.playerMode,
        FighterModelFactory.enemyMode;
        SocketConnection.send(CommandID.CATCH_MONSTER, this.itemID),
        BaseFighterPetView.itemID = this.itemID,
        this._itemNum--,
        this.refreshInfo(),
        this._itemNum <= 0 && EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ON_NO_PET_ITEM, this.itemID))
    },
    e
} (AbstractPetItemCategory);
__reflect(CatchPetItemCategory.prototype, "CatchPetItemCategory");
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
PlayerModel = function(t) {
    function e(e) {
        var i = t.call(this, e) || this;
        return i.appearAnimPets = [2607, 2873],
        i.isPetNoBlood = !1,
        i._isRequirechange = !1,
        i._2019PetIsChangeShow = !1,
        i
    }
    return __extends(e, t),
    e.prototype.checkIsCatch = function() {
        this.toolBtnObserver.isCanCatch()
    },
    e.prototype.usePetItemHandler = function(t) {
        TimerManager.wait(),
        this.subject.showFightPanel(),
        this.subject.closePanel()
    },
    e.prototype.onSocketError = function(t) {
        t.headInfo.cmdID == CommandID.USE_PET_ITEM || t.headInfo.cmdID == CommandID.USE_SKILL ? (this.subject.showPetPanel(), this.subject.openPanel()) : t.headInfo.cmdID == CommandID.ESCAPE_FIGHT && (LevelManager.root.touchChildren = !0)
    },
    e.prototype.onNoBloodHandler = function(e) {
        t.prototype.onNoBloodHandler.call(this, e);
        var i = e.dataObj;
        if (i.userID == this.info.userID) if (PetFightModel.type == PetFightModel.IMAGE_FIGHT) {
            for (var n = 0,
            o = FightUserInfo.fighterInfos.myInfo.petCatchArr[n]; 0 == FightUserInfo.fighterInfos.myInfo.getPetInfo(o).hp;) n++,
            o = FightUserInfo.fighterInfos.myInfo.petCatchArr[n];
            SocketConnection.send(CommandID.CHANGE_PET, o),
            this.info.catchTime = o,
            StartFightInfo.isAutoSelectPet = !0,
            this.subject.showFightPanel()
        } else this.subject.closePanel(),
        this.subject.showPetPanel(!0)
    },
    e.prototype.changePet = function(e, i) {
        if (void 0 === i && (i = !1), t.prototype.changePet.call(this, e, i), !FightManager.isReplay) {
            if (this.conPanelObserver.changePet(), this.subject.showFightPanel(), 3788 == e.petID && (this._2019PetIsChangeShow = !0), StartFightInfo.isAutoSelectPet) {
                if (this._2019PetIsChangeShow && 3 == this.info.isChangeFace) return void this.subject.closePanel();
                this._isRequirechange ? this.subject.closePanel() : this.subject.openPanel()
            } else this.subject.closePanel();
            for (var n = [], o = [], r = 0; r < e.changehps.length; r++) {
                var s = e.changehps[r];
                n.push({
                    catchTime: this.info.catchTime,
                    chujueNumber: s.chujueNumber,
                    chujueRound: s.chujueRound
                }),
                o.push({
                    catchTime: this.info.catchTime,
                    imprintNum: s.imprinNum,
                    imprintList: s.imprintList
                })
            }
            this.conPanelObserver.petUpdateCurPet(e.catchTime),
            this.conPanelObserver.setPetsChujue(n),
            this.conPanelObserver.setImprint(o)
        }
    },
    e.prototype.alivepet = function(t) {
        if (0 != t && (FightUserInfo.fighterInfos.myInfo.aliveNum++, FightUserInfo.fighterInfos.myInfo.petInfoArr.length)) {
            var e = FightUserInfo.fighterInfos.myInfo.petInfoArr[t - 1];
            e && (e.hp = e.maxHp)
        }
        this.conPanelObserver.alivepet(t)
    },
    e.prototype.getPetByZhuijiId = function(t, e, i) {
        void 0 === i && (i = 0);
        for (var n = FightUserInfo.fighterInfos.myInfo.petInfoArr,
        o = t,
        r = [], s = 0; s < n.length; s++) n[s].hp > 0 && n[s].id == o && n[s].catchTime != e && r.push(n[s]);
        return r.sort(function(t, e) {
            return t.skinId - e.skinId
        }),
        r.length ? r[0] : n[0]
    },
    e.prototype.resetalivenum = function(t) {
        FightUserInfo.fighterInfos.myInfo.aliveNum -= t,
        this._propView.showPetNum(this)
    },
    e.prototype.changeFirstPetHp = function(t, e, i) {
        var n;
        n = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.myInfo.getPetInfo(t) : PetManager.getPetInfo(t),
        n && (n.hp = e, n.maxHp = i)
    },
    e.prototype.changeHps = function(t) {
        if (t) {
            for (var e = [], i = [], n = [], o = [], r = 0; r < t.length; r++) {
                var s, a = t[r];
                s = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.myInfo.getPetInfo(a.id) : PetManager.getPetInfo(a.id),
                s && (s.hp = a.hp, s.maxHp = a.maxhp, s.lock = 0 != a.lock, s.chujueNumber = a.chujueNumber, s.chujueRound = a.chujueRound, s.imprintNum = a.imprintNum, s.imprintList = a.imprintList, s.lock && e.push(a.id), i.push({
                    catchTime: s.catchTime,
                    chujueNumber: s.chujueNumber,
                    chujueRound: s.chujueRound
                }), n.push({
                    catchTime: s.catchTime,
                    imprintNum: s.imprintNum,
                    imprintList: s.imprintList
                }), o.push({
                    catchTime: s.catchTime,
                    hp: s.hp,
                    maxHp: s.maxHp
                }))
            }
            this.conPanelObserver.lockPet(e),
            this.conPanelObserver.setPetsChujue(i),
            this.conPanelObserver.setImprint(n),
            this.conPanelObserver.changeHps(o)
        }
    },
    e.prototype.createView = function(t) {
        this.controlContainer = t.controlMC,
        t.toolBtns.right = DeviceInfoManager.adapterOffSetX + 50,
        t.OtherInfoPanel.right = DeviceInfoManager.adapterOffSetX,
        t.MyInfoPanel.left = DeviceInfoManager.adapterOffSetX,
        this.subject = new FightToolSubject,
        this.toolBtnObserver = new ToolBtnPanelObserver(this.subject, t.toolBtns),
        EventManager.addEventListener(PetFightEvent.USE_PET_ITEM, this.usePetItemHandler, this),
        this.subject.closePanel(),
        this.initSkillCon();
        var e;
        e = t.MyInfoPanel;
        e.x,
        this.controlContainer.y;
        this._propView = new PlayerPropView(e),
        this._propView.update(this),
        this.conPanelObserver = new ControlPanelObserver(this.subject),
        this.conPanelObserver.addEventListener(ControlPanelObserver.ON_ADD_PANEL, this.removePanelBG, this),
        this.conPanelObserver.init(t.grpSkillContainer),
        this.controlContainer.addChildAt(this.conPanelObserver, this.controlContainer.numChildren - 1),
        this.conPanelObserver.close(),
        this._petView = new PlayerPetView,
        this._petView.addEventListener(PetFightEvent.ON_OPENNING, this.onOpenning, this),
        this._petView.update(this.info.petID, this.info.catchTime, this.info.skinId, this.info.isChangeFace)
    },
    e.prototype.destroy = function() {
        this._petView && this._petView.removeEventListener(PetFightEvent.ON_OPENNING, this.onOpenning, this),
        t.prototype.destroy.call(this),
        this.controlContainer = null,
        this.conPanelObserver && (this.conPanelObserver.removeEventListener(ControlPanelObserver.ON_ADD_PANEL, this.removePanelBG, this), DisplayUtil.removeForParent(this.conPanelObserver), this.conPanelObserver = null),
        this.toolBtnObserver && (this.toolBtnObserver.destroy(), this.toolBtnObserver = null),
        this.subject && (this.subject.destroy(), this.subject = null),
        EventManager.removeEventListener(PetFightEvent.USE_PET_ITEM, this.usePetItemHandler, this)
    },
    e.prototype.nextRound = function() {
        var t = NpcChangePetData.first();
        if (t) {
            var i = FighterModelFactory.getFighterMode(t.userID);
            i.changePet(t)
        }
        this.subject.openPanel(),
        NpcChangePetData.changePetcatchTime > 0 ? (this.setAutoChangePet(NpcChangePetData.changePetcatchTime), NpcChangePetData.changePetcatchTime = 0) : this._isRequirechange && (this.toolBtnObserver.disablePetBtn(!0), this._isRequirechange = !1),
        FighterModelFactory.playerMode.propView.dispatchNoBlood && FighterModelFactory.playerMode.dispatchEvent(new PetFightEvent(PetFightEvent.NO_BLOOD, FighterModelFactory.playerMode.info)),
        FighterModelFactory.enemyMode.propView.dispatchNoBlood && FighterModelFactory.enemyMode.dispatchEvent(new PetFightEvent(PetFightEvent.NO_BLOOD, FighterModelFactory.enemyMode.info)),
        this.dispatchEvent(new egret.Event(e.StartNextRound)),
        this.toolBtnObserver.setBtnAfterRoundChange()
    },
    e.prototype.onOpenning = function(t) {
        3 != this.info.isChangeFace || this.changeplayed ? (TimerManager.start(), this.conPanelObserver.open()) : (this.subject.closePanel(), this.changePetFace())
    },
    e.prototype.removePanelBG = function(t) {
        this._isRequirechange || this.subject.openPanel()
    },
    Object.defineProperty(e.prototype, "skillBtnViews", {
        get: function() {
            return this.conPanelObserver.skillPanel.skillBtnArray
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setAutoChangePet = function(t, e) {
        if (void 0 === e && (e = !0), e) {
            if (0 == t) return;
            this._isRequirechange = !0,
            SocketConnection.send(CommandID.CHANGE_PET, t),
            this.info.catchTime = t,
            this.subject.showFightPanel(),
            this.subject.closePanel()
        } else this._isRequirechange = !0,
        NpcChangePetData.changePetcatchTime = t,
        this.subject.closePanel()
    },
    e.prototype.changePetFace = function() {
        var t = this;
        3 != this.info.isChangeFace || this.changeplayed || this._petView.change(3,
        function() {
            t.info.isChangeFace = 2,
            t.changeplayed = !0,
            TimerManager.start(),
            !t._2019PetIsChangeShow || StartFightInfo.isAutoSelectPet ? t.subject.openPanel() : t._2019PetIsChangeShow = !1,
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CHANGEFACE_OVER))
        })
    },
    e.StartNextRound = "start_next_round",
    e
} (BaseFighterModel);
__reflect(PlayerModel.prototype, "PlayerModel");
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
RenewBloodItemCategory = function(t) {
    function e(e) {
        return t.call(this, e) || this
    }
    return __extends(e, t),
    e.prototype.useItem = function(e) {
        t.prototype.useItem.call(this, e),
        SocketConnection.send(CommandID.USE_PET_ITEM, FighterModelFactory.playerMode.info.catchTime, this.itemID, 0),
        this._itemNum--,
        t.prototype.refreshInfo.call(this),
        this._itemNum <= 0 && EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ON_NO_PET_ITEM, this.itemID))
    },
    e
} (AbstractPetItemCategory);
__reflect(RenewBloodItemCategory.prototype, "RenewBloodItemCategory");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
FightNoteCmdListener = function() {
    function t() {}
    return t.start = function() {
        SocketConnection.addCmdListener(CommandID.NOTE_INVITE_TO_FIGHT, t.noteInviteToFight, this),
        SocketConnection.addCmdListener(CommandID.NOTE_HANDLE_FIGHT_INVITE, t.noteHandlerFightInvite, this),
        SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT, t.noteReadyToFight, this),
        SocketConnection.addCmdListener(CommandID.NOTE_START_FIGHT, t.startFight, this)
    },
    t.noteInviteToFight = function(t) {
        var e = new InviteNoteInfo(t.data);
        FightManager.add(e)
    },
    t.noteHandlerFightInvite = function(t) {
        var e = new InviteHandleInfo(t.data);
        0 == e.result ? Alarm.show("<a href='event:'><u><font color='#ff0000'>" + e.nickName + "(" + e.userID + ")</font></u></a>拒绝了你的邀请！") : 2 == e.result ? Alarm.show("对方在线时长超过6小时！") : 3 == e.result ? Alarm.show("对方没有可以出战的精灵！") : 4 == e.result && Alarm.show("对方不在线！"),
        ModuleManager.hideModule("fightWaitPanel")
    },
    t.noteReadyToFight = function(e) {
        var i = this;
        egret.callLater(function() {
            t.readyData = new NoteReadyToFightInfo(e.data),
            FightManager.amyPetIds = t.readyData.userInfos.otherInfo.petIDArr.slice();
            var n = t.readyData.model; - 1 != i.escapeBattleType.indexOf(n) && (PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS);
            try {
                t.beforeFightEntry()
            } catch(o) {
                console.warn("对战错误")
            }
        },
        this)
    },
    t.beforeFightEntry = function() {
        FightManager.fightStep = 0,
        EventManager.dispatchEvent(new egret.Event("petFight_Ready")),
        PetManager.isUpdateing() ? t.onReady() : PetManager.updateBagInfo(t.onReady)
    },
    t.onReady = function() {
        PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_WILD || PetFightModel.type == PetFightModel.PEAK_JIHAD_LIMIT_AC || (PetFightModel.type = t.readyData.model),
        -1 == t.typePve.indexOf(t.readyData.model) ? PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER: PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && (PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS),
        PetFightModel.type == PetFightModel.PET_ELMENT_FIGHT ? (EventManager.dispatchEvent(new DynamicEvent("ElementFightStart", {
            type: t.readyData.efFightType,
            name: t.readyData.userInfos.otherInfo.nickName,
            clothes: t.readyData.userInfos.otherInfo.clothArr
        })), SocketConnection.addCmdListener(CommandID.FIGHT_OVER, t.onBeforeFightOver, this), t._delay = setTimeout(function() {
            SocketConnection.removeCmdListener(CommandID.FIGHT_OVER, t.onBeforeFightOver, this),
            clearTimeout(t._delay),
            ReadyToFightController.setup(t.readyData)
        },
        3e3)) : ReadyToFightController.setup(t.readyData)
    },
    t.onBeforeFightOver = function(e) {
        SocketConnection.removeCmdListener(CommandID.FIGHT_OVER, t.onBeforeFightOver, this),
        clearTimeout(t._delay)
    },
    t.startFight = function(e) {
        if (LoadingViewController.isLoadingUI) return void(PetFightController._fightByServer = !0);
        var i = e.data;
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.START_FIGHT, i)),
        t.isInFightModule = !0
    },
    t.getMyPetInfoArray_FromFightNote = function() {
        return t.readyData.userInfos.myInfo.petInfoArr.concat([])
    },
    t.isInFightModule = !1,
    t.escapeBattleType = [67, 102],
    t.typeNpc = [],
    t.typeBoss = [],
    t.typePvp = [],
    t.typeSpKing = [5, 6],
    t.typePve = [3, 4, 7, 10, 12, 13, 16, 17, 18, 24, 25, 26, 27, 29, 30, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 45, 46, 47, 52, 54, 55, 56, 57, 58, 59, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 75, 79, 81, 82, 83, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 105],
    t
} ();
__reflect(FightNoteCmdListener.prototype, "FightNoteCmdListener");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
FightOverController = function() {
    function t() {}
    return t.init = function() {
        this.isEscape = !1,
        this.isOvertime = !1,
        this.isDraw = !1,
        this.isSysError = !1,
        this.isNpcEscape = !1,
        this.isCatch = !1,
        this.isPlayerLost = !1,
        this.overData = null,
        this.isFightOver = !1,
        this.isLost = !1,
        this.inited = !0,
        this.isHaveSurrender = !1,
        SocketConnection.addCmdListener(CommandID.FIGHT_OVER, this.onFightOver, this),
        SocketConnection.addCmdListener(CommandID.ESCAPE_FIGHT, this.onEscapeFight, this),
        EventManager.addEventListener(PetFightEvent.FIGHT_CLOSE, this.onCloseFight, this)
    },
    t.onCloseFight = function(t) {
        var e = this;
        FightManager.isWin && FighterModelFactory.enemyMode && FighterModelFactory.enemyMode.info.hp > 0 ? (this.isCatch || (FighterModelFactory.enemyMode.info.hp = 0), FighterModelFactory.enemyMode.propView.resetBar(FighterModelFactory.enemyMode, !1), egret.setTimeout(function() {
            e._onCloseFight(t)
        },
        this, this.isCatch ? 0 : 1400)) : this._onCloseFight(t)
    },
    t._onCloseFight = function(e) {
        var i = this;
        if (FightNoteCmdListener.isInFightModule = !1, e.dataObj.delay) t.clear(this.overData);
        else var n = setTimeout(function() {
            t.clear(i.overData),
            clearTimeout(n)
        },
        1e3)
    },
    t.onFightOver = function(t, e) {
        if (!t && e ? this.overData = e: this.overData = new FightOverInfo(t.data), FightManager.closeClock = !1, this.overData.winnerID == MainManager.actorID ? FightManager.isWin = !0 : FightManager.isWin = !1, this.isFightOver = !0, OnlineManager.getInstance().isLogin1004) return FightManager.isWin = !1,
        RemainHpManager.showChange(),
        void EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: this.overData
        }));
        if (EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_RESULT, this.overData)), this.isEscape) return RemainHpManager.showChange(),
        void EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: this.overData
        }));
        1 == this.overData.reason ? this.isPlayerLost = !0 : 2 == this.overData.reason ? this.isOvertime = !0 : 3 == this.overData.reason ? this.isDraw = !0 : 4 == this.overData.reason ? this.isSysError = !0 : 5 == this.overData.reason ? this.isNpcEscape = !0 : 8 == this.overData.reason && (this.isHaveSurrender = !0),
        (!PetFightController.isPlaySkillMovie && !this.isCatch && !PetFightController.isUsingItem || this.isHaveSurrender) && (RemainHpManager.showChange(), EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: this.overData
        })));
        var i = new Date;
        console.log("////////////////////////////////////////////////////////\r//\r//			" + i.getDate() + "-" + i.getHours() + ":" + i.getMinutes() + "  fight over data\r//\r////////////////////////////////////////////////////////")
    },
    t.onEscapeFight = function(t) {
        this.isEscape = !0
    },
    t.clear = function(e, i) {
        if (void 0 === i && (i = !1), this.handlePetRoayleBmp(e), !OnlineManager.getInstance().isLogin1004) {
            var n = new egret.RenderTexture;
            n.drawToTexture(LevelManager.fightLevel),
            this.fightBg.texture = n,
            LevelManager.appLevel.addChild(t.fightBg)
        }
        if (e && (FightManager.isCanSave = e.isCanSave), FightManager.isReplay) return this.showNormalTip("录相结束"),
        void EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.REPLAY_END));
        OnlineManager.getInstance().isLogin1004 ? this.isHaveSurrender = !0 : LevelManager.root.touchChildren = !0;
        var o;
        return e && 7 == e.reason ? (o = "切磋结束！", this.showNormalTip(o), void SoundController.playEndMusic(!0)) : this.isHaveSurrender ? (o = FightManager.isWin ? "对方认输！你获得胜利！": 0 == e.winnerID ? "双方同时认输！对战结果为平局！": "你认输了！对方获得胜利！", OnlineManager.getInstance().isLogin1004 || (LevelManager.root.touchChildren = !0), this.showNormalTip(o), void SoundController.playEndMusic(FightManager.isWin)) : this.isEscape ? (o = "恭喜你，成功撤退！", LevelManager.root.touchChildren = !0, this.showNormalTip(o), void SoundController.playEndMusic(!1)) : this.isOvertime ? (e.winnerID == MainManager.actorID ? (FightManager.isWin = !0, SoundController.playEndMusic(!0), o = "对方操作超时，你在这场战斗中获得了胜利！") : (FightManager.isWin = !1, SoundController.playEndMusic(!1), o = "你操作超时了，战斗结束！"), void this.showNormalTip(o)) : this.isDraw ? (FightManager.isWin = !1, o = "这场战斗双方打成平手！^_^", void this.showNormalTip(o)) : this.isSysError ? (FightManager.isWin = !1, o = "很抱歉，系统出错，本次战斗结束！", void this.showNormalTip(o)) : this.isPlayerLost ? (FightManager.isWin = !0, SoundController.playEndMusic(!0), o = "对方中途退出，你在这场战斗中获得了胜利！", void this.showNormalTip(o)) : this.isNpcEscape ? (FightManager.isWin = !1, SoundController.playEndMusic(!0), o = "很可惜，这只精灵逃跑了！", void this.showNormalTip(o)) : i ? void(FightManager.isWin = !0) : (e.winnerID == MainManager.actorID ? (FightManager.isWin = !0, SoundController.playEndMusic(!0), CountExpPanelManager.PANEL_STATUS = CountExpPanelManager.WIN, CountExpPanelManager.overData = this.overData, EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_PROP))) : (FightManager.isWin = !1, CountExpPanelManager.PANEL_STATUS = CountExpPanelManager.LOST, SoundController.playEndMusic(!1), CountExpPanelManager.overData = this.overData, EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_PROP))), void t.destroy())
    },
    t.handlePetRoayleBmp = function(t) {},
    t.fightTestResult = function(t) {
        this._testResultMc = new egret.Sprite;
        var e = new egret.TextField;
        e.name = "txt",
        e.appendText("本次测试最高伤害:" + t.maxH + "\n\n"),
        e.appendText("本次测试总伤害  :" + t.totalH);
        var i = new eui.Button;
        i.name = "sureBtn",
        i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureHandler, this),
        i.x = (this._testResultMc.width - i.width) / 2,
        i.y = (this._testResultMc.height - i.height) / 2,
        this._testResultMc.addChild(e),
        this._testResultMc.addChild(i),
        this._testResultMc.x = (LevelManager.stage.width - this._testResultMc.width) / 2,
        this._testResultMc.y = (LevelManager.stage.height - this._testResultMc.height) / 2,
        LevelManager.stage.addChild(this._testResultMc)
    },
    t.onSureHandler = function(t) {
        this._testResultMc.sureBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureHandler, this),
        DisplayUtil.removeForParent(this._testResultMc),
        this._testResultMc = null,
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_PROP)),
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.ALARM_CLICK, this.overData)),
        EventManager.dispatchEvent(new DynamicEvent(egret.Event.COMPLETE, 12))
    },
    t.showNormalTip = function(e) {
        var i = this;
        return CountExpPanelManager.isEmptyShow = !0,
        PetFightModel.type == PetFightModel.PET_TOPLEVEL || PetFightModel.type == PetFightModel.TOP_WAR_BEYOND ? (t.isLost = !0, LoadingViewController.destroy(), void t.destroy()) : PetFightModel.type == PetFightModel.LUCKY_BATTLE ? (t.isLost = !0, LoadingViewController.destroy(), void t.destroy()) : (OnlineManager.getInstance().isLogin1004 ? (CountExpPanelManager.overData = this.overData, EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_PROP, null))) : Alarm.show(e,
        function() {
            CountExpPanelManager.overData = i.overData,
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_PROP, null))
        },
        egret.lifecycle.stage, ""), void t.destroy())
    },
    t.destroy = function() {
        this.inited && (this.inited = !1, SocketConnection.removeCmdListener(CommandID.FIGHT_OVER, this.onFightOver, this), SocketConnection.removeCmdListener(CommandID.ESCAPE_FIGHT, this.onEscapeFight, this), EventManager.removeEventListener(PetFightEvent.FIGHT_CLOSE, this.onCloseFight, this), PeakJihadController.isInPvP = !1, FightManager.isReplay = !1, EnemyPetEffectView.removeAll(), this.isLost = !1, RemainHpManager.clear(), PetFightModel.enemyName = "", PetFightModel.defaultNpcID = 0, PetFightController.destroy(), LoadingViewController.destroy(), FightUserInfo.clear(), StartFightInfo.clear(), PetAssetsManager.getInstance().clearAll(), SkillAssetsManager.getInstance().clearAll(), RefractiveMagicWeatherController.destroy(), SoundController.destroy(), FightManager.fightStep = 0, TimeScaleManager.resetAnimateSpeed(), CjsUtil.removeAllAni(), CjsUtil.stop())
    },
    t.quitReplay = function() {
        TimeScaleManager.framePlay(),
        this.destroy()
    },
    t.isEscape = !1,
    t.isOvertime = !1,
    t.isDraw = !1,
    t.isSysError = !1,
    t.isNpcEscape = !1,
    t.isCatch = !1,
    t.isPlayerLost = !1,
    t.isFightOver = !1,
    t.isLost = !1,
    t.isHaveSurrender = !1,
    t.fightBg = new egret.Bitmap,
    t
} ();
__reflect(FightOverController.prototype, "FightOverController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetFightController = function() {
    function t() {}
    return t.init = function() {
        this.resetProperty(),
        this.initEvent(),
        this.createMainUI(),
        TimeScaleManager.setBattleAnimateSpeedBySetting()
    },
    t.initEvent = function() {
        SocketConnection.addCmdListener(CommandID.ANGELEVIL_FIGHT_SKILL_EFFECT, this.onTriggerEffect, this),
        SocketConnection.addCmdListener(CommandID.NOTE_USE_SKILL, this.onUseSkill, this),
        SocketConnection.addCmdListener(CommandID.CHANGE_PET, this.onChangePet, this),
        SocketConnection.addCmdListener(CommandID.USE_PET_ITEM, this.onUsePetItem, this),
        SocketConnection.addCmdListener(CommandID.CATCH_MONSTER, this.onCatchMonster, this),
        SocketConnection.addCmdListener(CommandID.GET_PET_INFO, this.onGetPetInfo, this),
        SocketConnection.addCmdListener(CommandID.GET_RECONECT_PET_INFO, this.onReconnectUpdateIno, this),
        EventManager.addEventListener(PetFightEvent.START_FIGHT, this.onStartFight, this),
        EventManager.addEventListener(PetFightEvent.PET_HAS_EXIST, this.hasExistHandler, this),
        EventManager.addEventListener(PetFightEvent.ON_USE_PET_ITEM, this.onUsePetItemOver, this),
        EventManager.addEventListener(PetFightEvent.INITIATIVE_OVER_FIGHT, this.onInitiativeOverFight, this),
        EventManager.addEventListener(PetFightEvent.CHANGEFACE_OVER, this.onchangeFaceOver, this),
        EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.onReconnected, this),
        LevelManager.stage.addEventListener(egret.Event.RESIZE, this.resizeHandle, this)
    },
    t.resetProperty = function() {
        this._mainPanel = null,
        this.petContainer = null,
        this.fieldEffect = null,
        this.queue = [],
        this.attackInfoList = [],
        this.isPlaySkillMovie = !1,
        this.isUsingItem = !1,
        this.isReciveUseSkillCmd = !1,
        this.replayTxtMC = null,
        this.zhuqueStatus = !1,
        this.changePetData = null,
        this._fightByServer = !1,
        this.isChaningFace = !1,
        this._isReciveFightOver = !1,
        this.lastItemHpValue = 0
    },
    t.resizeHandle = function(t) {
        this.updatePetContainerPos()
    },
    t.updatePetContainerPos = function() {
        this.petContainer && (this.petContainer.x = Math.max(0, (MainManager.getStageWidth() - 960) / 2), this.petContainer.y = Math.max(0, (MainManager.getStageHeight() - 560) / 2))
    },
    t.onReconnectUpdateIno = function(t) {
        var e = t.data,
        i = new FightStartInfo(e);
        FightUserInfo.reconenctinfo = i
    },
    t.onReconnected = function(t) {
        KTool.getOnlineUsersForeverOrDailyVal([FightManager.enemyId, 3307],
        function(t) {
            if (!t) {
                var e = new FightOverInfo(null);
                e.isCanSave = !1,
                e.maxH = 0,
                e.totalH = 0,
                e._reason = 1,
                e._roundNum = 0,
                e._type = 0,
                e._winnerID = MainManager.actorID,
                FightOverController.onFightOver(null, e)
            }
        })
    },
    t.createMainUI = function() {
        this._mainPanel = new MainFightUi,
        this.petContainer = this._mainPanel.petContainer,
        this.mvContainer = this._mainPanel.mvContainer,
        this.fieldEffect = this._mainPanel.fieldEffect,
        this.updatePetContainerPos(),
        CjsUtil.setContainer(this.petContainer),
        CjsUtil.removeAllAni(),
        CjsUtil.start(),
        this.petContainer.touchChildren = this.petContainer.touchEnabled = !1,
        this.mvContainer.touchChildren = this.mvContainer.touchEnabled = !1,
        TimerManager.setup(this._mainPanel.timeMC),
        PetFightMsgManager.setup(this._mainPanel.battleMsg, this._mainPanel.btnReport),
        PetFightModel.type == PetFightModel.PET_TRY_FIGHT && (this._mainPanel.controlMC.catch_btn.touchEnabled = !1, this._mainPanel.controlMC.item_btn.touchEnabled = !1, this._mainPanel.controlMC.pet_btn.touchEnabled = !1),
        FightManager.isReplay
    },
    t.updateLiveNum = function() {
        this.mainPanel.roundInfo.updateLiveNum()
    },
    t.onStartFight = function(t) {
        FightManager.fightStep = 2,
        LevelManager.fightLevel.percentHeight = 100,
        LevelManager.fightLevel.touchEnabled = !1,
        LevelManager.fightLevel.percentWidth = 100,
        this._mainPanel.percentHeight = 100,
        this._mainPanel.percentWidth = 100,
        LevelManager.fightLevel.removeChildren(),
        LevelManager.fightLevel.addChild(this._mainPanel);
        var e = new FightStartInfo(t.dataObj);
        StartFightInfo.startInfo = e,
        PetFightMsgManager.showFirstRoundMsg(),
        this.startFight(e),
        StartFightInfo.changePetCthTime > 0 && (FighterModelFactory.playerMode.setAutoChangePet(StartFightInfo.changePetCthTime), StartFightInfo.changePetCthTime = 0),
        (PetFightModel.type == PetFightModel.HIGHER_FIGHT || PetFightModel.type == PetFightModel.GOLDEN_PALACE_FIGHT) && EnemyPetEffectView.higherFight(),
        FightManager.fightNeedRequestByClient && (EventManager.dispatchEvent(new egret.Event("enablePanel")), SocketConnection.sendByQueue(42385, [2, 1],
        function(t) {
            FightManager.fightNeedRequestByClient = !1
        }))
    },
    t.onTriggerEffect = function(t) {},
    t.startFight = function(t) {
        for (var e = t.infoArray,
        i = 0,
        n = e; i < n.length; i++) {
            var o = n[i],
            r = FighterModelFactory.createMode(o);
            r.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this)
        }
        FighterModelFactory.playerMode.createView(this._mainPanel),
        FighterModelFactory.enemyMode.createView(this._mainPanel),
        FighterModelFactory.playerMode.enemyMode = FighterModelFactory.enemyMode,
        FighterModelFactory.enemyMode.enemyMode = FighterModelFactory.playerMode,
        1178 == FighterModelFactory.playerMode.info.petID || 1179 == FighterModelFactory.playerMode.info.petID ? FighterModelFactory.enemyMode.setHpView(!0) : FighterModelFactory.enemyMode.setHpView(!1),
        RelationshipView.show(FighterModelFactory.playerMode.info.petID, FighterModelFactory.enemyMode.info.petID, this._mainPanel.roundInfo.restraint),
        FighterModelFactory.playerMode.checkIsCatch(),
        this.addFightUI(),
        FighterModelFactory.playerMode.changeFirstPetHp(t.myInfo.catchTime, t.myInfo.hp, t.myInfo.maxHP),
        FighterModelFactory.playerMode.changeHps(t.myInfo.changehps),
        FighterModelFactory.enemyMode.changeHps(t.otherInfo.changehps),
        this.mainPanel.roundInfo.update(this.roundTimes),
        this.fieldEffect.setField(1, t.myInfo.myFieldId, t.myInfo.myFieldRounds),
        this.fieldEffect.setField(2, t.myInfo.neturalFieldId, t.myInfo.neturalFieldRounds),
        this.fieldEffect.setField(3, t.otherInfo.myFieldId, t.otherInfo.myFieldRounds),
        this.fieldEffect.visible = !!t.myInfo.myFieldId || !!t.myInfo.neturalFieldId || !!t.otherInfo.myFieldId
    },
    t.addFightUI = function() {
        this.petContainer.addChild(FighterModelFactory.enemyMode.petWin),
        this.petContainer.addChild(FighterModelFactory.playerMode.petWin)
    },
    t.destroy = function() {
        if (EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.onReconnected, this), SocketConnection.removeCmdListener(CommandID.ANGELEVIL_FIGHT_SKILL_EFFECT, this.onTriggerEffect, this), SocketConnection.removeCmdListener(CommandID.NOTE_USE_SKILL, this.onUseSkill, this), SocketConnection.removeCmdListener(CommandID.CHANGE_PET, this.onChangePet, this), SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM, this.onUsePetItem, this), SocketConnection.removeCmdListener(CommandID.CATCH_MONSTER, this.onCatchMonster, this), SocketConnection.removeCmdListener(CommandID.GET_PET_INFO, this.onGetPetInfo, this), SocketConnection.removeCmdListener(CommandID.GET_RECONECT_PET_INFO, this.onReconnectUpdateIno, this), EventManager.removeEventListener(PetFightEvent.START_FIGHT, this.onStartFight, this), EventManager.removeEventListener(PetFightEvent.PET_HAS_EXIST, this.hasExistHandler, this), EventManager.removeEventListener(PetFightEvent.ON_USE_PET_ITEM, this.onUsePetItemOver, this), LevelManager.stage.removeEventListener(egret.Event.RESIZE, this.resizeHandle, this), this.changePetData = null, EnemyPetEffectView.destroyHigherFight(), null != FighterModelFactory.hashMap) {
            for (var t in FighterModelFactory.hashMap) {
                var e = FighterModelFactory.hashMap[t];
                null != e && (e.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this), e.destroy())
            }
            FighterModelFactory.clear()
        }
        RelationshipView.destroy(),
        TimerManager.stop(),
        TimerManager.destroy(),
        PetFightMsgManager.destroy(),
        this._mainPanel.roundInfo.destroy(),
        this.fieldEffect.destroy(),
        DisplayUtil.removeForParent(this._mainPanel),
        this.petContainer = null,
        this._mainPanel = null,
        CjsUtil.disposeAll(),
        RelationshipView.destroy(),
        this._roundTimes = 0,
        ModuleManager.hasmodule("fightingPetOrBossInfoPop.FightingPetOrBossInfoPop") && (ModuleManager.ignoreReshow++, ModuleManager.hideModule("fightingPetOrBossInfoPop.FightingPetOrBossInfoPop")),
        ModuleManager.hasmodule("petEffDescPanel.PetEffDescPanel") && (ModuleManager.ignoreReshow++, ModuleManager.hideModule("petEffDescPanel.PetEffDescPanel"))
    },
    t.onGetPetInfo = function(t) {
        var e = new PetInfo(t.data);
        PetManager.add(e, !0)
    },
    t.onCatchMonster = function(t) {
        if (console.warn("======onCatchMonster==============1========="), LoadingViewController.isLoadingUI) return void(this._fightByServer = !0);
        this.isUsingItem = !0;
        var e = new CatchPetInfo(t.data),
        i = FighterModelFactory.playerMode;
        i.catchPet(e)
    },
    t.onUseSkill = function(t) {
        if (console.warn("======onUseSkill==============1========="), FighterModelFactory.playerMode && BattleFPSManager.setLastInfo(FighterModelFactory.playerMode), LoadingViewController.isLoadingUI) return void(this._fightByServer = !0);
        if (this.changePetData) {
            var e = FighterModelFactory.getFighterMode(this.changePetData.userID);
            3 == this.changePetData.isChangeFace && 3788 == this.changePetData.petID && (this.isChaningFace = !0),
            e.info.userID == FighterModelFactory.playerMode.info.userID && (1178 == this.changePetData.petID || 1179 == this.changePetData.petID ? FighterModelFactory.enemyMode.setHpView(!0) : FighterModelFactory.enemyMode.setHpView(!1)),
            e.changePet(this.changePetData, 3 == this.changePetData.isChangeFace && 3788 == this.changePetData.petID),
            this.changePetData = null
        }
        this.isReciveUseSkillCmd = !0;
        var i = new UseSkillInfo(t.data),
        n = new AttackValue,
        o = new AttackValue;
        this.queue = [],
        this._roundTimes = i.firstAttackInfo.round,
        this._roundTimes > 1,
        PetFightModel.type == PetFightModel.DOOM_FIGHT || PetFightModel.type == PetFightModel.SHOW_ROUND || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_WILD || PetFightModel.type == PetFightModel.PEAK_JIHAD_LIMIT_AC,
        this.queue.push(i.firstAttackInfo),
        null != FightUserInfo.reconenctinfo && (FighterModelFactory.getFighterMode(i.firstAttackInfo.userID).sysFightPet(i.firstAttackInfo), FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).sysFightPet(i.secondAttackInfo), FightUserInfo.reconenctinfo = null),
        i.firstAttackInfo.specailArr.length >= 11 && 1 == i.firstAttackInfo.specailArr[10] && (KTool.cloneObject(n, i.firstAttackInfo), i.firstAttackInfo.zhuijiId = 0, n.lostHP = i.firstAttackInfo.specailArr[11], n.gainHP = 0, n.effectName = "", n.issecondFight = !0, n.sideEffects = i.firstAttackInfo.sideEffects.concat(), n.skillResult = [], this.queue.push(n)),
        this.queue.push(i.secondAttackInfo),
        i.secondAttackInfo.specailArr.length >= 11 && 1 == i.secondAttackInfo.specailArr[10] && (KTool.cloneObject(o, i.secondAttackInfo), o.lostHP = i.secondAttackInfo.specailArr[11], i.secondAttackInfo.zhuijiId = 0, o.gainHP = 0, o.effectName = "", o.issecondFight = !0, o.sideEffects = i.secondAttackInfo.sideEffects.concat(), o.skillResult = [], this.queue.push(o)),
        this.attackInfoList = [],
        this.attackInfoList.push(i.firstAttackInfo),
        n && this.attackInfoList.push(n),
        this.attackInfoList.push(i.secondAttackInfo),
        o && this.attackInfoList.push(o),
        FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).alivepet(0);
        var r;
        if (i.firstAttackInfo.specailArr && i.firstAttackInfo.specailArr.length) for (r = 0; r < Math.min(i.firstAttackInfo.specailArr.length, 5); r++) 0 != i.firstAttackInfo.specailArr[r] && FighterModelFactory.getFighterMode(i.firstAttackInfo.userID).alivepet(i.firstAttackInfo.specailArr[r]);
        if (i.secondAttackInfo.specailArr && i.secondAttackInfo.specailArr.length) for (r = 0; r < Math.min(i.secondAttackInfo.specailArr.length, 5); r++) 0 != i.secondAttackInfo.specailArr[r] && FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).alivepet(i.secondAttackInfo.specailArr[r]);
        0 == i.firstAttackInfo.userID && 0 != i.firstAttackInfo.petStatus && 2533 == FighterModelFactory.enemyMode.info.petID && (this.zhuqueStatus = !0),
        0 == i.secondAttackInfo.userID && 0 != i.secondAttackInfo.petStatus && 2533 == FighterModelFactory.enemyMode.info.petID && (this.zhuqueStatus = !0),
        0 == i.firstAttackInfo.skillID && 0 != i.firstAttackInfo.remainHP && FighterModelFactory.getFighterMode(i.firstAttackInfo.userID).resetMaxHp(i.firstAttackInfo.maxHpSelf),
        0 == i.secondAttackInfo.skillID && 0 != i.secondAttackInfo.remainHP && FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).resetMaxHp(i.secondAttackInfo.maxHpSelf),
        i.firstAttackInfo.changehps && FighterModelFactory.getFighterMode(i.firstAttackInfo.userID).changeHps(i.firstAttackInfo.changehps),
        i.secondAttackInfo.changehps && FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).changeHps(i.secondAttackInfo.changehps),
        i.firstAttackInfo.specailArr.length >= 15 && FighterModelFactory.getFighterMode(i.firstAttackInfo.userID).resetalivenum(i.firstAttackInfo.specailArr[14]),
        i.secondAttackInfo.specailArr.length >= 15 && FighterModelFactory.getFighterMode(i.secondAttackInfo.userID).resetalivenum(i.secondAttackInfo.specailArr[14]),
        i.firstAttackInfo.requireSwitchCthTime > 0 && MainManager.actorID != i.firstAttackInfo.userID && FighterModelFactory.playerMode.setAutoChangePet(i.firstAttackInfo.requireSwitchCthTime, !1),
        i.secondAttackInfo.requireSwitchCthTime > 0 && FighterModelFactory.playerMode.info.userID != i.secondAttackInfo.userID && FighterModelFactory.playerMode.setAutoChangePet(i.secondAttackInfo.requireSwitchCthTime, !1),
        i.firstAttackInfo.userID == MainManager.actorID ? i.firstAttackInfo.specailArr.length >= 27 && 0 != i.firstAttackInfo.specailArr[26] ? (FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!1), this._isCanChangPet = !1) : (this._isCanChangPet = !0, FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!0)) : i.secondAttackInfo.userID == MainManager.actorID && (i.secondAttackInfo.specailArr.length >= 27 && 0 != i.secondAttackInfo.specailArr[26] ? (FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!1), this._isCanChangPet = !1) : (this._isCanChangPet = !0, FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!0))),
        i.firstAttackInfo.userID == MainManager.actorID ? (this.fieldEffect.setField(1, i.firstAttackInfo.myFieldId, i.firstAttackInfo.myFieldRounds), this.fieldEffect.setField(2, i.firstAttackInfo.neturalFieldId, i.firstAttackInfo.neturalFieldRounds), this.fieldEffect.setField(3, i.secondAttackInfo.myFieldId, i.secondAttackInfo.myFieldRounds), this.fieldEffect.visible = !!i.secondAttackInfo.myFieldId || !!i.secondAttackInfo.neturalFieldId || !!i.firstAttackInfo.myFieldId) : i.secondAttackInfo.userID == MainManager.actorID && (this.fieldEffect.setField(1, i.secondAttackInfo.myFieldId, i.secondAttackInfo.myFieldRounds), this.fieldEffect.setField(2, i.secondAttackInfo.neturalFieldId, i.secondAttackInfo.neturalFieldRounds), this.fieldEffect.setField(3, i.firstAttackInfo.myFieldId, i.firstAttackInfo.myFieldRounds), this.fieldEffect.visible = !!i.secondAttackInfo.myFieldId || !!i.secondAttackInfo.neturalFieldId || !!i.firstAttackInfo.myFieldId),
        console.warn("======onUseSkill==============2========="),
        EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.USE_SKILL_SUC_ATTACK, i)),
        this.isUsingItem || this.isChaningFace || this.execute()
    },
    t.execute = function(t) {
        var e = this;
        if (void 0 === t && (t = !1), this.queue) if (console.warn("开始执行战斗动画"), this.queue.length > 0) {
            var i = this.queue.shift(),
            n = FighterModelFactory.getFighterMode(i.userID);
            if (n.info.imprintNum = i.imprintNum, n.info.imprintList = i.imprintList, i.issecondFight) {
                var o = PetSkinXMLInfo.getSkinPetId(n.info.skinId, n.info.petID),
                r = PetXMLInfo.getCombo(o);
                r != o && n.petWin.changeSecondFightMc(r)
            }
            if (n.useSkill(i), 0 != i.skillID || 0 == i.skillID && 0 != i.zhuijiId) this.petContainer.addChild(n.petWin),
            TimerManager.clearTxt(),
            this.isPlaySkillMovie = !0;
            else if (t) RemainHpManager.showChange(),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
                data: FightOverController.overData
            }));
            else if (PetFightMsgManager.showSkillText(i, !0), PlayerPetEffectView.showCrisisAndPriority(i), 0 != i.changeValue2) {
                var s;
                s = n.enemyMode,
                s.petWin.change(i.changeValue2,
                function() {
                    e.execute()
                })
            } else this.execute()
        } else this.isReciveUseSkillCmd ? (this.lastItemHpValue = 0, RemainHpManager.showChange(), this.useLaterItems(), PetFightMsgManager.showStartNewRound(this._roundTimes + 1), TimerManager.start(), FighterModelFactory.playerMode.nextRound(), this.mainPanel.roundInfo.update(this.roundTimes), PetFightModel.type == PetFightModel.REFRACTIVE_MAGIC && RefractiveMagicWeatherController.nextRound(), this.isReciveUseSkillCmd = !1, t && (RemainHpManager.showChange(), EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: FightOverController.overData
        })))) : FightManager.isReplay ? EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.REPLAY_NEXT)) : t && (RemainHpManager.showChange(), EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: FightOverController.overData
        })))
    },
    t.onChangePet = function(t) {
        if (LoadingViewController.isLoadingUI) return void(this._fightByServer = !0);
        var e = new ChangePetInfo(t.data);
        if (0 == e.userID) NpcChangePetData.add(e),
        FightManager.isReplay && FighterModelFactory.playerMode.nextRound();
        else {
            var i;
            e.userID == FighterModelFactory.playerMode.info.userID ? (3 == e.isChangeFace && 3788 == e.petID && (this.isChaningFace = !0), 1178 == e.petID || 1179 == e.petID ? FighterModelFactory.playerMode.enemyMode.setHpView(!0) : FighterModelFactory.playerMode.enemyMode.setHpView(!1), i = FighterModelFactory.getFighterMode(e.userID), i.info.imprintNum = e.imprintNum, i.info.imprintList = e.imprintList, i.changePet(e, 3 == e.isChangeFace && 3788 == e.petID)) : (this.changePetData = e, 0 != this.lastItemHpValue && (this.changePetData.hp = this.lastItemHpValue, this.lastItemHpValue = 0), FightManager.isReplay && (i = FighterModelFactory.getFighterMode(e.userID), i.info.imprintNum = e.imprintNum, i.info.imprintList = e.imprintList, i.changePet(e), this.changePetData = null)),
            FighterModelFactory.getFighterMode(e.userID).changeHps(e.changehps),
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.CHANGE_PET_NOTE, e))
        }
    },
    t.onUsePetItem = function(t) {
        if (LoadingViewController.isLoadingUI) return void(this._fightByServer = !0);
        this.isUsingItem = !0;
        var e = new UsePetItemInfo(t.data),
        i = FighterModelFactory.getFighterMode(e.userID);
        e.round != this.roundTimes || this.isReciveUseSkillCmd ? this.pushItems(e) : (this.isUsingItem = !0, UsePetItemController.useItem(i, e))
    },
    t.useLaterItems = function() {
        if (null != this.useItemsLater) for (var t = 0; t < this.useItemsLater.length; t++) {
            this.isUsingItem = !0;
            var e = FighterModelFactory.getFighterMode(this.useItemsLater[t].userID);
            UsePetItemController.useItem(e, this.useItemsLater[t], !0),
            this.useItemsLater.splice(t, 1),
            t--
        }
    },
    t.pushItems = function(t) {
        null == this.useItemsLater && (this.useItemsLater = []),
        this.useItemsLater.push(t)
    },
    t.onUsePetItemOver = function(t) {
        console.warn("======onUsePetItemOver======================="),
        this.isUsingItem = !1,
        FightOverController.isFightOver ? this._isReciveFightOver || (this._isReciveFightOver = !0, RemainHpManager.showChange(), EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: FightOverController.overData
        }))) : this.isChaningFace || this.execute()
    },
    t.onchangeFaceOver = function(t) {
        this.isChaningFace = !1,
        this.isUsingItem || this.execute()
    },
    t.hasExistHandler = function(t) {
        var e = FighterModelFactory.getFighterMode(MainManager.actorID);
        e.catchPet()
    },
    t.onAttackOver = function(t) {
        this.isPlaySkillMovie = !1;
        var e = t.currentTarget;
        FightOverController.isFightOver ? e.info.userID == FightOverController.overData.winnerID ? (RemainHpManager.showChange(), FightUserInfo.getUserInfoByID(e.enemyMode.info.userID).aliveNum = 0, this.updateLiveNum(), EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.FIGHT_CLOSE, {
            data: FightOverController.overData
        }))) : this.execute(!0) : this.execute()
    },
    t.onInitiativeOverFight = function(t) {
        var e = t.dataObj;
        SocketConnection.send(2593, e)
    },
    Object.defineProperty(t, "mainPanel", {
        get: function() {
            return this._mainPanel
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "roundTimes", {
        get: function() {
            return this._roundTimes
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "violentValue", {
        get: function() {
            return this.VIOLENTVALUE
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "surrenderValue", {
        get: function() {
            return this.SURRENDERVALUE
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "isCanChangPet", {
        get: function() {
            return this._isCanChangPet
        },
        enumerable: !0,
        configurable: !0
    }),
    t.queue = [],
    t.isPlaySkillMovie = !1,
    t.isUsingItem = !1,
    t.isReciveUseSkillCmd = !1,
    t._roundTimes = 0,
    t.VIOLENTVALUE = 50,
    t.SURRENDERVALUE = 10,
    t.zhuqueStatus = !1,
    t.isChaningFace = !1,
    t._commonItemIdArr = [1, 1400352, 400063, 400064, 400065],
    t._isCanChangPet = !0,
    t._isReciveFightOver = !1,
    t.lastItemHpValue = 0,
    t.useItemsLater = [],
    t
} ();
__reflect(PetFightController.prototype, "PetFightController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
battle; !
function(t) {
    var e = function() {
        function t(t, e, i, n, o, r) {
            this._doubleTapStepTime = 200,
            this._enableUpdateMovePosition = !0,
            this._dis = t,
            this._caller = r,
            this._touchTapCallBack = e,
            this._touchDoubleCallBack = i,
            this._touchMoveCallBack = n,
            this._touchCancelCallBack = o,
            this._initEvents()
        }
        return t.prototype._initEvents = function() {
            this._dis.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this)
        },
        t.prototype.setDoubleTouchTapStepTm = function(t) {
            this._doubleTapStepTime = t
        },
        t.prototype.enableUpdateMovePosition = function(t) {
            this._enableUpdateMovePosition = t
        },
        t.prototype.touchBegin = function(t) {
            this._dis.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchStageOutSide, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchStageOutSide, this),
            this._lastPostion = egret.Point.create(t.stageX, t.stageY)
        },
        t.prototype.touchMoved = function(t) {
            var e = egret.Point.create(t.stageX - this._lastPostion.x, t.stageY - this._lastPostion.y);
            this._enableUpdateMovePosition && (this._lastPostion.x = t.stageX, this._lastPostion.y = t.stageY),
            this._touchMoveCallBack && this._touchMoveCallBack.apply(this._caller, [this._dis, e])
        },
        t.prototype.touchStageOutSide = function(t) {
            this._dis.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchStageOutSide, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchStageOutSide, this),
            this._touchCancelCallBack && this._touchCancelCallBack.apply(this._caller, [this._dis])
        },
        t.prototype.touchEnd = function(t) {
            if (this._dis.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this), egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this), egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchStageOutSide, this), egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchStageOutSide, this), this._lastTouchTapTm > 0) {
                var e = Date.now();
                if (e - this._lastTouchTapTm <= this._doubleTapStepTime) return void(this._touchDoubleCallBack && (this._touchDoubleCallBack.apply(this._caller, [this._dis]), this._lastTouchTapTm = 0))
            }
            this._touchTapCallBack && this._touchTapCallBack.apply(this._caller, [this._dis]),
            this._lastTouchTapTm = Date.now()
        },
        t.prototype.destroy = function() {
            this._dis.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
            this._dis.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchStageOutSide, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchStageOutSide, this),
            this._caller = null,
            this._dis = null,
            this._touchCancelCallBack = null,
            this._touchDoubleCallBack = null,
            this._touchMoveCallBack = null,
            this._touchTapCallBack = null
        },
        t
    } ();
    t.TouchEventHandler = e,
    __reflect(e.prototype, "battle.TouchEventHandler")
} (battle || (battle = {}));
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
MainFightUi = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = MainfightSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.controlMC.touchThrough = !0
    },
    e
} (eui.Component);
__reflect(MainFightUi.prototype, "MainFightUi"),
window.MainFightUi = MainFightUi;
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BattleRecordController = function() {
    function t() {}
    return t
} ();
__reflect(BattleRecordController.prototype, "BattleRecordController");
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
BattleFieldEffect = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._myFieldId = 0,
        e._neturalFieldId = 0,
        e._enemyFieldId = 0,
        e._myFieldRounds = 0,
        e._neturalFieldRounds = 0,
        e._enemyFieldRounds = 0,
        e.skinName = BattleFieldEffectSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        ImageButtonUtil.add(this.myField,
        function() {
            PopViewManager.getInstance().openView(new BattleFieldIntroPop, PopViewManager.createDefaultStyleObject(), {
                type: 1,
                id: e._myFieldId,
                rounds: e._myFieldRounds
            })
        },
        this),
        ImageButtonUtil.add(this.neutralField,
        function() {
            PopViewManager.getInstance().openView(new BattleFieldIntroPop, PopViewManager.createDefaultStyleObject(), {
                type: 1,
                id: e._neturalFieldId,
                rounds: e._neturalFieldRounds
            })
        },
        this),
        ImageButtonUtil.add(this.enemyField,
        function() {
            PopViewManager.getInstance().openView(new BattleFieldIntroPop, PopViewManager.createDefaultStyleObject(), {
                type: 1,
                id: e._enemyFieldId,
                rounds: e._enemyFieldRounds
            })
        },
        this)
    },
    e.prototype.setField = function(t, e, i) {
        switch (t) {
        case 1:
            this._myFieldId = e,
            this._myFieldRounds = i;
            break;
        case 2:
            this._neturalFieldId = e,
            this._neturalFieldRounds = i;
            break;
        case 3:
            this._enemyFieldId = e,
            this._enemyFieldRounds = i
        }
        this.updateIcon()
    },
    e.prototype.updateIcon = function() {
        this._myFieldId ? (this.myFieldIcon.source = ClientConfig.getFieldIcon(this._myFieldId), this._myFieldRounds ? this.txt_myRounds.text = this._myFieldRounds + "": this.txt_myRounds.text = "", this.myField.touchEnabled = this.myField.touchChildren = !0) : (this.myFieldIcon.source = "battle_field_effect_nullIcon_png", this.txt_myRounds.text = "", this.myField.touchEnabled = this.myField.touchChildren = !1),
        this._neturalFieldId ? (this.neturalFieldIcon.source = ClientConfig.getFieldIcon(this._neturalFieldId), this._neturalFieldRounds ? this.txt_neturalRounds.text = this._neturalFieldRounds + "": this.txt_neturalRounds.text = "", this.neutralField.touchEnabled = this.neutralField.touchChildren = !0) : (this.neturalFieldIcon.source = "battle_field_effect_nullIcon_png", this.txt_neturalRounds.text = "", this.neutralField.touchEnabled = this.neutralField.touchChildren = !1),
        this._enemyFieldId ? (this.enemyFieldIcon.source = ClientConfig.getFieldIcon(this._enemyFieldId), this._enemyFieldRounds ? this.txt_enemyRounds.text = this._enemyFieldRounds + "": this.txt_enemyRounds.text = "", this.enemyField.touchEnabled = this.enemyField.touchChildren = !0) : (this.enemyFieldIcon.source = "battle_field_effect_nullIcon_png", this.txt_enemyRounds.text = "", this.enemyField.touchEnabled = this.enemyField.touchChildren = !1)
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this)
    },
    e
} (eui.Component);
__reflect(BattleFieldEffect.prototype, "BattleFieldEffect");
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
BattleFieldIntroItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = BattleFieldIntroItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
    },
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        this.icon.source = ClientConfig.getFieldIcon(this.data.id),
        this.num.text = this.data.layers > 0 ? this.data.layers + "": "";
        var e = FieldEffectXMLInfo.getBuffXml(this.data.id);
        switch (e.Kind) {
        case 1:
            this.img_select.source = "battle_field_intro_pop_img_select_1_png";
            break;
        case 2:
            this.img_select.source = "battle_field_intro_pop_img_select_2_png";
            break;
        case 0:
        default:
            this.img_select.source = "battle_field_intro_pop_img_select_png"
        }
    },
    e.prototype.destroy = function() {
        this.removeChildren()
    },
    e
} (eui.ItemRenderer);
__reflect(BattleFieldIntroItem.prototype, "BattleFieldIntroItem");
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
BattleItemRender = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._defaultY = 185,
        e._selectedMovedPosy = 20,
        e.skinName = PetItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        this.y = this._defaultY
    },
    e.prototype.setTouchHandler = function(t) {
        this._touchHandler = t
    },
    e.prototype.showTips = function() {
        var t = this.data,
        e = ItemManager.getCollectionInfo(t);
        e && BattleItemTipController.showItemTip(e)
    },
    e.prototype.hideTips = function() {
        BattleItemTipController.hideTip()
    },
    e.prototype.dataChanged = function() {
        var t = this.data,
        e = ItemManager.getCollectionInfo(t);
        if (e && e.itemNum > 0) if (this.txtNum.text = "" + e.itemNum, this.item_icon.source = ItemXMLInfo.getIconURL(t), this.imge_currency_mask.visible = !1, ItemFilterXMLInfo.isCatch(t)) {
            var i = FighterModelFactory.enemyMode;
            e.type,
            0 == i.info.catchType ? (this.imge_currency_mask.visible = !0, this.touchEnabled = !1, this.touchChildren = !1) : 1 == i.info.catchType && t >= 300141 && 300150 >= t ? (this.imge_currency_mask.visible = !0, this.touchEnabled = !1, this.touchChildren = !1) : 2 == i.info.catchType && (300141 > t || t > 300150) && (this.imge_currency_mask.visible = !0, this.touchEnabled = !1, this.touchChildren = !1)
        } else this.touchEnabled = !0,
        this.touchChildren = !1;
        else this.item_icon && (this.item_icon.source = null, this.txtNum.text = "")
    },
    Object.defineProperty(e.prototype, "selected", {
        get: function() {
            return egret.superGetter(e, this, "selected")
        },
        set: function(t) {
            egret.superSetter(e, this, "selected", t),
            this.imgSelected.visible = t,
            this.selectedAnimation(t)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.selectedAnimation = function(t) {
        t ? egret.Tween.get(this).to({
            y: this._defaultY - this._selectedMovedPosy
        },
        100) : egret.Tween.get(this).to({
            y: this._defaultY
        },
        100)
    },
    e.prototype.moved = function(t) {
        var e = 0 === GameInfo.platform ? 2 : .3;
        this.y += t.y * e,
        this.y = Math.max(70, Math.min(this._defaultY, this.y))
    },
    e.prototype.resetMovedToSelectedState = function() {
        egret.Tween.get(this).to({
            y: this._defaultY - this._selectedMovedPosy
        },
        100)
    },
    e.prototype.resetUi = function() {
        this.imgSelected.visible = !1,
        this.y = this._defaultY
    },
    e.prototype.destroy = function() {
        this._touchHandler && this._touchHandler.destroy()
    },
    e
} (eui.ItemRenderer);
__reflect(BattleItemRender.prototype, "BattleItemRender");
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
BattleItemTip = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.baseHeight = 160,
        e.skinName = BattleItemTipSkin,
        e
    }
    return __extends(e, t),
    e.prototype.showTip = function(t) {
        this.txtMsg.text = ItemTipXMLInfo.getItemDes(t.itemID),
        this.icon.source = ClientConfig.getItemIcon(t.itemID),
        this.txtName.text = ItemXMLInfo.getItemInfo(t.itemID).itemObj.Name,
        this.validateNow();
        var e = this.txtMsg.height - 97;
        e > 0 ? this.bg.height = this.baseHeight + e: this.bg.height = this.baseHeight
    },
    e
} (eui.Component);
__reflect(BattleItemTip.prototype, "BattleItemTip");
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
BattleMsg = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.isHidden = !0,
        e.allMsg = "",
        e.skinName = BattleMsgSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.grpMsg.visible = !1,
        this.isHidden = !0;
        var e = +egret.localStorage.getItem("fight_report_position"),
        i = +egret.localStorage.getItem("fight_report_content");
        2 == e ? 2 == i ? (this.grpMsg.width = 627, this.grpMsg.y = 228, this.grpMsg.anchorOffsetY = this.grpMsg.height = 280) : this.grpMsg.y = this.grpMsg.anchorOffsetY = this.grpMsg.height: (this.ani = DragonbonesUtil.createAnimate("duizhanjindutiao_ske_json", "duizhanjindutiao_tex_json", "duizhanjindutiao_tex_png", "duizhanjindutiao"), this.grpMsg.addChild(this.ani), this.ani.animation.timeScale = 1 / TimeScaleManager.GameSpeed, EventManager.addEventListener("resetCountdownLine", this.resetCountdownLine, this), EventManager.addEventListener("stopCountdownLine", this.stopCountdownLine, this), 2 == i ? (this.grpMsg.width = 627, this.grpMsg.height = 360, this.targetX = 624, this.ani.y = 354) : (this.targetX = 415, this.ani.y = 226)),
        EventManager.addEventListener("show_battle_msg", this.onClickBtn, this)
    },
    e.prototype.resetCountdownLine = function() {
        var t = this;
        this.ani.visible = !0,
        this.imgCountdownLine.visible = !0,
        this.ani.x = 0;
        var e = .7 * this.targetX;
        this.ani.animation.play("pupongshanguan", 0),
        this.imgCountdownLine.source = "fight_msg_countdown_imgblueline_png",
        egret.Tween.removeTweens(this.ani),
        egret.Tween.get(this.ani, {
            onChange: function() {
                t.imgCountdownLine.left = t.ani.x - 5
            }
        }).to({
            x: e
        },
        7e3).call(function() {
            t.ani.animation.play("kuaisushanguan", 0),
            t.imgCountdownLine.source = "fight_msg_countdown_imgredline_png",
            egret.Tween.get(t.ani, {
                onChange: function() {
                    t.imgCountdownLine.left = t.ani.x - 5
                }
            }).to({
                x: t.targetX
            },
            3e3).call(function() {
                t.ani.visible = !1,
                t.imgCountdownLine.visible = !1
            })
        })
    },
    e.prototype.stopCountdownLine = function() {
        this.ani.visible = !1,
        this.imgCountdownLine.visible = !1,
        egret.Tween.removeTweens(this.ani)
    },
    e.prototype.addText = function(t) {
        if ("" != t) {
            var e = new eui.Label;
            if (e.size = 16, e.fontFamily = "MFShangHei", e.textFlow = (new egret.HtmlTextParser).parser(t), this.grp_list.addChild(e), e.width = e.parent.width, e.lineSpacing = 5, this.validateNow(), this._scroller.viewport.contentHeight > this._scroller.viewport.height) {
                var i = this._scroller.viewport.contentHeight - this._scroller.viewport.height;
                egret.Tween.removeTweens(this._scroller.viewport),
                egret.Tween.get(this._scroller.viewport).to({
                    scrollV: i
                },
                200)
            }
        }
    },
    e.prototype.addRound = function(t) {
        if ("" != t) {
            var e = new eui.Component;
            if (e.skinName = "BattleMsgItemSkin", e.txt_round.text = t, this.grp_list.addChild(e), this.validateNow(), this._scroller.viewport.contentHeight > this._scroller.viewport.height) {
                var i = this._scroller.viewport.contentHeight - this._scroller.viewport.height;
                egret.Tween.removeTweens(this._scroller.viewport),
                egret.Tween.get(this._scroller.viewport).to({
                    scrollV: i
                },
                200)
            }
        }
    },
    e.prototype.onClickBtn = function(t) {
        t.data.isShow ? this.showMsg() : this.hideMsg(),
        this.isHidden = !this.isHidden
    },
    e.prototype.hideMsg = function() {
        var t = this;
        egret.Tween.removeTweens(this.grpMsg),
        egret.Tween.get(this.grpMsg).to({
            alpha: .2
        },
        200).call(function() {
            t.grpMsg.visible = !1
        })
    },
    e.prototype.showMsg = function() {
        this.grpMsg.visible = !0,
        this.grpMsg.scaleY = 0,
        this.grpMsg.alpha = .3,
        egret.Tween.get(this.grpMsg).to({
            scaleY: 1,
            alpha: 1
        },
        200)
    },
    e.prototype.destroy = function() {
        EventManager.removeEventListener("show_battle_msg", this.onClickBtn, this),
        EventManager.removeEventListener("resetCountdownLine", this.resetCountdownLine, this),
        EventManager.removeEventListener("stopCountdownLine", this.stopCountdownLine, this),
        this.grp_list.removeChildren(),
        this.ani && (egret.Tween.removeTweens(this.ani), this.ani.dispose())
    },
    e
} (eui.Component);
__reflect(BattleMsg.prototype, "BattleMsg");
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
BattleSignBuffInfoItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = BattleSignBuffInfoItemSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
        this._iconSprite = new eui.Group,
        this._iconSprite.x = 6,
        this._iconSprite.y = 8,
        this.gr_buff_Icon.addChild(this._iconSprite),
        this._icon = new eui.Image,
        this._iconSprite.addChild(this._icon);
        var e = new eui.Label;
        e.size = 12,
        e.stroke = 1,
        e.strokeColor = 0,
        e.textColor = 16774656,
        e.bottom = 0,
        e.horizontalCenter = 0,
        this._iconSprite.numTxt = e,
        this._iconSprite.addChild(this._iconSprite.numTxt)
    },
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this);
        var e = SignIconXmlInfo.getspIconByidAndLvNum(this.data.id, this.data.lvNum);
        "" != e ? this._icon.source = ClientConfig.getBuffIcon(this.data.id, Number(e)) : this._icon.source = ClientConfig.getBuffIcon(this.data.id),
        this._icon.scaleX = this._icon.scaleY = 1;
        var i = SignIconXmlInfo.getInfoById(this.data.id);
        this._iconSprite.numTxt.text = i.isShowNum ? this.data.lvNum + "": ""
    },
    e.prototype.destroy = function() {
        this.removeChildren()
    },
    e
} (eui.ItemRenderer);
__reflect(BattleSignBuffInfoItem.prototype, "BattleSignBuffInfoItem");
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
BattleSkillTip = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.baseHeight = 160,
        e.skinName = "BattleSkillTipSkin",
        e.touchEnabled = !1,
        e.touchChildren = !1,
        e
    }
    return __extends(e, t),
    e.prototype.showTip = function(t) {
        this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(t),
        this.validateNow(),
        this.txtMsg.height > this.baseHeight ? this.bg.height = this.txtMsg.height + 20 : this.bg.height = this.baseHeight
    },
    e
} (eui.Component);
__reflect(BattleSkillTip.prototype, "BattleSkillTip");
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
CountDown = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e
} (eui.Component);
__reflect(CountDown.prototype, "CountDown");
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
EffectmcPanelui = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = EffectMcSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e
} (eui.Component);
__reflect(EffectmcPanelui.prototype, "EffectmcPanelui"),
window.EffectmcPanelui = EffectmcPanelui;
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
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
FightLoadingPetItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = FightLoadingPetItemSkin,
        e.cacheAsBitmap = !0,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        this._idx = this.data.idx,
        this._info = this.data.petInfo,
        this.head.source = ClientConfig.getPetHeadPath(this._info.id),
        this.txtName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this._info.id), 6),
        this.txtLv.text = "Lv." + this._info.level,
        this.shoufa.visible = 0 == this._idx,
        this.chuzhan.visible = 0 != this._idx,
        this.checkSy()
    },
    e.prototype.checkSy = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            var t;
            return __generator(this,
            function(e) {
                switch (e.label) {
                case 0:
                    return [4, KTool.checkHasAdvanced(this._info)];
                case 1:
                    return t = e.sent(),
                    this.bg.source = t ? "common_pet_head_bg_size_110_134_sy_png": "common_pet_head_bg_size_110_134_png",
                    [2]
                }
            })
        })
    },
    e.prototype.destroy = function() {
        this.removeChildren()
    },
    e
} (eui.ItemRenderer);
__reflect(FightLoadingPetItem.prototype, "FightLoadingPetItem");
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
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
FightLoadingView = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._p = 0,
        i.once(egret.Event.REMOVED_FROM_STAGE,
        function() {
            ReadyToFightController.removeDrawBg()
        },
        i),
        i.skinName = FightloadingSkin,
        i.info = e,
        i
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        this.width = egret.lifecycle.stage.stageWidth,
        this.height = egret.lifecycle.stage.stageHeight,
        this.bg1.percentWidth = this.bg1.width / this.rightGrp.width * 100,
        this.bg2.percentWidth = this.bg2.width / this.leftGrp.width * 100,
        this.grpLeftContent.left = this.grpLeftContent.left + DeviceInfoManager.adapterOffSetX,
        this.grpRightContent.right = this.grpRightContent.right + DeviceInfoManager.adapterOffSetX,
        this.grpLeftContent.width = this.width / 2 - DeviceInfoManager.adapterOffSetX,
        this.grpRightContent.width = this.width / 2 - DeviceInfoManager.adapterOffSetX,
        this.proBg1.width = this.proBg2.width,
        this._aniDicengguang = DragonbonesUtil.createAnimate("jinruduizhan_3_ske_json", "jinruduizhan_3_tex_json", "jinruduizhan_3_tex_png", "jinruduizhan_3"),
        this._aniVs = DragonbonesUtil.createAnimate("jinruduizhan_3_ske_json", "jinruduizhan_3_tex_json", "jinruduizhan_3_tex_png", "jinruduizhan_3"),
        this._aniXunhuanfangkuai = DragonbonesUtil.createAnimate("jinruduizhan_3_ske_json", "jinruduizhan_3_tex_json", "jinruduizhan_3_tex_png", "jinruduizhan_3"),
        this._aniXunhuanlizi = DragonbonesUtil.createAnimate("jinruduizhan_3_ske_json", "jinruduizhan_3_tex_json", "jinruduizhan_3_tex_png", "jinruduizhan_3"),
        this._aniDicengguang.visible = this._aniXunhuanfangkuai.visible = this._aniVs.visible = this._aniXunhuanlizi.visible = !1,
        this.aniGrp.addChild(this._aniDicengguang),
        this.aniGrp.addChild(this._aniXunhuanfangkuai),
        this.aniGrp.addChild(this._aniVs),
        this.aniGrp.addChild(this._aniXunhuanlizi),
        egret.setTimeout(function() {
            e._aniVs.visible = !0,
            e._aniDicengguang.visible = !0,
            e._aniDicengguang.animation.play("dicengguang", 1),
            DragonbonesUtil.play(e._aniVs, "VS", 1).then(function() {
                e._aniXunhuanfangkuai.visible = e._aniXunhuanlizi.visible = !0,
                e._aniXunhuanfangkuai.animation.play("xunhuanfangkuai", 0),
                e._aniXunhuanlizi.animation.play("xunhuanlizi", 0)
            })
        },
        this, 200);
        var i;
        i = FightManager.isReplay ? new UserInfo: MainManager.actorInfo;
        var n = new ClothPreview;
        n.scaleX = n.scaleY = .8,
        n.show(i.clothes),
        this.nick1.text = i.nick,
        this.setMyPro(0),
        n.x = 50,
        n.y = 115,
        this.icon1.addChild(n),
        this.icon1.mask = this.head1Mask,
        this.icon2.mask = this.head2Mask;
        var o = PetFightModel.enemyName;
        if (this.head1.visible = this.head2.visible = !1, this.title1.text = AchieveXMLInfo.getTitle(this.info.myInfo.title), this.npcName.visible = !1, this.nick2.visible = !1, this.title2.visible = !1, 0 != this.info.otherInfo.id && "" != this.info.otherInfo.nickName || FightUserInfo.readyData.model == PetFightModel.PEAK_JIHAD_FIGHT_WITH_FIGURE) o = this.info.otherInfo.nickName,
        PetFightModel.enemyName = o,
        this.title2.text = AchieveXMLInfo.getTitle(this.info.otherInfo.title),
        UserInfoManager.getInfo(FightUserInfo.readyData.model == PetFightModel.PEAK_JIHAD_FIGHT_WITH_FIGURE ? PetFightModel.enemyId: this.info.otherInfo.id,
        function(t) {
            if (null != t && 0 != t.userID) {
                var i = new ClothPreview;
                i.scaleX = i.scaleY = .8,
                i.show(t.clothes),
                i.x = 50,
                i.y = 115,
                e.icon2.addChild(i),
                e.nick2.visible = !0,
                e.title2.visible = !0
            }
        });
        else if (0 == this.info.otherInfo.id) {
            var r;
            null != this.info.otherInfo.petInfoArr && this.info.otherInfo.petInfoArr.length > 0 && (r = this.info.otherInfo.petInfoArr[0].id),
            r > 0 && (this.head2.visible = !0, this.npcName.visible = !0, this.head2.source = ClientConfig.getPetHeadPath(r), this.npcName.text = PetXMLInfo.getName(r)),
            this.list_0.itemRenderer = FightLoadingPetItem;
            for (var s = [], a = 0; a < this.info.myInfo.petInfoArr.length; a++) s.push({
                idx: a,
                petInfo: this.info.myInfo.petInfoArr[a]
            });
            this.list_0.dataProvider = new eui.ArrayCollection(s);
            var h = this.info.otherInfo.petInfoArr.length;
            this.list_1.width = 82 * h + 10 * (h - 1),
            this.list_1.itemRenderer = FightLoadingPetItem;
            for (var l = [], a = 0; a < this.info.otherInfo.petInfoArr.length; a++) l.push({
                idx: a,
                petInfo: this.info.otherInfo.petInfoArr[a]
            });
            this.list_1.dataProvider = new eui.ArrayCollection(l)
        }
        this.nick2.text = o,
        FightManager.isReplay && (this.nick1.text = "", this.nick2.text = ""),
        this.isFinishLoad = !1,
        this._showEffect().then(function() {
            e._EffectComplete = !0,
            LoadingViewController.startForLoading(),
            PetFightModel.status != PetFightModel.FIGHT_WITH_PLAYER ? (e.OtherP = 0, egret.Tween.get(e).to({
                OtherP: 100
            },
            500, egret.Ease.circIn)) : e.getOtherIsSystem() ? (e.OtherP = 0, egret.Tween.get(e).to({
                OtherP: 100
            },
            800, egret.Ease.circIn)) : e.setOtherPro(0)
        }),
        this.addEventListener("load_all", this.onLoadingAll, this)
    },
    e.prototype.onLoadingAll = function(t) {
        this.isFinishLoad = !0,
        this.removeEventListener("load_all", this.onLoadingAll, this),
        this.setMyPro(100)
    },
    e.prototype.setMyPro = function(t) {
        t = Math.min(100, t),
        FightManager.isReplay || SocketConnection.send(CommandID.LOAD_PERCENT, t),
        this.protxt1.text = t + "%",
        this.pro1.width = this.proBg1.width * t / 100,
        t >= 100 && (this.isFinishLoad = !0)
    },
    e.prototype.setOtherPro = function(t) {
        t = Math.min(100, t),
        this.protxt2.text = t + "%",
        this.pro2.width = this.proBg2.width * t / 100
    },
    Object.defineProperty(e.prototype, "OtherP", {
        get: function() {
            return this._p
        },
        set: function(t) {
            this._p = t,
            this.setOtherPro(Math.floor(t))
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype._showEffect = function() {
        return __awaiter(this, void 0, void 0,
        function() {
            var t, e;
            return __generator(this,
            function(i) {
                switch (i.label) {
                case 0:
                    return t = egret.lifecycle.stage.stageWidth - 1136,
                    t > 0 && (this.leftGrp.width = 838.2 + .5 * t, this.rightGrp.width = 838.2 + .5 * t),
                    this.leftGrp.left = -this.leftGrp.width,
                    this.rightGrp.right = -this.rightGrp.width,
                    this.vs.visible = !1,
                    e = common.TweenUtil.createAllTween(egret.Tween.get(this.leftGrp).to({
                        left: 0
                    },
                    600, egret.Ease.getBackOut(.5)), egret.Tween.get(this.rightGrp).to({
                        right: 0
                    },
                    600, egret.Ease.getBackOut(.5))),
                    [4, Promise.all(e)];
                case 1:
                    return i.sent(),
                    [2, Promise.resolve()]
                }
            })
        })
    },
    e.prototype.destroy = function() {
        if (this._aniXunhuanfangkuai.dispose(), this._aniXunhuanlizi.dispose(), this._aniVs.dispose(), this.icon1.mask = null, this.icon2.mask = null, this.icon1.numChildren > 0) {
            var t = this.icon1.getChildAt(0);
            t && t.destroy()
        }
        if (this.icon2.numChildren > 0) {
            var e = this.icon2.getChildAt(0);
            e && e.destroy()
        }
        this.isFinishLoad = !1,
        this.removeEventListener("load_all", this.onLoadingAll, this)
    },
    e.prototype.getOtherIsSystem = function() {
        return 0 === this.info.otherInfo.id && "" != this.info.otherInfo.nickName
    },
    e.prototype.sprite = function() {
        return this
    },
    e.prototype.ok = function(t) {},
    e
} (eui.Component);
__reflect(FightLoadingView.prototype, "FightLoadingView", ["IFightLoading"]);
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
itemUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = ItemUISkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e
} (eui.Component);
__reflect(itemUI.prototype, "itemUI");
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
LeftPlayerInfo = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e
} (BasePlayerComponet);
__reflect(LeftPlayerInfo.prototype, "LeftPlayerInfo");
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
RoundInfo = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._isShow = !1,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        ImageButtonUtil.add(this.btnReport,
        function() {
            e._isShow ? e.reportBg.source = "battle_btnReport1_png": e.reportBg.source = "battle_btnReport2_png",
            e._isShow = !e._isShow,
            EventManager.dispatchEventWith("show_battle_msg", !1, {
                isShow: e._isShow
            })
        },
        this);
        var i = +egret.localStorage.getItem("fight_report_position");
        this.btnReport.visible = 2 != i,
        this.groupBottomRound.visible = 2 == i
    },
    e.prototype.update = function(t) {
        void 0 === t && (t = 0),
        this.updateLiveNum();
        var e = "第" + (t + 1) + "回合";
        this.txtRound.text = e,
        this.txtRound2.text = e
    },
    e.prototype.updateLiveNum = function() {
        var t = FightUserInfo.fighterInfos.myInfo.aliveNum,
        e = FightUserInfo.fighterInfos.otherInfo.aliveNum;
        0 > t && (t = 0),
        0 > e && (e = 0),
        this.txtLife_0.text = "" + t,
        this.txtLife_1.text = "" + e
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this)
    },
    e
} (eui.Component);
__reflect(RoundInfo.prototype, "RoundInfo");
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
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
SignBuffInfosView = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._isShow = !1,
        i._curSelectedIndex = 0,
        i._JumpIndex = 0,
        i._curUseId = e,
        i.skinName = BattleSignBuffInfoPopSkin,
        i
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this._curUseId == MainManager.actorID ? this.currentState = "left": this.currentState = "right",
        this.hide(),
        this._list.itemRenderer = BattleSignBuffInfoItem,
        ImageButtonUtil.add(this.btnClose, this.hide, this),
        this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectItem, this),
        this._ary = new eui.ArrayCollection,
        this._list.dataProvider = this._ary,
        this._list.selectedIndex = 0,
        this.rect_bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClickHandler, this),
        EventManager.addEventListener(PetFightEvent.SIGNBUFF_CHANGE_LVNUM, this.onBuffLvNumChange, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.hide, this),
        this._iconSprite = new eui.Group,
        this._iconSprite.x = 8,
        this._iconSprite.y = 8,
        this.gr_buff_Icon.addChild(this._iconSprite),
        this._icon = new eui.Image,
        this._iconSprite.addChild(this._icon);
        var e = new eui.Label;
        e.size = 12,
        e.stroke = 1,
        e.strokeColor = 0,
        e.textColor = 16774656,
        e.bottom = 0,
        e.horizontalCenter = 0,
        this._iconSprite.numTxt = e,
        this._iconSprite.addChild(this._iconSprite.numTxt),
        this.updateView()
    },
    e.prototype.hide = function() {
        this._JumpIndex = 0,
        this.visible = !1
    },
    e.prototype.show = function(t) {
        1e3 != t && (this._JumpIndex = t, this.updateView()),
        this.visible = !0
    },
    e.prototype.onClickHandler = function(t) {
        this.hide()
    },
    e.prototype.onBuffLvNumChange = function(t) {
        var e = t.dataObj,
        i = e.useId;
        this._curUseId == i && this.updateView()
    },
    e.prototype.updateView = function() {
        var t = this;
        this._curUseId == MainManager.actorID ? this._showIconArr = SignViewController.getMySignShowArr() : (this._showIconArr = SignViewController.getOtherSignShowArr(), this._showIconArr = this._showIconArr.reverse()),
        this._buffSignInfos = [];
        for (var e = -1,
        i = 0; i < this._showIconArr.length; i++) {
            var n = this._showIconArr[i],
            o = {};
            o.id = n.index,
            o.lvNum = n.lvNum,
            o.iconObj = n,
            this._buffSignInfos.push(o),
            o.id == this._JumpIndex && (e = i)
        }
        this._buffSignInfos.length <= 0 || (this._curSelectedIndex = this._curSelectedIndex >= this._buffSignInfos.length ? this._buffSignInfos.length - 1 : this._curSelectedIndex, e >= 0 && (this._curSelectedIndex = e), this.updateRender(), this.showCurView(), this._goToIdx(this._curSelectedIndex).then(function() {
            t._list.selectedIndex = t._curSelectedIndex
        }))
    },
    e.prototype.updateRender = function() {
        var t = this._buffSignInfos;
        this._ary.replaceAll(t),
        this._ary.refresh(),
        this._list.validateNow()
    },
    e.prototype.onSelectItem = function(t) {
        this._list.selectedIndex != this._curSelectedIndex && (this._curSelectedIndex = this._list.selectedIndex, this.showCurView(), this.tx_scroller.viewport.scrollV = 0)
    },
    e.prototype.showCurView = function() {
        var t = this._buffSignInfos[this._curSelectedIndex],
        e = this._buffSignInfos[this._curSelectedIndex].id,
        i = this._buffSignInfos[this._curSelectedIndex].lvNum,
        n = SignIconXmlInfo.getInfoById(e);
        this.setIcon(e, i, n);
        var o = t.iconObj.tipsStr,
        r = t.iconObj.fightSignInfo;
        this.tx_buffName.text = String(n.dec),
        this.tx_lvNum.text = "";
        var s = n.NumDes ? n.NumDes: "",
        a = n.isShowNum ? i.toString() : "",
        s = s + "     <font color='#3fe3fa'>" + a + "</font>";
        this.tx_num_title.textFlow = (new egret.HtmlTextParser).parse(s);
        var h;
        if ("" != n.spDes) {
            var l = "#cfeeff",
            c = SignIconXmlInfo.getspDesByidAndLvNum(e, i);
            if (28 == e) {
                var _ = r ? SkillXMLInfo.getName(r.spValue) : "";
                h = "<font color='" + l + "'>" + c + "</font>" + _ + "\n" + n.Des
            } else h = null != c && "" != c ? "<font color='" + l + "'>" + c + "</font>\n" + n.Des: n.Des
        } else h = n.Des;
        h += "",
        1 == e && o && void 0 != o && (h = o),
        this.tx_buffdes.textFlow = (new egret.HtmlTextParser).parse(h)
    },
    e.prototype._goToIdx = function(t) {
        return __awaiter(this, void 0, void 0,
        function() {
            var e, i, n, o, r;
            return __generator(this,
            function(s) {
                return e = 68,
                i = this._scr.height,
                n = this._scr.viewport.contentHeight,
                o = n - i > 0 ? n - i: 0,
                r = this._list.layout.gap,
                [2, DisplayUtil.ScrollerToNumAsync(t, "vertical", e, this._scr, r, 0, o)]
            })
        })
    },
    e.prototype.setIcon = function(t, e, i) {
        var n = SignIconXmlInfo.getspIconByidAndLvNum(t, e);
        "" != n ? this._icon.source = ClientConfig.getBuffIcon(t, Number(n)) : this._icon.source = ClientConfig.getBuffIcon(t),
        this._icon.scaleX = this._icon.scaleY = 1,
        this._iconSprite.numTxt.text = i.isShowNum ? e + "": ""
    },
    e.prototype.destroy = function() {
        DisplayUtil.removeForParent(this.icon),
        ImageButtonUtil.removeAll(this),
        this.rect_bg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClickHandler, this),
        this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectItem, this),
        SocketConnection.removeCmdListener(CommandID.NOTE_USE_SKILL, this.hide, this),
        EventManager.removeEventListener(PetFightEvent.SIGNBUFF_CHANGE_LVNUM, this.onBuffLvNumChange, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.hide, this)
    },
    e
} (eui.Component);
__reflect(SignBuffInfosView.prototype, "SignBuffInfosView");
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
SkillNameBaojiBar = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = SkillBarBaojiSkin,
        e
    }
    return __extends(e, t),
    e.prototype.setSkill = function(t, e, i, n) {
        var o = this;
        void 0 === i && (i = ""),
        void 0 === n && (n = 0);
        var r = this;
        return new Promise(function(s, a) {
            var h = SkillXMLInfo.getName(t, n),
            l = SkillXMLInfo.getTypeID(t);
            "" != i && (h = i),
            o.txtSkillName.text = h;
            var c = "" + l;
            4 == SkillXMLInfo.getCategory(t) && (c = "prop"),
            "" != i && (c = ""),
            o.effect_icon.source = null;
            var _, u = 0;
            e ? (o.currentState = "left", _ = o.x = -o.width - 10, o.grpContent.x = 33 + DeviceInfoManager.adapterOffSetX) : (o.currentState = "right", _ = o.x = egret.lifecycle.stage.stageWidth + 10, u = egret.lifecycle.stage.stageWidth - o.width, o.grpContent.x = 33 - DeviceInfoManager.adapterOffSetX),
            c && (o.effect_icon.source = ClientConfig.getpettypeticon(c)),
            egret.Tween.get(o).to({
                x: u
            },
            300, egret.Ease.elasticOut).wait(3e3 / TimeScaleManager.GameSpeed).to({
                x: _
            },
            300, egret.Ease.cubicIn).call(function() {
                r.parent && r.parent.removeChild(r),
                s()
            })
        })
    },
    e
} (eui.Component);
__reflect(SkillNameBaojiBar.prototype, "SkillNameBaojiBar");
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
SkillNameBar = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = SkillBarSkin,
        e
    }
    return __extends(e, t),
    e.prototype.setSkill = function(t, e, i, n) {
        var o = this;
        void 0 === i && (i = ""),
        void 0 === n && (n = 0);
        var r = this;
        return new Promise(function(s, a) {
            var h = SkillXMLInfo.getName(t, n),
            l = SkillXMLInfo.getTypeID(t);
            "" != i && (h = i),
            o.txtSkillName.text = h;
            var c = "" + l;
            4 == SkillXMLInfo.getCategory(t) && (c = "prop"),
            "" != i && (c = ""),
            o.effect_icon.source = null;
            var _, u = 0;
            e ? (o.currentState = "left", _ = o.x = -o.width - 10, o.grpContent.x = 33 + DeviceInfoManager.adapterOffSetX) : (o.currentState = "right", _ = o.x = egret.lifecycle.stage.stageWidth + 10, u = egret.lifecycle.stage.stageWidth - o.width, egret.setTimeout(function() {
                o.grpContent.x = 33 - DeviceInfoManager.adapterOffSetX
            },
            o, 80)),
            c && (o.effect_icon.source = ClientConfig.getpettypeticon(c)),
            egret.Tween.get(o).to({
                x: u
            },
            300, egret.Ease.elasticOut).wait(3e3 / TimeScaleManager.GameSpeed).to({
                x: _
            },
            300, egret.Ease.cubicIn).call(function() {
                r.parent && r.parent.removeChild(r),
                s()
            })
        })
    },
    e
} (eui.Component);
__reflect(SkillNameBar.prototype, "SkillNameBar");
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
SpeedComponent = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.jiasu.visible = !1,
        this.back.visible = !1,
        ImageButtonUtil.add(this.jiasu, this.onTouchTapImageButton, this),
        ImageButtonUtil.add(this.back, this.onTouchTapImageButton, this),
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
    },
    e.prototype.onTouchTapImageButton = function(t) {
        switch (t.target) {
        case this.jiasu:
            this.speedHandle(2);
            break;
        case this.back:
            this.speedHandle(1)
        }
    },
    e.prototype.speedHandle = function(t) {
        void 0 === t && (t = 1),
        TimeScaleManager.setBattleAnimateSpeed(t)
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this)
    },
    e
} (eui.Component);
__reflect(SpeedComponent.prototype, "SpeedComponent");
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
ToolBtn = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.touchEnabled = this.bg.touchEnabled = this.group_btns.touchEnabled = !1,
        this.btnPet.pixelHitTest = !0,
        this.btnEscape.pixelHitTest = !0,
        this.btnBag.pixelHitTest = !0
    },
    e.prototype.setBtnGroupState = function(t) {
        var e = this;
        t ? egret.Tween.get(this.btnShowBtn).to({
            x: 161
        },
        200, egret.Ease.cubicIn).call(function() {
            e.btnShowBtn.visible = !1,
            egret.Tween.get(e.group_btns).to({
                x: 0
            },
            200, egret.Ease.cubicOut)
        }) : egret.Tween.get(this.group_btns).to({
            x: this.group_btns.width
        },
        200, egret.Ease.cubicIn).call(function() {
            e.btnShowBtn.visible = !0;
            var t = e.btnShowBtn.parent.globalToLocal(egret.lifecycle.stage.stageWidth - 60, 0);
            e.btnShowBtn.x = 161,
            egret.Tween.get(e.btnShowBtn).to({
                x: t.x
            },
            200, egret.Ease.cubicOut)
        })
    },
    e.prototype.destroy = function() {},
    e
} (eui.Component);
__reflect(ToolBtn.prototype, "ToolBtn");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BattleSkillTipController = function() {
    function t() {}
    return t.getPetInfoTip = function(e, i) {
        for (var n = 0; n < t._tipTextList.length; n++) {
            var o = t._tipTextList[n];
            if (o.petInfo == e && o.skillID == i) return o.tipText
        }
        return ""
    },
    t.setPetInfoTip = function(e, i, n) {
        if (e) {
            var o = new PetSkillTipData;
            for (o.petInfo = e, o.skillID = i, o.tipText = n, t._tipTextList.push(o); t._tipTextList.length > 50;) t._tipTextList.shift()
        }
    },
    t.showPetInfoTip = function(e, i, n, o) {
        void 0 === o && (o = !0),
        t.showPoint = n,
        t._petinfo = e;
        var r = t.getPetInfoTip(e, i);
        if (r) o && t.show(i, !0, r);
        else {
            if (t.markStr = "", e) {
                var s = [],
                a = t.getMarkTip(e.abilityMark, e, i);
                "" != a && s.push(a),
                a = t.getMarkTip(e.skillMark, e, i),
                "" != a && s.push(a),
                e.commonMarkActived && (a = t.getMarkTip(e.commonMark, e, i), "" != a && s.push(a)),
                t.markStr = s.join("\r"),
                t.showAdditionInfo(e, i)
            }
            r = t.show(i, !0, "", e ? e.id: 0, o, e ? e.skinId: 0),
            t.setPetInfoTip(e, i, r)
        }
        return r
    },
    t.getMarkTip = function(t, e, i) {
        if (CountermarkXMLInfo.isUniversalMark(t)) {
            var n = ItemManager.getUniversalMarkInfo(t);
            if (n && n.bindMonID == e.id && n.bindMoveID == i) return "全能刻印宝石加成:" + GemsXMLInfo.getEffect(n.gemID)
        }
        if (CountermarkXMLInfo.isQuanxiaoMark(t)) {
            var o = CountermarkXMLInfo.getQuanxiaoSkillID(t);
            if (CountermarkXMLInfo.getSkillArr(o).indexOf(i) > -1) return "刻印加成:" + CountermarkXMLInfo.getSkillEffectDes(o, i)
        }
        return CountermarkXMLInfo.isSkillMark(t) && CountermarkXMLInfo.getSkillArr(t).indexOf(i) > -1 ? "刻印加成:" + CountermarkXMLInfo.getEffectDes(t) : ""
    },
    t.showAdditionInfo = function(e, i) {
        if (t.additionStr = "", PetXMLInfo.isCombinationBonusPet(e.id)) {
            t.additionStr = "组合加成: 未激活";
            for (var n = 0; n < e.effectList.length; n++) {
                var o = e.effectList[n];
                PetEffectXMLInfo.getEffectType(o.effectID, o.args) == PetEffectXMLInfo.SKILL_POWER_ADDITION && (0 == SkillXMLInfo.getDamage(i) ? t.additionStr = "组合加成:0\r": t.additionStr = "组合加成:威力" + PetEffectXMLInfo.getEffectAdditonNum(o.effectID, o.args) + "\r")
            }
            t.additionStr = t.additionStr
        }
    },
    t.show = function(e, i, n, o, r, s) {
        void 0 === i && (i = !1),
        void 0 === n && (n = ""),
        void 0 === o && (o = 0),
        void 0 === r && (r = !0),
        void 0 === s && (s = 0),
        t.tipMC || (t.tipMC = new BattleSkillTip);
        var a = "";
        if (n) a = n;
        else {
            var h, l, c, _ = SkillXMLInfo.getName(e, s),
            u = SkillXMLInfo.getCategory(e),
            p = 0;
            t._petinfo && (p = t._petinfo.catchTime),
            0 != o && PetManager.isFriendSkillActivate(o, e, p) ? (l = SkillXMLInfo.getFriendSideEffects(e), c = SkillXMLInfo.getFriendSideEffectArgs(e)) : (l = SkillXMLInfo.getSideEffects(e), c = SkillXMLInfo.getSideEffectArgs(e));
            var f = 0,
            d = 0;
            1e5 >= e && (f = SkillXMLInfo.movesMap[e].Priority, d = SkillXMLInfo.movesMap[e].MustHit),
            h = 1 == u ? "#FF0000": 2 == u ? "#FF99FF": "#99ff00",
            a = "<font color='#ffff00'>" + _ + "</font>  <font color='" + h + "'>(" + SkillXMLInfo.getCategoryName(e) + ")</font>\r";
            var g = "";
            f > 0 ? g += "先制+" + f + "	": 0 > f && (g += "先制" + f + "	"),
            d > 0 && (g += "必中"),
            "" != g && (a += "\r<font color='#ffffff'>" + g + "</font>\r"),
            "" != t.additionStr && null != t.additionStr && (a += "\r<font color='#00ffff'>" + t.additionStr + "</font>"),
            i && t.markStr && "" != t.markStr ? a += "\r<font color='#00ffff'>" + t.markStr + "</font>": t.markStr = "";
            var m = SkillTipNewXmlInfo.getSkillTipBySkillId(e);
            if ("" != m) a += "\r" + m;
            else for (var y = 0,
            v = 0,
            I = l; v < I.length; v++) {
                var w = I[v];
                if ("" != w) {
                    var M = (1e6 + Number(w), EffectInfoManager.getArgsNum(Number(w))),
                    P = EffectInfoManager.getInfo(Number(w), c.slice(y, y + M));
                    y += M,
                    a += "\r" + P
                }
            }
            1 == SkillXMLInfo.getGpFtSkillType(e) && (a += "\r<font color='#33ff00'>组队时可以向己方任意目标使用</font>"),
            SkillXMLInfo.getGpFtSkillAtkNum(e) > 1 && (a += "\r<font color='#33ff00'>组队时可以影响" + SkillXMLInfo.getGpFtSkillAtkNum(e) + "个目标</font>")
        }
        return t.tipMC.showTip(a),
        r && (t.setPos(), MainManager.stage.stage.addChild(t.tipMC)),
        a
    },
    t.timerHandler = function(e) {
        t.hide()
    },
    t.hide = function() {
        t.tipMC && DisplayUtil.removeForParent(t.tipMC)
    },
    t.setFixedPos = function(e) {
        if (e) {
            var i = e.parent.localToGlobal(e.x, e.y),
            n = i.x + (e.width - t.tipMC.width) / 2,
            o = i.y - t.tipMC.bg.height - 10;
            0 > n && (n = 0),
            0 > o && (o = 0),
            n + t.tipMC.width + 20 >= MainManager.getStageWidth() ? t.tipMC.x = MainManager.getStageWidth() - t.tipMC.width - 10 : t.tipMC.x = n,
            t.tipMC.y = o
        }
    },
    t.setPos = function() {
        t.showPoint.x + t.tipMC.width + 20 >= MainManager.getStageWidth() ? t.tipMC.x = MainManager.getStageWidth() - t.tipMC.width - 10 : t.tipMC.x = t.showPoint.x + 10,
        t.tipMC.y = t.showPoint.y - this.tipMC.bg.height - 20
    },
    t._tipTextList = [],
    t
} ();
__reflect(BattleSkillTipController.prototype, "BattleSkillTipController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BattleFPSManager = function() {
    function t() {}
    return t.init = function() {
        window.device ? this.phoneModel = window.device.model: egret.Capabilities.isMobile && navigator.userAgent ? this.phoneModel = navigator.userAgent.toLowerCase() : this.phoneModel = "PC",
        this.frames = [],
        egret.lifecycle.stage.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this.timeOnEnterFrame = egret.getTimer()
    },
    t.onEnterFrame = function(t) {
        var e = egret.getTimer(),
        i = this.timeOnEnterFrame,
        n = e - i,
        o = 1e3 / n;
        this.frames.push(o),
        this.frames.length > 120 && this.frames.shift(),
        this.timeOnEnterFrame = egret.getTimer();
        for (var r = 0,
        s = this.frames.length,
        a = 0; s > a; a++) r += this.frames[a];
        var h = Math.ceil(r / s);
        this.fps = h,
        this.frames.length >= 100 && 20 > h && (this.sendLog(h), this.stopMonistor())
    },
    t.sendLog = function(t) {
        if (FighterModelFactory.playerMode) {
            var e = FighterModelFactory.playerMode.info.petID,
            i = FighterModelFactory.playerMode.info.skinId,
            n = ~~FighterModelFactory.playerMode.skillCon.useSkillID;
            i = i > 0 ? 14e5 + i: 0;
            var o = FighterModelFactory.playerMode.enemyMode.info.petID,
            r = FighterModelFactory.playerMode.enemyMode.info.skinId,
            s = ~~FighterModelFactory.playerMode.enemyMode.skillCon.useSkillID;
            r = r > 0 ? 14e5 + r: 0;
            var a = new egret.ByteArray;
            a.writeUTFBytes(this.phoneModel),
            a.length = 64,
            StatLogger.log("1120版本系统功能", "对战界面", "帧率降低触发收集卡顿信息"),
            SocketConnection.send(41390, this.lastPetId, this.lastSkinId, this.lastSkillId, e, i, n, this.enemyLastPetId, this.enemyLastSkinId, this.enemyLastSkillId, o, r, s, PetFightController.roundTimes, t, a)
        }
    },
    t.startMonitor = function() {
        this.init()
    },
    t.stopMonistor = function() {
        egret.lifecycle.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this.frames = []
    },
    t.setLastInfo = function(t) {
        t && t.info && (this.lastPetId = t.info.petID, this.lastSkinId = t.info.skinId, this.lastSkillId = t.skillCon.useSkillID, this.enemyLastPetId = t.enemyMode.info.petID, this.enemyLastSkinId = t.enemyMode.info.skinId, this.enemyLastSkillId = t.enemyMode.skillCon.useSkillID, this.lastSkinId = this.lastSkinId > 0 ? 14e5 + this.lastSkinId: this.lastSkinId, this.enemyLastSkinId = this.enemyLastSkinId > 0 ? 14e5 + this.enemyLastSkinId: this.enemyLastSkinId)
    },
    t.lastPetId = 0,
    t.lastSkinId = 0,
    t.lastSkillId = 0,
    t.enemyLastPetId = 0,
    t.enemyLastSkinId = 0,
    t.enemyLastSkillId = 0,
    t.timeOnEnterFrame = 0,
    t.frames = [],
    t.fps = 30,
    t
} ();
__reflect(BattleFPSManager.prototype, "BattleFPSManager");
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
CatchItemPanel = function(t) {
    function e(i) {
        var n = t.call(this) || this;
        return n.categoryArray = [],
        n.MAX = 8,
        n._panel = i,
        n.prevBtn = n._panel.prevBtn,
        n.nextBtn = n._panel.nextBtn,
        n.prevBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, n.scrollItem, n),
        n.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, n.scrollItem, n),
        n.prevBtn.touchEnabled = !1,
        n.prevBtn.filters = e._disableFilters,
        n.nextBtn.touchEnabled = !1,
        n.nextBtn.filters = e._disableFilters,
        n
    }
    return __extends(e, t),
    e.prototype.removeItemSprite = function(t) {
        for (var e = Number(t.dataObj), i = 0, n = this.idArray; i < n.length; i++) {
            var o = n[i];
            if (o == e) return this.idArray.splice(this.idArray.indexOf(o), 1),
            void this.update()
        }
    },
    e.prototype.update = function() {
        var t = Math.ceil(this.idArray.length / this.MAX);
        0 == this.curPage ? (this.prevBtn.touchEnabled = !1, this.prevBtn.filters = e._disableFilters) : (this.prevBtn.touchEnabled = !0, this.prevBtn.filters = []),
        this.curPage == t - 1 ? (this.nextBtn.touchEnabled = !1, this.nextBtn.filters = e._disableFilters) : (this.nextBtn.touchEnabled = !0, this.nextBtn.filters = []);
        var i = this.idArray.slice(this.MAX * this.curPage, this.MAX * (this.curPage + 1));
        this.showPetItem(i)
    },
    e.prototype.scrollItem = function(t) {
        var e = t.target;
        e == this.prevBtn ? this.curPage > 0 && (this.curPage--, this.update()) : this.curPage < Math.ceil(this.idArray.length / this.MAX) - 1 && (this.curPage++, this.update())
    },
    e.prototype.destroy = function() {
        this.clear(),
        this.prevBtn && (this.prevBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.scrollItem, this), this.nextBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.scrollItem, this), this.prevBtn = this.nextBtn = null),
        this._panel && (DisplayUtil.removeForParent(this._panel), this._panel = null),
        EventManager.removeEventListener(PetFightEvent.ON_NO_PET_ITEM, this.removeItemSprite, this),
        t.prototype.destroy.call(this)
    },
    e.prototype.clear = function() {
        ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST, this.onList, this),
        this.removeOldItem()
    },
    e.prototype.show = function() {
        PetFightModel.type != PetFightModel.BATTLE_LAB && PetFightModel.type != PetFightModel.FIGHT_ARENA && (EventManager.addEventListener(PetFightEvent.ON_NO_PET_ITEM, this.removeItemSprite, this), ItemManager.addEventListener(ItemEvent.COLLECTION_LIST, this.onList, this), ItemManager.getCollection(), this.curPage = 0, this.onList(null))
    },
    e.prototype.filteItem = function() {
        this.idArray = [];
        for (var t = 0,
        e = ItemManager.getCollectionIDs(); t < e.length; t++) {
            var i = e[t];
            if (ItemFilterXMLInfo.isHave(i)) {
                if (ItemXMLInfo.getIsSuper(i) && !MainManager.actorInfo.isVip) continue;
                ItemFilterXMLInfo.isCatch(i) && this.idArray.push(i)
            }
        }
        this.idArray.sort(function(t, e) {
            return e - t
        })
    },
    e.prototype.onList = function(t) {
        this.filteItem(),
        this.update()
    },
    e.prototype.removeOldItem = function() {
        if (this.categoryArray) {
            for (var t = 0,
            e = this.categoryArray; t < e.length; t++) {
                var i = e[t];
                DisplayUtil.removeForParent(i.sprite),
                i.destroy(),
                i = null
            }
            this.categoryArray.length = 0
        }
    },
    e.prototype.showPetItem = function(t) {
        for (var e = 0; e < this.MAX; e++) {
            var i = t[e],
            n = this.categoryArray[e];
            i ? (n ? n.itemID = i: (n = new CatchPetItemCategory(i), n.sprite.x = 163 + 72 * e, n.sprite.y = 59, this.panel.addChild(n.sprite), this.categoryArray.push(n)), n.sprite.visible = !0) : n && (n.sprite.visible = !1)
        }
    },
    e.prototype.setCan = function(t) {
        this._panel.touchChildren = t,
        this._panel.touchEnabled = t,
        this.panel.setMaskVisile(!t),
        this.removeOldItem()
    },
    e._disableFilters = [ColorFilter.setSaturation( - 70)],
    e
} (BaseControlPanel);
__reflect(CatchItemPanel.prototype, "CatchItemPanel");
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
panel_type; !
function(t) {
    t[t.skillPanel = 0] = "skillPanel",
    t[t.petPanel = 1] = "petPanel",
    t[t.itemPanel = 2] = "itemPanel"
} (panel_type || (panel_type = {}));
var ControlPanelObserver = function(t) {
    function e(e) {
        var i = t.call(this, e) || this;
        return i.panels = [],
        i.currPanelType = 0,
        i
    }
    return __extends(e, t),
    e.prototype.init = function(t) {
        this.controllPanelContainer = t.parent,
        this.skillPanel = new SkillPanel(t);
        var e = this.controllPanelContainer.getChildByName("grpPetContainer");
        return DisplayUtil.removeForParent(e),
        this.itemPanelContainer = this.controllPanelContainer.getChildByName("grpItemContainer"),
        this.itemPanelContainer.left = DeviceInfoManager.adapterOffSetX,
        this.itemPanelContainer.right = DeviceInfoManager.adapterOffSetX,
        DisplayUtil.removeForParent(this.itemPanelContainer),
        FightManager.isReplay ? void this.addPanel(this.skillPanel) : (this.skillPanel.addEventListener(PetFightEvent.USE_SKILL, this.onUseSkill, this), EventManager.addEventListener("enablePanel", this.enablePanel, this), this.itemPanel = new FightItemPanel(new itemEatPanel), this.catchPanel = new CatchItemPanel(new itemCatchPanel), PetFightModel.type == PetFightModel.PET_ELMENT_FIGHT && (this.itemPanel.setCan(!1), this.catchPanel.setCan(!1)), e.left = DeviceInfoManager.adapterOffSetX, this.petPanel = new PetSelectPanel(e), this.addPanel(this.skillPanel, this.itemPanel, this.petPanel, this.catchPanel), void(TimerManager.autoAction = this.skillPanel))
    },
    e.prototype.enablePanel = function(t) {
        this.subject.closePanel(),
        TimerManager.wait()
    },
    e.prototype.destroy = function() {
        for (var e = 0,
        i = this.panels; e < i.length; e++) {
            var n = i[e];
            n.destroy(),
            n = null
        }
        this.panels = [],
        EventManager.removeEventListener("enablePanel", this.enablePanel, this),
        this.skillPanel && (this.skillPanel.removeEventListener(PetFightEvent.USE_SKILL, this.onUseSkill, this), this.skillPanel.destroy(), this.skillPanel = null),
        this.itemPanel && (this.itemPanel.destroy(), this.itemPanel = null),
        this.catchPanel && (this.catchPanel.destroy(), this.catchPanel = null),
        this.petPanel && (this.petPanel.destroy(), this.petPanel = null),
        t.prototype.destroy.call(this)
    },
    e.prototype.changePet = function() {
        this.skillPanel && this.skillPanel.createSkillBtns()
    },
    e.prototype.onUseSkill = function(t) {
        var e = Number(t.dataObj);
        SocketConnection.send(CommandID.USE_SKILL, e),
        this.subject.closePanel(),
        TimerManager.wait()
    },
    e.prototype.isSurrender = function(t) {
        return PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6 && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_JJ && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_WILD && PetFightModel.type != PetFightModel.PEAK_JIHAD_LIMIT_AC ? void(null != t && t(!1)) : void KTool.getMultiValue([3308, 6918],
        function(e) {
            var i = e[0],
            n = e[1];
            return 0 == i ? void(0 == n ? FightOverController.isFightOver || null != t && t(!1) : t(!0)) : void KTool.getOnlineUsersForeverOrDailyVal([i, 6918],
            function(e) {
                1 == e || 1 == n ? (1 == e && 1 == n && (PeakJihadController.isDraw = !0), 0 != i && SocketConnection.send(CommandID.PEAKJIHAD_SURRENDER_ENDFIGHT), null != t && t(!0)) : null != t && t(!1)
            })
        })
    },
    e.prototype.open = function() {
        this.skillPanel && this.skillPanel.openBtns()
    },
    e.prototype.close = function() {
        this.showFight(),
        this.skillPanel && this.skillPanel.closeBtns()
    },
    e.prototype.alivepet = function(t) {
        this.petPanel && this.petPanel.alivepet(t)
    },
    e.prototype.lockPet = function(t) {
        this.petPanel && this.petPanel.lockPet(t)
    },
    e.prototype.changeHps = function(t) {
        this.petPanel && this.petPanel.changeHps(t)
    },
    e.prototype.setPetsChujue = function(t) {
        this.petPanel && this.petPanel.setPetsChujue(t)
    },
    e.prototype.petUpdateCurPet = function(t) {
        this.petPanel && this.petPanel.petUpdateCurPet(t)
    },
    e.prototype.setImprint = function(t) {
        this.petPanel && this.petPanel.setImprint(t)
    },
    e.prototype.showItem = function(t) {
        return this.currPanelType == panel_type.itemPanel ? void this.itemPanel.show(t) : (this.hideAll(), this.itemPanel.show(t), this.itemPanelContainer.addChild(this.itemPanel.panel), this.controllPanelContainer.addChildAt(this.itemPanelContainer, 0), void(this.currPanelType = panel_type.itemPanel))
    },
    e.prototype.showPet = function(t) {
        void 0 === t && (t = !1),
        this.hideAll(),
        this.petPanel.show(),
        egret.Tween.removeTweens(this.petPanel.panel),
        this.controllPanelContainer.addChild(this.petPanel.panel),
        this.petPanel.panel.y = 130;
        var e = this.petPanel.panel.parent.height - this.petPanel.panel.height - 10;
        egret.Tween.get(this.petPanel.panel).wait(100).to({
            y: e
        },
        200, egret.Ease.getBackOut(1)),
        t && (TimerManager.autoAction = this.petPanel),
        StartFightInfo.isAutoSelectPet = t,
        this.petPanel.update(),
        this.currPanelType = panel_type.petPanel
    },
    e.prototype.showFight = function() {
        if (TimerManager.autoAction = this.skillPanel, !this.skillPanel.panel.stage) {
            this.hideAll(),
            this.controllPanelContainer.addChild(this.skillPanel.panel),
            this.skillPanel.panel.y = 130;
            var t = this.skillPanel.panel.parent.height - this.skillPanel.panel.height - 10;
            egret.Tween.get(this.skillPanel.panel).wait(100).to({
                y: t
            },
            200, egret.Ease.getBackOut(1))
        }
        this.currPanelType = panel_type.skillPanel
    },
    e.prototype.addPanel = function() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        for (var n = 0,
        o = t; n < o.length; n++) {
            var r = o[n];
            this.panels.length > 0 && (r.panel.y = BaseControlPanel.PANEL_HEIGHT),
            this.panels.push(r)
        }
        this.dispatchEvent(new egret.Event(e.ON_ADD_PANEL))
    },
    e.prototype.hideAll = function() {
        for (var t = 0,
        e = this.panels; t < e.length; t++) {
            var i = e[t];
            i.panel.parent && this.hidePanel(i.panel)
        }
    },
    e.prototype.hidePanel = function(t) {
        egret.Tween.removeTweens(t),
        egret.Tween.get(t).to({
            y: 130
        },
        200, egret.Ease.getBackOut(1)).call(function() {
            t && t.parent && t.parent.removeChild(t)
        })
    },
    e.ON_ADD_PANEL = "onAddPanel",
    e
} (BasePanelObserver);
__reflect(ControlPanelObserver.prototype, "ControlPanelObserver", ["IFightToolPanel", "IActivePanelObserver"]);
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
FightItemPanel = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.itemType = 1,
        i._panel = e,
        i._itemArry = [],
        e.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAddToStage, i),
        e.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.onRemoveStage, i),
        e.addEventListener("event_on_change_tab", i.onChangeTab, i),
        i
    }
    return __extends(e, t),
    e.prototype.onChangeTab = function(t) {
        var e = t.data;
        this.itemType = e,
        this.resetRadioButtonAlpha(),
        this._currentSelectedItem && (this._currentSelectedItem.resetUi(), this._currentSelectedItem.hideTips(), this._currentSelectedItem = null),
        this.update()
    },
    e.prototype.onRemoveStage = function() {
        this.resetRadioButtonAlpha(),
        this._currentSelectedItem && (this._currentSelectedItem.hideTips(), this._currentSelectedItem.resetUi(), this._currentSelectedItem = null),
        EventManager.dispatchEventWith("event_close_petBag_panel", !1, !1)
    },
    e.prototype.onAddToStage = function() {
        EventManager.dispatchEventWith("event_open_petBag_panel", !1, !0)
    },
    e.prototype.onUseItem = function(t) {
        if (t = +t, TimerManager.autoDid) return void console.warn("自动战斗已经操作过了，不能使用道具色！");
        if (PetFightModel.type === PetFightModel.PVE_STARTREK) return void Alarm.show("星际迷航对战中不允许使用道具");
        if (PetFightModel.type == PetFightModel.PEAK_JIHAD_NOVICE_PRACUICE) return void Alarm.show("巅峰新手试炼对战中不允许使用道具");
        var e = new egret.Event(PetFightEvent.USE_PET_ITEM, !1, !0, t);
        if (EventManager.dispatchEvent(e)) {
            EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.USE_PET_ITEM)),
            this.itemType == BasePanelObserver.ITEM_CATCH ? (SocketConnection.send(CommandID.CATCH_MONSTER, t), BaseFighterPetView.itemID = t) : SocketConnection.send(CommandID.USE_PET_ITEM, FighterModelFactory.playerMode.info.catchTime, t, 0),
            TimerManager.stop();
            for (var i = this._itemMap[this.itemType], n = i.length - 1; n >= 0; n--) if (i[n] === t) {
                var o = ItemManager.getCollectionInfo(i[n]);
                o.itemNum = o.itemNum - 1,
                o.itemNum <= 0 && this._itemMap[this.itemType].splice(n, 1);
                break
            }
            this.update()
        }
    },
    e.prototype.destroy = function() {
        this.clear(),
        this._itemArry && (this._itemArry.map(function(t) {
            t.destroy()
        }), this._itemArry = null),
        this._panel && (DisplayUtil.removeForParent(this._panel), this._panel.removeEventListener("event_on_change_tab", this.onChangeTab, this), this._panel.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveStage, this), this._panel.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this._panel.destroy(), this._panel = null),
        t.prototype.destroy.call(this)
    },
    e.prototype.clear = function() {
        ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST, this.onList, this)
    },
    e.prototype.show = function(t) {
        this._panel.parent || (this.itemType = t, this.panel.setTabState(t), this.panel.setCatchBtnState(FighterModelFactory.enemyMode.info.catchType > 0), PetFightModel.type != PetFightModel.BATTLE_LAB && PetFightModel.type != PetFightModel.FIGHT_ARENA && (ItemManager.addEventListener(ItemEvent.COLLECTION_LIST, this.onList, this), ItemManager.getCollection(), this.onList(null)))
    },
    e.prototype.onList = function(t) {
        this.filteItem(),
        this.update()
    },
    e.prototype.update = function() {
        var t = this._itemMap[this.itemType],
        e = Math.max(956, egret.lifecycle.stage.stageWidth - 180),
        i = this._panel;
        i._scroller.width = e,
        i._scroller.stopAnimation(),
        i._scroller.viewport.scrollH = 0,
        i.scroller_mask.width = egret.lifecycle.stage.stageWidth;
        var n = 11,
        o = 80,
        r = 15;
        if (egret.lifecycle.stage.stageWidth > 1136) {
            var s = e - (n * o + r * (n + 1));
            n += Math.ceil(s / (o + r))
        }
        i._scroller.scrollPolicyH = eui.ScrollPolicy.AUTO,
        t.length <= n && (i._scroller.scrollPolicyH = eui.ScrollPolicy.OFF),
        n = Math.max(n, t.length),
        GameInfo.isMobile ? i._scroller.width = e - 50 : i._scroller.width = e,
        i._scroller.stopAnimation(),
        i._scroller.viewport.scrollH = 0;
        for (var a = 0; n > a; a++) if (a < this._itemArry.length) this._itemArry[a].resetUi(),
        this._itemArry[a].data = t[a],
        this._itemArry[a].parent || i.grpItem.addChild(this._itemArry[a]),
        this._itemArry[a].x = a * o + (a + 1) * r;
        else {
            var h = new BattleItemRender;
            h.data = t[a],
            i.grpItem.addChild(h),
            this._itemArry.push(h),
            h.x = a * o + (a + 1) * r,
            h.setTouchHandler(new battle.TouchEventHandler(h, this.onTouchTapItem, this.onDoubleTouchTapItem, this.onTouchMoveItem, this.onTouchCancel, this))
        }
        if (n < this._itemArry.length) for (var a = n; a < this._itemArry.length; a++) DisplayUtil.removeForParent(this._itemArry[a])
    },
    e.prototype.filteItem = function() {
        this._itemMap = (h = {},
        h[BasePanelObserver.ITEM_HP] = [], h[BasePanelObserver.ITEM_PP] = [], h[BasePanelObserver.ITEM_STAT] = [], h[BasePanelObserver.ITEM_CATCH] = [], h);
        for (var t, e, i = ItemManager.getCollectionIDs(), n = 0, o = i; n < o.length; n++) if (e = o[n], ItemFilterXMLInfo.isHave(e)) {
            if (ItemXMLInfo.getIsSuper(e) && !MainManager.actorInfo.isVip) continue;
            if (ItemFilterXMLInfo.isCatch(e)) this._itemMap[BasePanelObserver.ITEM_CATCH].push(e);
            else if (PetFightModel.type == PetFightModel.PET_TOPLEVEL || PetFightModel.type == PetFightModel.TOP_WAR_BEYOND) ItemFilterXMLInfo.isTopLevelBlood(e) && this._itemMap[BasePanelObserver.ITEM_STAT].push(e);
            else if (PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_WILD || PetFightModel.type == PetFightModel.PEAK_JIHAD_LIMIT_AC) PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && (ItemFilterXMLInfo.isPeakJihadBlood(e) ? (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)) : ItemFilterXMLInfo.isGoblinKingBattleStatusItem(e) || (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)));
            else if (PetFightModel.type == PetFightModel.GOBLINKING_BATTLE) PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && (ItemFilterXMLInfo.isGoblinKingBattleStatusItem(e) ? (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)) : ItemFilterXMLInfo.isPeakJihadBlood(e) || (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)));
            else {
                if (ItemXMLInfo.getIsSuper(e) && !MainManager.actorInfo.isVip) continue;
                ItemFilterXMLInfo.isBlood(e) && (PetFightModel.type == PetFightModel.REFRACTIVE_MAGIC ? e >= 300634 && 300638 >= e && (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)) : (t = ItemFilterXMLInfo.pporblood(e), t > 0 && this._itemMap[t].push(e)))
            }
        }
        var r = this._itemMap[1];
        r.sort(function(t, e) {
            return ItemFilterXMLInfo.getSort(t) == ItemFilterXMLInfo.getSort(e) ? ItemFilterXMLInfo.getSecSortValue(t) > ItemFilterXMLInfo.getSecSortValue(e) ? -1 : 1 : ItemFilterXMLInfo.getSort(t) > ItemFilterXMLInfo.getSort(e) ? -1 : (ItemFilterXMLInfo.getSort(t) < ItemFilterXMLInfo.getSort(e), 1)
        });
        var s = this._itemMap[2];
        s.sort(function(t, e) {
            return ItemFilterXMLInfo.getSort(t) == ItemFilterXMLInfo.getSort(e) ? ItemFilterXMLInfo.getSecSortValue(t) > ItemFilterXMLInfo.getSecSortValue(e) ? -1 : 1 : ItemFilterXMLInfo.getSort(t) > ItemFilterXMLInfo.getSort(e) ? -1 : (ItemFilterXMLInfo.getSort(t) < ItemFilterXMLInfo.getSort(e), 1)
        });
        var a = this._itemMap[3];
        a.sort(function(t, e) {
            return ItemFilterXMLInfo.getSort(t) == ItemFilterXMLInfo.getSort(e) ? ItemFilterXMLInfo.getSecSortValue(t) > ItemFilterXMLInfo.getSecSortValue(e) ? -1 : 1 : ItemFilterXMLInfo.getSort(t) > ItemFilterXMLInfo.getSort(e) ? -1 : (ItemFilterXMLInfo.getSort(t) < ItemFilterXMLInfo.getSort(e), 1)
        });
        var h
    }, e.prototype.setCan = function(t) {
        this._panel.touchChildren = t,
        this._panel.touchEnabled = t,
        t ? this.panel.setMaskVisile(!1) : this.panel.setMaskVisile(!0)
    },
    e.prototype.setRadioButtonAlpha = function() {
        this._panel.rb_Hp.alpha = .3,
        this._panel.rb_Pp.alpha = .3,
        this._panel.rb_State.alpha = .3,
        this._panel.rb_Catch.alpha = .3
    },
    e.prototype.resetRadioButtonAlpha = function() {
        this._panel.rb_Hp.alpha = 1,
        this._panel.rb_Pp.alpha = 1,
        this._panel.rb_State.alpha = 1,
        this._panel.rb_Catch.alpha = 1
    },
    e.prototype.onTouchTapItem = function(t) {
        if (t.data) {
            GuideManager.isCompleted() && (this._panel._scroller.scrollPolicyH = eui.ScrollPolicy.ON);
            var e = this._currentSelectedItem;
            if (this._currentSelectedItem = t, this._currentSelectedItem === e) return void(GuideManager.isNewSeer() ? this.checkLimit(t) ? (this.onUseItem(t.data), this.resetRadioButtonAlpha(), this._currentSelectedItem.hideTips(), this._currentSelectedItem.selected = !1, this._currentSelectedItem = null) : e.selected = !0 : (this.checkLimit(t) && this.onUseItem(t.data), this.resetRadioButtonAlpha(), this._currentSelectedItem.hideTips(), this._currentSelectedItem.selected = !1, this._currentSelectedItem = null));
            e && (e.selected = !1),
            this._currentSelectedItem.selected = !0,
            this._currentSelectedItem.showTips(),
            this.setRadioButtonAlpha();
            var i = new egret.Event("select_pet_item", !1, !0, this._currentSelectedItem.data); ! EventManager.dispatchEvent(i)
        }
    },
    e.prototype.onDoubleTouchTapItem = function(t) {
        t.data && this._currentSelectedItem && (this.onUseItem(t.data), this.resetRadioButtonAlpha(), this._currentSelectedItem.hideTips(), this._currentSelectedItem.selected = !1, this._currentSelectedItem = null)
    },
    e.prototype.onTouchMoveItem = function(t, e) {
        t.data && this._currentSelectedItem === t && (this._currentSelectedItem.moved(e), this._currentSelectedItem.hideTips(), this._panel._scroller.scrollPolicyH = eui.ScrollPolicy.OFF)
    },
    e.prototype.onTouchCancel = function(t) {
        t.data && (GuideManager.isCompleted() && (this._panel._scroller.scrollPolicyH = eui.ScrollPolicy.ON), this._currentSelectedItem && (this.checkLimit(t) ? (this.onUseItem(t.data), this.resetRadioButtonAlpha(), this._currentSelectedItem.selected = !1, this._currentSelectedItem = null) : this._currentSelectedItem.resetMovedToSelectedState()))
    },
    e.prototype.checkLimit = function(t) {
        return t.y < 100
    },
    e
} (BaseControlPanel);
__reflect(FightItemPanel.prototype, "FightItemPanel");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
FightToolSubject = function() {
    function t() {
        this.array = []
    }
    return t.prototype.registe = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var i = 0,
        n = t; i < n.length; i++) {
            var o = n[i];
            this.array.push(o)
        }
    },
    t.prototype.del = function(t) {
        var e = this.array.indexOf(t); - 1 != e && this.array.splice(e, 1)
    },
    t.prototype.destroy = function() {
        for (var t = 0,
        e = this.array; t < e.length; t++) {
            var i = e[t];
            i.destroy()
        }
        this.array = []
    },
    t.prototype.openPanel = function() {
        if (!FightManager.isReplay) for (var t = 0,
        e = this.array; t < e.length; t++) {
            var i = e[t];
            i.open()
        }
    },
    t.prototype.closePanel = function() {
        if (!FightManager.isReplay) for (var t = 0,
        e = this.array; t < e.length; t++) {
            var i = e[t];
            i.close()
        }
    },
    t.prototype.showItemPanel = function(t) {
        for (var e = 0,
        i = this.array; e < i.length; e++) {
            var n = i[e];
            n.showItem(t)
        }
    },
    t.prototype.showPetPanel = function(t) {
        if (void 0 === t && (t = !1), !FightManager.isReplay) for (var e = 0,
        i = this.array; e < i.length; e++) {
            var n = i[e];
            n.showPet(t)
        }
    },
    t.prototype.showFightPanel = function() {
        for (var t = 0,
        e = this.array; t < e.length; t++) {
            var i = e[t];
            i.open(),
            i.showFight()
        }
    },
    t
} ();
__reflect(FightToolSubject.prototype, "FightToolSubject");
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
HideSkillBtnView = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "skillInfo", {
        set: function(t) {
            this._info = t,
            this.mc = new skillMC(t),
            this.mc.touchEnabled = !0,
            this.mc.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.overHandler, this),
            this.mc.addEventListener(egret.TouchEvent.TOUCH_END, this.outHandler, this),
            this._skillID = t.id,
            this._pp = t.pp,
            this._pp <= 0 && (this._pp = 0, this.closeBtns()),
            this.maxPP = t.maxPP;
            var e;
            if (SkillXMLInfo.getEnHideSkillPetID(this._skillID) > 0) {
                var i = SkillXMLInfo.getHideSkillId(SkillXMLInfo.getEnHideSkillPetID(this._skillID));
                e = ClientConfig.getResPath("hideMoves/" + i + ".png")
            } else e = ClientConfig.getResPath("hideMoves/" + t.id + ".png")
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.playStartMovie = function() {},
    e.prototype.changePP = function(t) {
        this._pp += t,
        this._info.pp += t,
        this._pp > this.maxPP ? this._pp = this.maxPP: this._pp <= 0 && (this._pp = 0),
        this.mc.txtCount.text = this._pp + "/" + this.maxPP,
        this._pp > 0 ? this.openBtns() : this.closeBtns()
    },
    e.prototype.modifyPP = function(t, e) {
        void 0 === e && (e = 0),
        e = this.maxPP,
        this._pp = t,
        this._info.pp = t,
        this.mc.txtCount.text = t + "/" + this.maxPP,
        this.pp > 0 ? this.openBtns() : this.closeBtns()
    },
    e
} (SkillBtnView);
__reflect(HideSkillBtnView.prototype, "HideSkillBtnView");
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
hideSkillMC = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "HideskillmcSkin",
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.nametxt.touchEnabled = !1
    },
    e
} (eui.Component);
__reflect(hideSkillMC.prototype, "hideSkillMC");
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
itemCatchPanel = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = ItemCatchPanelSkin,
        e.init(),
        e
    }
    return __extends(e, t),
    e.prototype.init = function() {
        this.prevBtn = new eui.Button,
        this.prevBtn.x = 138.45,
        this.prevBtn.y = 74.7,
        this.addChild(this.prevBtn),
        this.nextBtn = new eui.Button,
        this.nextBtn.x = 763.4,
        this.nextBtn.y = 74.7,
        this.addChild(this.nextBtn)
    },
    e.prototype.setMaskVisile = function(t) {
        this.image_currency_mask.visible = t
    },
    e
} (eui.Component);
__reflect(itemCatchPanel.prototype, "itemCatchPanel");
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
itemEatPanel = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = ItemEatPanelSkin,
        e._navGroupRadioButton = e.rb_Hp.group,
        e.rb_Hp.value = BasePanelObserver.ITEM_HP,
        e.rb_Pp.value = BasePanelObserver.ITEM_PP,
        e.rb_State.value = BasePanelObserver.ITEM_STAT,
        e.rb_Catch.value = BasePanelObserver.ITEM_CATCH,
        -1 == navigator.userAgent.indexOf("RMX3300") ? (e.scroller_mask.visible = !0, e._scroller.mask = e.scroller_mask) : e.scroller_mask.visible = !1,
        e._navGroupRadioButton.addEventListener(eui.UIEvent.CHANGE, e.onChangeItem, e),
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.percentWidth = this.percentHeight = 100
    },
    e.prototype.onChangeItem = function(t) {
        this.dispatchEventWith("event_on_change_tab", !1, +this._navGroupRadioButton.selectedValue)
    },
    e.prototype.setTabState = function(t) {
        var e = this;
        egret.setTimeout(function() {
            e._navGroupRadioButton.selectedValue = t
        },
        this, 0)
    },
    e.prototype.setCatchBtnState = function(t) { - 1 == navigator.userAgent.indexOf("RMX3300") ? DisplayUtil.setEnabled(this.rb_Catch, t, !t) : this.rb_Catch.visible = t
    },
    e.prototype.setMaskVisile = function(t) {
        this.image_currency_mask.visible = t
    },
    e.prototype.destroy = function() {
        this._navGroupRadioButton.removeEventListener(eui.UIEvent.CHANGE, this.onChangeItem, this)
    },
    e
} (eui.Component);
__reflect(itemEatPanel.prototype, "itemEatPanel");
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
PetBtnView = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._info = e,
        i._catchTime = i._info.catchTime,
        i.mc = new petMC,
        i.mc.touchChildren = !0,
        i.mc.touchEnabled = !0,
        i.mc.filters = [],
        i.maxHP = e.maxHp,
        i.mc.maxHp = i.maxHP,
        i.locked = i._info.lock,
        i.setChujue(i._info.chujueNumber, i._info.chujueRound),
        i.setImprint(i._info.imprintNum, i._info.imprintList),
        i
    }
    return __extends(e, t),
    e.prototype.showLock = function(t) {
        this.locked = t
    },
    e.prototype.setView = function(t) {
        3 == t ? this.mc.selected = !0 : this.mc.selected = !1,
        this.mc.setInfo(this._info),
        this.hp = this._info.hp,
        this.mc.head.source = this._head1
    },
    e.prototype.setTouchHandler = function(t) {
        this._mcTouchUtilInstace = t
    },
    e.prototype.clear = function() {
        this.mc.head.source = null,
        this._mcTouchUtilInstace && this._mcTouchUtilInstace.destroy(),
        this.removeEvent(),
        this._head1 = null,
        this.mc.destroy(),
        DisplayUtil.removeForParent(this.mc),
        this.mc = null
    },
    e.prototype.autoUse = function() {
        this.getMC().selected = !0,
        this.clickHandler(),
        this.getMC().selected = !1
    },
    Object.defineProperty(e.prototype, "catchTime", {
        get: function() {
            return this._catchTime
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.getMC = function() {
        return this.mc
    },
    e.prototype.overHandler = function(t) {},
    e.prototype.outHandler = function(t) {},
    e.prototype.clickHandler = function() {
        if (this.locked) return void BubblerManager.getInstance().showText("该精灵已被放逐，无法出战");
        if (this.mc.selected) {
            if (this.hp <= 0) return;
            if (this._info.catchTime == FighterModelFactory.playerMode.info.catchTime) return void BubblerManager.getInstance().showText("该精灵已经出战");
            this.dispatchEvent(new PetFightEvent(PetFightEvent.CHANGE_PET, this.catchTime))
        } else this.mc.selected || this.dispatchEvent(new PetFightEvent("selectPet", this.catchTime))
    },
    e.prototype.openBtns = function() {
        if (this.hp > 0) if (this.mc.touchChildren = !0, this.mc.touchEnabled = !0, 2 == GameInfo.platform) {
            if (0 == this.mc.blood.value) {
                var t = this.mc.getChildByName("delegate");
                t && t.parent.removeChild(t),
                this.mc.addChild(this.mc.grpContent)
            }
        } else this.mc.imge_item_mask.visible = !1
    },
    e.prototype.closeBtns = function() {
        var t = this;
        if (this.mc.touchChildren = !1, this.mc.touchEnabled = !1, this.mc.imge_item_mask.visible = !1, 2 == GameInfo.platform) {
            if (this.mc.grpContent.parent) {
                this.mc.imge_item_mask.visible = !0;
                var e = 0;
                0 != this.mc.blood.value && (e = 300),
                egret.setTimeout(function() {
                    var e = new egret.RenderTexture;
                    e.drawToTexture(t.mc);
                    var i = new eui.Image(e);
                    i.name = "delegate",
                    t.mc.addChild(i),
                    t.mc.grpContent.parent.removeChild(t.mc.grpContent)
                },
                this, e)
            }
        } else this.mc.imge_item_mask.visible = !0
    },
    e.prototype.removeEvent = function() {},
    Object.defineProperty(e.prototype, "head1", {
        set: function(t) {
            this._head1 = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "hp", {
        get: function() {
            return this._hp
        },
        set: function(t) {
            this._hp = t,
            this._hp > 0 ? (this.setRelation(), this.openBtns()) : this.closeBtns(),
            this.mc.sethp(this._hp, this.maxHP)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setRelation = function() {
        if (null != this.mc && null != this.mc.flag && null != this.info) {
            this.mc.flag.visible = !0;
            var t = Number(PetXMLInfo.getType(this.info.id)),
            e = Number(PetXMLInfo.getType(FighterModelFactory.enemyMode.info.petID)),
            i = TypeXMLInfo.getRelations(SkillXMLInfo.petTypeNameEN(t).split("_"), SkillXMLInfo.petTypeNameEN(e).split("_"));
            i > 1 ? this.mc.flag.source = RES.getRes("petmc_flag2_png") : 1 > i ? this.mc.flag.source = RES.getRes("petmc_flag3_png") : this.mc.flag.source = RES.getRes("petmc_flag4_png")
        }
    },
    Object.defineProperty(e.prototype, "maxHP", {
        get: function() {
            return this._maxHP
        },
        set: function(t) {
            this._maxHP = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "info", {
        get: function() {
            return this._info
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "locked", {
        get: function() {
            return this._locked
        },
        set: function(t) {
            this._locked = t,
            this.mc && (this.mc.lock.visible = this.locked)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.changeHps = function(t) {
        this._info.maxHp = t.maxHp,
        this._info.hp = t.hp,
        this.maxHP = this.info.maxHp
    },
    e.prototype.setChujue = function(t, e) {
        if (this.mc) {
            if (0 == e) return this.mc.chujue1.visible = !1,
            this.mc.chujue2.visible = !1,
            void(this.mc.txtchujueRound.text = "");
            this.mc.chujue1.visible = !1,
            this.mc.chujue2.visible = !1,
            t > 0 ? (this.mc["chujue" + t].visible = !0, this.mc.txtchujueRound.visible = !0, this.mc.txtchujueRound.text = String(e)) : (this.mc.chujue1.visible = !1, this.mc.chujue2.visible = !1, this.mc.txtchujueRound.text = "")
        }
    },
    e.prototype.setImprint = function(t, e) {
        this.mc.imprintIcon.visible = t > 0 && this._hp > 0
    },
    e
} (egret.EventDispatcher);
__reflect(PetBtnView.prototype, "PetBtnView");
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
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
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
    var o, r, s, a, h = {
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
petMC = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._selected = !1,
        e.maxHp = 0,
        e._selectedMovedPosy = 15,
        e.skinName = BattlePetSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        ImageButtonUtil.add(this.imprintIcon,
        function() {
            PopViewManager.getInstance().openView(new BattleFieldIntroPop, PopViewManager.createDefaultStyleObject(), {
                type: 2,
                data: e.petInfo.imprintList
            })
        },
        this)
    },
    e.prototype.init = function() {},
    e.prototype.setInfo = function(t) {
        return __awaiter(this, void 0, void 0,
        function() {
            var e, i, n;
            return __generator(this,
            function(o) {
                switch (o.label) {
                case 0:
                    return this.petInfo = t,
                    e = PetXMLInfo.getType(t.id),
                    this.pet_type_icon.source = ClientConfig.getpettypeticon(e),
                    this.txtPetLv.text = "Lv." + t.level,
                    i = PetXMLInfo.getName(t.id),
                    i.length > 5 && (i = i.substr(0, 4) + ".."),
                    this.txtPetName.text = i,
                    this.setRelation(),
                    [4, KTool.checkHasAdvanced(t)];
                case 1:
                    return n = o.sent(),
                    this.pet_item_bg.source = n ? "battle_pet_item_bg_sy_png": "battle_pet_item_bg_png",
                    [2]
                }
            })
        })
    },
    e.prototype.setRelation = function() {
        var t, e, i = Number(PetXMLInfo.getType(this.petInfo.id)),
        n = Number(PetXMLInfo.getType(FighterModelFactory.enemyMode.info.petID));
        t = SkillXMLInfo.petTypeNameEN(i).split("_"),
        e = SkillXMLInfo.petTypeNameEN(n).split("_");
        var o = ["普通", "克制", "微弱", "无效"],
        r = [126694, 16724736, 10608127, 16711679],
        s = TypeXMLInfo.getRelationsPow(t, e),
        a = Math.pow(10, 4);
        s = Math.round(s * a) / a;
        var h, l = s.toString(),
        c = l.split(".")[1];
        h = void 0 != c ? c.length + 1 : 1,
        0 == s ? (this.restraint_tx_0.textColor = r[3], this.restraint_tx_0.text = o[3] + s.toFixed(h) + ">") : 1 > s ? (this.restraint_tx_0.textColor = r[2], this.restraint_tx_0.text = o[2] + s.toFixed(h) + ">") : 1 == s ? (this.restraint_tx_0.textColor = r[0], this.restraint_tx_0.text = o[0] + s.toFixed(h) + ">") : s > 1 && (this.restraint_tx_0.textColor = r[1], this.restraint_tx_0.text = o[1] + s.toFixed(h) + ">");
        var _ = TypeXMLInfo.getRelationsPow(e, t);
        _ = Math.round(_ * a) / a;
        var u, p = _.toString(),
        f = p.split(".")[1];
        u = void 0 != f ? f.length + 1 : 1,
        0 == _ ? (this.restraint_tx_1.textColor = r[3], this.restraint_tx_1.text = "<" + o[3] + _.toFixed(u)) : 1 > _ ? (this.restraint_tx_1.textColor = r[2], this.restraint_tx_1.text = "<" + o[2] + _.toFixed(u)) : 1 == _ ? (this.restraint_tx_1.textColor = r[0], this.restraint_tx_1.text = "<" + o[0] + _.toFixed(u)) : _ > 1 && (this.restraint_tx_1.textColor = r[1], this.restraint_tx_1.text = "<" + o[1] + _.toFixed(u))
    },
    e.prototype.setHead = function(t) {
        this.head.source = t
    },
    e.prototype.sethp = function(t, e) {
        this.txtPetHp.text = t + "/" + e,
        this.blood.maximum = e,
        this.blood.value = t,
        0 >= t ? this.failed.visible = !0 : this.setRelation()
    },
    e.prototype.setRestraint = function(t) {
        this.failed.visible = !1
    },
    e.prototype.setPetType = function(t) {
        this.pet_type_icon.source = ClientConfig.getpettypeticon(t)
    },
    Object.defineProperty(e.prototype, "selected", {
        get: function() {
            return this._selected
        },
        set: function(t) {
            this._selected = t,
            this.imgSelected.visible = t,
            this.selectedAnimation(t)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.selectedAnimation = function(t) {
        t ? egret.Tween.get(this).to({
            y: -this._selectedMovedPosy
        },
        100) : egret.Tween.get(this).to({
            y: 0
        },
        100)
    },
    e.prototype.moved = function(t) {
        var e = 0 === GameInfo.platform ? 2 : .3;
        this.y += t.y * e,
        this.y = Math.max( - 114, Math.min(0, this.y))
    },
    e.prototype.resetMovedToSelectedState = function() {
        egret.Tween.get(this).to({
            y: -this._selectedMovedPosy
        },
        100)
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this)
    },
    e
} (eui.Component);
__reflect(petMC.prototype, "petMC");
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
PetSelectPanel = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._index = 0,
        i._petsArray = [],
        i._panel = e,
        i._currentTime = FighterModelFactory.playerMode.info.catchTime,
        i._panel.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.removeStage, i),
        i._panel.addEventListener(egret.Event.ADDED_TO_STAGE, i.addToStage, i),
        i
    }
    return __extends(e, t),
    e.prototype.removeStage = function() {
        EventManager.dispatchEventWith("event_close_change_pet_panel", !1, !1),
        this._currentPetView && (this._currentPetView.getMC().selected = !1, this._currentPetView = null)
    },
    e.prototype.addToStage = function() {
        EventManager.dispatchEventWith("event_open_change_pet_panel", !1, !0)
    },
    e.prototype.show = function() {
        if (null == this._petInfoArray) {
            this._petInfoArray = [],
            this._index = 0,
            this.clearPets();
            var t;
            this._petInfoArray = FightUserInfo.fighterInfos.myInfo.petInfoArr.concat();
            var e = this._petInfoArray;
            if (!GuideManager.isCompleted() && 2858 == e[1].id && 2845 == e[2].id) {
                var i = e[1];
                e[1] = e[2],
                e[2] = i
            }
            for (t = 0; t < this._petInfoArray.length; t++) FightUserInfo.readyData.isSpecial || (this._petInfoArray[t] = PetManager.getPetInfo(this._petInfoArray[t].catchTime));
            this.loadPetIcon()
        }
    },
    e.prototype.alivepet = function(t) {
        0 == t ? this.aliveidxarr = null: (this.aliveidxarr || (this.aliveidxarr = []), this.aliveidxarr.push(t))
    },
    e.prototype.loadPetIcon = function() {
        if (! (this._index >= this._petInfoArray.length)) {
            var t = this._petInfoArray[this._index],
            e = ClientConfig.getPetHeadPath(t.id, t.catchTime),
            i = new PetBtnView(t);
            i.addEventListener(PetFightEvent.CHANGE_PET, this.onChangePet, this),
            i.addEventListener("selectPet", this.onSelectPet, this),
            i.head1 = e,
            i.setView(1);
            var n = i.getMC();
            this._setPetMCPostion(n, this._index),
            i.setTouchHandler(new battle.TouchEventHandler(n, this.onTouchTapPetItem, this.onDoubleTouchTapPetItem, this.onMovedPetItem, this.onCancelPetItem, this)),
            this._panel.addChild(n),
            this._petsArray.push(i),
            this._index++,
            this.loadPetIcon()
        }
    },
    e.prototype._setPetMCPostion = function(t, e) {
        var i = Math.max(1136, egret.lifecycle.stage.stageWidth);
        GuideManager.isCompleted() || (i = 1136);
        var n = 6,
        o = n + 1,
        r = (i - n * t.width) / o;
        t.y = 0,
        t.x = e * (t.width + r) + r
    },
    e.prototype.onTouchTapPetItem = function(t) {
        var e = this._currentPetView;
        if (this._currentPetView = this.getPetBtnView(t), this._currentPetView === e) return this.checkLimit(t) && this._currentPetView.clickHandler(),
        void(GuideManager.isNewSeer() || (this._currentPetView.getMC().selected = !1, this._currentPetView = null));
        e && (e.getMC().selected = !1),
        this._currentPetView.getMC().selected = !0;
        var i = new egret.Event("select_pet", !1, !0, this._currentPetView.info.id); ! EventManager.dispatchEvent(i)
    },
    e.prototype.onDoubleTouchTapPetItem = function(t) {
        this._currentPetView && (this._currentPetView.clickHandler(), this._currentPetView.getMC().selected = !1, this._currentPetView = null)
    },
    e.prototype.onMovedPetItem = function(t, e) {
        this._currentPetView && this._currentPetView.getMC().moved(e)
    },
    e.prototype.onCancelPetItem = function(t) {
        this._currentPetView && (this.checkLimit(t) ? (this._currentPetView.clickHandler(), this._currentPetView.getMC().selected = !1, this._currentPetView = null) : this._currentPetView.getMC().resetMovedToSelectedState())
    },
    e.prototype.checkLimit = function(t) {
        return t.y < -76
    },
    e.prototype.getPetBtnView = function(t) {
        for (var e = t.hashCode,
        i = 0,
        n = this._petsArray; i < n.length; i++) {
            var o = n[i];
            if (o.getMC().hashCode === e) return o
        }
        return null
    },
    e.prototype.clearPets = function() {
        for (var t = 0,
        e = this._petsArray; t < e.length; t++) {
            var i = e[t];
            i.removeEventListener(PetFightEvent.CHANGE_PET, this.onChangePet, this),
            i.removeEventListener("selectPet", this.onSelectPet, this),
            i.clear()
        }
        this._petsArray.length = 0
    },
    e.prototype.auto = function() {
        var t = 0;
        if (this._currentPetView) this._currentPetView.clickHandler(),
        this._currentPetView.getMC().selected = !1,
        this._currentPetView = null;
        else {
            for (var e = this._petsArray[0]; (0 == e.hp || e.locked) && t < this._petsArray.length - 1;) t++,
            e = this._petsArray[t];
            e.autoUse()
        }
    },
    e.prototype.onSelectPet = function(t) {
        for (var e = t.currentTarget,
        i = 0,
        n = this._petsArray; i < n.length; i++) {
            var o = n[i];
            o.catchTime == e.catchTime ? o.setView(3) : o.setView(1)
        }
    },
    e.prototype.onChangePet = function(t) {
        var e = t.currentTarget,
        i = new egret.Event("change_pet", !1, !0, e.info.id);
        EventManager.dispatchEvent(i) && (this._currentTime = e.catchTime, SocketConnection.send(CommandID.CHANGE_PET, this._currentTime), FighterModelFactory.playerMode.subject.showFightPanel(), FighterModelFactory.playerMode.info.catchTime = this._currentTime)
    },
    e.prototype.petUpdateCurPet = function(t) {
        this._currentTime = t
    },
    e.prototype.update = function() {
        if (this._petsArray) for (var t = 0,
        e = this._petsArray; t < e.length; t++) {
            var i = e[t];
            i.catchTime == this._currentTime && (i.maxHP = FighterModelFactory.playerMode.info.maxHP, i.hp = FighterModelFactory.playerMode.info.hp),
            i.setView(1)
        }
    },
    e.prototype.lockPet = function(t) {
        var e;
        if (this._petsArray && this._petsArray.length) for (var i = 0; i < this._petsArray.length; i++) e = t && -1 != t.indexOf(this._petsArray[i].info.catchTime) ? !0 : !1,
        this._petsArray[i].showLock(e)
    },
    e.prototype.changeHps = function(t) {
        if (this._petsArray && this._petsArray.length) for (var e = 0; e < this._petsArray.length; e++) for (var i = 0; i < t.length; i++) if (this._petsArray[e].info.catchTime == t[i].catchTime) {
            this._petsArray[e].changeHps(t[i]);
            break
        }
    },
    e.prototype.setPetsChujue = function(t) {
        if (this._petsArray && this._petsArray.length) {
            if (!t) return;
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(n.catchTime)
            }
            for (var o = 0; o < this._petsArray.length; o++) {
                var r = this._petsArray[o].info.catchTime;
                if ( - 1 != e.indexOf(r)) for (var s = 0,
                a = t; s < a.length; s++) {
                    var h = a[s];
                    h.catchTime == r && this._petsArray[o].setChujue(h.chujueNumber, h.chujueRound)
                } else this._petsArray[o].setChujue(0, 0)
            }
        }
    },
    e.prototype.setImprint = function(t) {
        if (this._petsArray && this._petsArray.length) {
            if (!t) return;
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i];
                e.push(n.catchTime)
            }
            for (var o = 0; o < this._petsArray.length; o++) {
                var r = this._petsArray[o].info.catchTime;
                if ( - 1 != e.indexOf(r)) for (var s = 0,
                a = t; s < a.length; s++) {
                    var h = a[s];
                    h.catchTime == r && this._petsArray[o].setImprint(h.imprintNum, h.imprintList)
                } else this._petsArray[o].setImprint(0, [])
            }
        }
    },
    Object.defineProperty(e.prototype, "panel", {
        get: function() {
            return this._panel
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.destroy = function() {
        this.clearPets(),
        this._petsArray = [],
        this._panel && (this._panel.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this), this._panel.removeEventListener(egret.Event.ADDED_TO_STAGE, this.removeStage, this), DisplayUtil.removeForParent(this._panel), this._panel = null),
        t.prototype.destroy.call(this)
    },
    e
} (BaseControlPanel);
__reflect(PetSelectPanel.prototype, "PetSelectPanel", ["IAutoActionPanel"]);
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
SecondShieldIconView2 = function() {
    function t(t, e) {
        ToolTipManager.add(t, "精灵护罩"),
        this._icon = t,
        this._icon.visible = !1,
        this._uid = e,
        this.delataNumTxt.visible = !1,
        this._icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._icon.parent.numTxt2.text = "0"
    }
    return t.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this._icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    t.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        this._playerModel = FighterModelFactory.playerMode,
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    t.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attData = e.firstAttackInfo: this._attData = e.secondAttackInfo,
        this.onRoundStart()
    },
    t.prototype.onRoundStart = function(t) {
        if (void 0 === t && (t = null), null == this._attData) return void(this._icon.visible = !1);
        if (this._attData.specailArr.length < 16) return void(this._icon.visible = !1);
        for (var e = !1,
        i = 0; 4 > i; i++) if (0 != this._attData.specailArr[15 + i]) {
            e = !0;
            break
        }
        e ? this._icon.visible = !0 : this._icon.visible = !1,
        this._shieldNum = this._attData.specailArr[15],
        this._icon.parent.numTxt2.text = this._attData.specailArr[15]
    },
    t.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 16 || (this.shieldNum = this._attData.specailArr[16]))
    },
    t.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 16 || (this.isSelf, this.shieldNum = this._attData.specailArr[17]))
    },
    t.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attData && !(this._attData.specailArr.length < 16)) {
            setTimeout(function() {
                null != e._attData && (e.shieldNum = e._attData.specailArr[18])
            },
            300)
        }
    },
    Object.defineProperty(t.prototype, "shieldNum", {
        set: function(t) {
            if (null != this._icon) {
                var e = t - this._shieldNum;
                this.playDeltaNum(e),
                this._shieldNum = t,
                this._icon.parent.numTxt2.text = t
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.playDeltaNum = function(t) {
        0 != t && (this.delataNumTxt.text = t + "", t > 0 && (this.delataNumTxt.text = "+ " + t), this.delataNumTxt.y = 29.5, this.delataNumTxt.alpha = 1, this.delataNumTxt.visible = !0, null != this.delataNumTxt && egret.Tween.get(this.delataNumTxt).to({
            y: -10
        },
        2500).call(this.tweenComplete, this))
    },
    t.prototype.tweenComplete = function() {
        null != this._icon && (this.delataNumTxt.visible = !1)
    },
    Object.defineProperty(t.prototype, "delataNumTxt", {
        get: function() {
            return this._icon.parent.deltaNumTxt2
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.destory = function() {
        ToolTipManager.remove(this._icon),
        this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._icon = null
    },
    Object.defineProperty(t.prototype, "isSelf", {
        get: function() {
            return this._uid == MainManager.actorID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "logPrefix", {
        get: function() {
            return this.isSelf ? "left": "right"
        },
        enumerable: !0,
        configurable: !0
    }),
    t
} ();
__reflect(SecondShieldIconView2.prototype, "SecondShieldIconView2");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
ShieldIconView2 = function() {
    function t(t, e) {
        ToolTipManager.add(t, "精灵护盾"),
        this._icon = t,
        this._icon.visible = !1,
        this._uid = e,
        this.delataNumTxt.visible = !1,
        this._icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._icon.parent.numTxt.text = "0"
    }
    return t.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this._icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    t.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        this._playerModel = FighterModelFactory.playerMode,
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    t.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attData = e.firstAttackInfo: this._attData = e.secondAttackInfo,
        this.onRoundStart()
    },
    t.prototype.onRoundStart = function(t) {
        if (void 0 === t && (t = null), null == this._attData) return void(this._icon.visible = !1);
        if (this._attData.specailArr.length < 7) return void(this._icon.visible = !1);
        for (var e = !1,
        i = 0; 4 > i; i++) if (0 != this._attData.specailArr[6 + i]) {
            e = !0;
            break
        }
        e ? this._icon.visible = !0 : this._icon.visible = !1,
        this._shieldNum = this._attData.specailArr[6],
        this._icon.parent.numTxt.text = this._attData.specailArr[6]
    },
    t.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 7 || (this.shieldNum = this._attData.specailArr[7]))
    },
    t.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 7 || (this.isSelf, this.shieldNum = this._attData.specailArr[8]))
    },
    t.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attData && !(this._attData.specailArr.length < 7)) {
            setTimeout(function() {
                null != e._attData && (e.shieldNum = e._attData.specailArr[9])
            },
            300)
        }
    },
    Object.defineProperty(t.prototype, "shieldNum", {
        set: function(t) {
            if (null != this._icon) {
                var e = t - this._shieldNum;
                this.playDeltaNum(e),
                this._shieldNum = t,
                this._icon.parent.numTxt.text = t
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.playDeltaNum = function(t) {
        0 != t && (this.delataNumTxt.text = t + "", t > 0 && (this.delataNumTxt.text = "+ " + t), this.delataNumTxt.y = 29.5, this.delataNumTxt.alpha = 1, this.delataNumTxt.visible = !0, null != this.delataNumTxt && egret.Tween.get(this.delataNumTxt).to({
            y: -10
        },
        2500).call(this.tweenComplete, this))
    },
    t.prototype.tweenComplete = function() {
        null != this._icon && (this.delataNumTxt.visible = !1)
    },
    Object.defineProperty(t.prototype, "delataNumTxt", {
        get: function() {
            return this._icon.parent.deltaNumTxt
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.destory = function() {
        ToolTipManager.remove(this._icon),
        this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._icon = null
    },
    Object.defineProperty(t.prototype, "isSelf", {
        get: function() {
            return this._uid == MainManager.actorID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "logPrefix", {
        get: function() {
            return this.isSelf ? "left": "right"
        },
        enumerable: !0,
        configurable: !0
    }),
    t
} ();
__reflect(ShieldIconView2.prototype, "ShieldIconView2");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BitmapFontController = function() {
    function t() {}
    return t.getFont = function(t) {
        var e = new egret.BitmapText;
        return e.font = RES.getRes(t + "_fnt"),
        e.width = 0 / 0,
        e
    },
    t
} ();
__reflect(BitmapFontController.prototype, "BitmapFontController");
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
skillMC = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.skillInfo = e,
        i.skinName = SkillItemSkin,
        i
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        this.cacheAsBitmap = !0,
        this.imge_item_mask.visible = !1;
        var t = SkillXMLInfo.getTypeID(this.skillInfo.id),
        e = "" + t;
        4 == SkillXMLInfo.getCategory(this.skillInfo.id) && (e = "prop"),
        this.type_icon.source = null,
        e && (this.type_icon.source = ClientConfig.getpettypeticon(e)),
        this.txtCount.text = this.skillInfo.pp + "/" + this.skillInfo.maxPP,
        this.txtSkillName.text = this.skillInfo.name;
        var i = SkillXMLInfo.getDamage(this.skillInfo.id);
        this.txtPower.text = "" + i
    },
    e.prototype.changePP = function() {},
    e
} (eui.Component);
__reflect(skillMC.prototype, "skillMC");
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
SkillPanel = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.skillBtnArray = [],
        i.allSkillBtnArray = [],
        i.newPetIds = [1531, 1532, 1605, 1606, 1869, 1870, 2026, 2027, 2517, 70, 2311],
        i.specialPetIds = [92, 93, 94, 270, 271, 272, 367, 368, 369],
        i.ownPetIds = [91, 269, 366],
        i._restrictSkillArr = [13582, 13583, 13584, 13585],
        i.tipArray = [],
        i._panel = e,
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, i.onUseSkillAtck, i),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, i.onchangePet, i),
        i.createSkillBtns(),
        i._panel.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAddedToStage, i),
        i
    }
    return __extends(e, t),
    e.prototype.onAddedToStage = function(t) {},
    e.prototype.auto = function() {
        for (var t = 0,
        e = this.skillBtnArray[0]; ! e.canUseAnyWay && (0 == e.pp || e.islocked) && t < this.skillBtnArray.length - 1;) t++,
        e = this.skillBtnArray[t];
        e.autoUse()
    },
    e.prototype.closeBtns = function() {
        for (var t = 0,
        e = this.skillBtnArray; t < e.length; t++) {
            var i = e[t];
            i.removeEventListener(PetFightEvent.USE_SKILL, this.onSendSkill, this)
        }
        this._panel.alpha = .6,
        this._panel.touchChildren = this._panel.touchEnabled = !1
    },
    e.prototype.openBtns = function() {
        for (var t = 0,
        e = this.skillBtnArray; t < e.length; t++) {
            var i = e[t];
            i.addEventListener(PetFightEvent.USE_SKILL, this.onSendSkill, this)
        }
        this._panel.filters = null,
        this._panel.alpha = 1,
        this._panel.touchChildren = this._panel.touchEnabled = !0,
        EventManager.dispatchEventWith(PetFightEvent.OPEN_SKILL_BAR)
    },
    Object.defineProperty(e.prototype, "panel", {
        get: function() {
            return this._panel
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.destroy = function() {
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this);
        for (var e = 0; e < this.tipArray.length; e++) ToolTipManager.remove(this.tipArray[e]);
        this.tipArray = [],
        this.clearOldBtns(),
        this.skillBtnArray = [],
        this._panel && this._panel.removeChildren(),
        t.prototype.destroy.call(this)
    },
    e.prototype.createSkillBtns = function() {
        var t = FighterModelFactory.playerMode;
        if (!FightManager.isReplay) {
            this.clearOldBtns();
            var e, i;
            i = FightUserInfo.readyData.isSpecial ? FightUserInfo.fighterInfos.myInfo.getPetInfo(t.info.catchTime) : PetManager.getPetInfo(t.info.catchTime),
            e = i.skillArray;
            for (var n = 0,
            o = PetXMLInfo.getCanLearnSkillList(t.info.petID), r = PetXMLInfo.getCanLearnSPSkillList(t.info.petID), s = PetXMLInfo.getAdvanceSkill(t.info.petID), a = 0, h = e; a < h.length; a++) {
                var l = h[a];
                if (0 != l.id) {
                    var c = new SkillBtnView;
                    c.setSkillInfo(l, !1),
                    c.addEventListener(PetFightEvent.USE_SKILL, this.onSendSkill, this),
                    c.petInfo = i;
                    var _ = c.getMC(),
                    u = !0;
                    if ( - 1 == this.newPetIds.indexOf(t.info.petID)) if (l.id < 1e5 && -1 == this.specialPetIds.indexOf(t.info.petID)) - 1 != r.indexOf(l.id) ? this._restrictSkillArr.indexOf(l.id) > -1 && PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && PetFightModel.mode == PetFightModel.SINGLE_MODE ? (c.removeEvent(), _.imge_item_mask.visible = !0, ToolTipManager.add(_, "该技能威力过大，你不能在与其他玩家的单精灵作战中使用"), this.tipArray.push(_), u = !1) : (_.imge_item_mask.visible = !1, _.touchChildren = !0, _.touchEnabled = !0, c.changePP(0)) : -1 == o.indexOf(l.id) && -1 == s.indexOf(l.id) ? (c.removeEvent(), _.imge_item_mask.visible = !0, ToolTipManager.add(_, "你可以在实验室的技能唤醒仪处替换回正确的技能"), this.tipArray.push(_), u = !1) : (_.imge_item_mask.visible = !1, _.touchChildren = !0, _.touchEnabled = !0, c.changePP(0));
                    else {
                        var p = 0;
                        t.info.petID > 200 && t.info.petID < 300 && (p = 1),
                        t.info.petID > 300 && t.info.petID < 400 && (p = 2);
                        var f = PetXMLInfo.getCanLearnSkillList(this.ownPetIds[p]),
                        d = PetXMLInfo.getCanLearnSPSkillList(this.ownPetIds[p]);
                        l.id < 1e5 && -1 == o.indexOf(l.id) && -1 == r.indexOf(l.id) && -1 == f.indexOf(l.id) && -1 == d.indexOf(l.id) && -1 == s.indexOf(l.id) ? (c.removeEvent(), _.imge_item_mask.visible = !0, ToolTipManager.add(_, "你可以在实验室的技能唤醒仪处替换回正确的技能"), this.tipArray.push(_), u = !1) : (_.imge_item_mask.visible = !1, _.touchChildren = !0, _.touchEnabled = !0, c.changePP(0))
                    } else this._restrictSkillArr.indexOf(l.id) > -1 && PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && PetFightModel.mode == PetFightModel.SINGLE_MODE ? (c.removeEvent(), _.imge_item_mask.visible = !0, ToolTipManager.add(_, "该技能威力过大，你不能在与其他玩家的单精灵作战中使用"), this.tipArray.push(_), u = !1) : (_.imge_item_mask.visible = !1, _.touchChildren = !0, _.touchEnabled = !0, c.changePP(0));
                    var g = t.info.skillStateInfo;
                    c.setSkillState(g.skillRunawayMarks[n], g.lockedSkillArr[n]),
                    this.allSkillBtnArray.push(c),
                    this._panel.addChild(_),
                    u && this.skillBtnArray.push(c),
                    n++
                }
            }
            if (SkillXMLInfo.getHideSkillId(i.id) > 0 && null != i.hideSKill) {
                var m = new SkillBtnView;
                m.petInfo = i,
                m.setSkillInfo(i.hideSKill, !0),
                m.setSkillState(g.skillRunawayMarks[g.skillRunawayMarks.length - 1], g.lockedSkillArr[4]),
                this.skillBtnArray.push(m),
                this.allSkillBtnArray.push(m),
                this._panel.addChildAt(m.mc, 0)
            }
        }
    },
    e.prototype.clearOldBtns = function() {
        for (var t = 0,
        e = this.allSkillBtnArray; t < e.length; t++) {
            var i = e[t];
            i.removeEventListener(PetFightEvent.USE_SKILL, this.onSendSkill, this),
            i.clear()
        }
        this.skillBtnArray = [],
        this.allSkillBtnArray = []
    },
    e.prototype.onSendSkill = function(t) {
        var e = Number(t.dataObj);
        if (0 == e) return void this.dispatchEvent(new PetFightEvent(PetFightEvent.USE_SKILL, 0));
        var i = t.currentTarget;
        this.dispatchEvent(new PetFightEvent(PetFightEvent.USE_SKILL, i.skillID))
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e, i = t.dataObj;
        e = i.firstAttackInfo.userID == MainManager.actorID ? i.firstAttackInfo: i.secondAttackInfo;
        for (var n = 0,
        o = 0,
        r = this.skillBtnArray; o < r.length; o++) {
            for (var s = r[o], a = 0, h = e.skillList; a < h.length; a++) {
                var l = h[a];
                s.skillID == l[0] && s.modifyPP(l[1])
            }
            s.isHideSkillBtn ? s.setSkillState(e.skillStateInfo.skillRunawayMarks[e.skillStateInfo.skillRunawayMarks.length - 1], e.skillStateInfo.lockedSkillArr[4]) : s.setSkillState(e.skillStateInfo.skillRunawayMarks[n], e.skillStateInfo.lockedSkillArr[n]),
            n++
        }
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        if (e.userID == MainManager.actorID) for (var i = 0,
        n = this.skillBtnArray; i < n.length; i++) for (var o = n[i], r = 0, s = e.skillList; r < s.length; r++) {
            var a = s[r];
            o.skillID == a[0] && o.modifyPP(a[1])
        }
    },
    e
} (BaseControlPanel);
__reflect(SkillPanel.prototype, "SkillPanel", ["IAutoActionPanel"]);
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
ToolBtnPanelObserver = function(t) {
    function e(e, i) {
        var n = t.call(this, e) || this;
        if (n.isCatch = !0, n.btnArray = [], n.btnMaskArray = [], n.filter = [ColorFilter.setSaturation( - 70)], n.escapeAndsurrendertype = 0, n.btnToolShow = !0, n.isOpenBag = !1, n.toolBtns = i, n.item_btn = i.btnBag, n.btnEscape = i.btnEscape, n.btnPet = i.btnPet, n.item_btn_mask = i.btnBag_mask, n.btnEscape_mask = i.btnEscape_mask, n.btnPet_mask = i.btnPet_mask, i.btnShowBtn.visible = !1, n.item_btn.name = "btnItem", n.btnPet.name = "btnPet", n.btnArray.push({
            btn: n.item_btn,
            mask: n.item_btn_mask
        },
        {
            btn: n.btnEscape,
            mask: n.btnEscape_mask
        },
        {
            btn: n.btnPet,
            mask: n.btnPet_mask
        }), n.addEvent(), n.isCanCatch(), FightManager.isReplay && n.close(), n.escapeAndsurrendertype = 0, PetFightModel.type == PetFightModel.IMAGE_FIGHT && n.disableBtn(n.btnPet, n.btnPet_mask, !1), PetFightModel.type == PetFightModel.PET_TRY_FIGHT) {
            for (var o = [n.item_btn, n.btnPet], r = [n.item_btn_mask, n.btnPet_mask], s = 0; s < o.length; s++) n.disableBtn(o[s], r[s], !1);
            StartFightInfo.isShowFtHp = !1
        }
        PetFightModel.type == PetFightModel.BATTLE_LAB && n.disableBtn(n.item_btn, n.item_btn_mask, !1),
        FightUserInfo.readyData.model == PetFightModel.QINGLONG_COMPLELETE_FIGHT && n.disableBtn(n.item_btn, n.item_btn_mask, !1),
        PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6 && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_JJ && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_WILD && PetFightModel.type != PetFightModel.PEAK_JIHAD_LIMIT_AC || PetFightModel.status != PetFightModel.FIGHT_WITH_PLAYER || (PetFightController.roundTimes > PetFightController.violentValue && n.disableBtn(n.item_btn, n.item_btn_mask, !1), n.escapeAndsurrendertype = 1, PetFightController.roundTimes < PetFightController.surrenderValue ? (ToolTipManager.add(n.btnEscape, "20回合开始后才能认输哦！"), n.disableBtn(n.btnEscape, n.btnEscape_mask, !1)) : n.disableBtn(n.btnEscape, n.btnEscape_mask, !0)),
        PetFightModel.canEscape || n.disableBtn(n.btnEscape, n.btnEscape_mask, !1);
        var a = StartFightInfo.startInfo;
        return 3788 == a.otherInfo.petID && PetFightController.roundTimes <= 1 && n.disableBtn(n.btnPet, n.btnPet_mask, !1),
        n.btnEscape.source = 1 === n.escapeAndsurrendertype ? "battle_btnLose_png": "battle_btnRetreat_png",
        n
    }
    return __extends(e, t),
    e.prototype.addEvent = function() {
        var t = this;
        EventManager.addEventListener("event_open_change_pet_panel", this.onEventChangePetPanel, this),
        EventManager.addEventListener("event_close_change_pet_panel", this.onEventChangePetPanel, this),
        EventManager.addEventListener("event_open_petBag_panel", this.onEventOpenBag, this),
        EventManager.addEventListener("event_close_petBag_panel", this.onEventOpenBag, this),
        ImageButtonUtil.add(this.toolBtns.btnBag,
        function() {
            t.isOpenBag ? t.subject.showFightPanel() : t.subject.showItemPanel(BasePanelObserver.ITEM_HP)
        },
        this),
        ImageButtonUtil.add(this.toolBtns.btnPet,
        function() {
            PetFightModel.mode == PetFightModel.SINGLE_MODE ? BubblerManager.getInstance().showText("单挑模式下不能换宠哦！") : t.subject.showPetPanel()
        },
        this),
        ImageButtonUtil.add(this.toolBtns.btnShowBtn,
        function() {
            t.subject.showFightPanel()
        },
        this),
        ImageButtonUtil.add(this.toolBtns.btnEscape,
        function() {
            0 == t.escapeAndsurrendertype ? t.escape() : KTool.getMultiValue([3308],
            function(e) {
                0 != e[0] && t.surrender()
            })
        },
        this)
    },
    e.prototype.setBtnToolShow = function(t) {
        this.btnToolShow = t,
        this.toolBtns.setBtnGroupState(t)
    },
    e.prototype.onEventChangePetPanel = function(t) {
        var e = t.data;
        this.setBtnToolShow(!e)
    },
    e.prototype.onEventOpenBag = function(t) {
        var e = t.data;
        this.isOpenBag = e,
        this.item_btn.source = e ? "battle_btnPetback_png": "battle_btnBag0_png"
    },
    e.prototype.disableBtn = function(t, e, i) {
        t && (t.touchEnabled = i, e.visible = !i)
    },
    e.prototype.isCanCatch = function() {
        this.isCatch = FighterModelFactory.enemyMode.info.catchType > 0
    },
    e.prototype.setBtnAfterRoundChange = function() {
        PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6 && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_JJ && PetFightModel.type != PetFightModel.PEAK_JIHAD_6V6_WILD && PetFightModel.type != PetFightModel.PEAK_JIHAD_LIMIT_AC || PetFightModel.status != PetFightModel.FIGHT_WITH_PLAYER || (PetFightController.roundTimes > PetFightController.violentValue && this.disableBtn(this.item_btn, this.item_btn_mask, !1), this.escapeAndsurrendertype = 1, PetFightController.roundTimes < PetFightController.surrenderValue ? this.disableBtn(this.btnEscape, this.btnEscape_mask, !1) : this.disableBtn(this.btnEscape, this.btnEscape_mask, !0))
    },
    e.prototype.resetOther = function() {
        for (var t = 0,
        e = this.btnArray; t < e.length; t++) {
            var i = e[t];
            if (PetFightModel.type == PetFightModel.IMAGE_FIGHT) {
                if (i.btn == this.btnPet) break
            } else {
                if (PetFightModel.type == PetFightModel.PET_TRY_FIGHT) break;
                if (PetFightModel.type == PetFightModel.BATTLE_LAB) break;
                if (FightUserInfo.readyData.model == PetFightModel.QINGLONG_COMPLELETE_FIGHT) break;
                if ((PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_WILD || PetFightModel.type == PetFightModel.PEAK_JIHAD_LIMIT_AC) && PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER) {
                    if (PetFightController.roundTimes > PetFightController.violentValue && i.btn == this.item_btn) continue;
                    if (PetFightController.roundTimes < PetFightController.surrenderValue - 1 && i.btn == this.btnEscape) continue
                }
                if (PetFightController.roundTimes <= 1 && 3788 == StartFightInfo.startInfo.otherInfo.petID && i.btn == this.btnPet) continue;
                if (!PetFightController.isCanChangPet && i.btn == this.btnPet) continue;
                if (PetFightModel.type == PetFightModel.PEAK_JIHAD_NOVICE_PRACUICE && i.btn == this.item_btn) continue;
                this.disableBtn(i.btn, i.mask, !0)
            }
        }
    },
    e.prototype.open = function() {
        FightManager.isReplay || (66 == PetFightModel.type ? (this.toolBtns.btnBag.alpha = .6, this.toolBtns.btnBag.touchEnabled = !1, e.AllowChangePet || (this.toolBtns.btnPet.alpha = .6, this.toolBtns.btnPet.touchEnabled = !1)) : PetFightModel.type == PetFightModel.PEAK_JIHAD_NOVICE_PRACUICE ? this.disableBtn(this.item_btn, this.item_btn_mask, !1) : this.toolBtns.btnBag.alpha = this.toolBtns.btnPet.alpha = 1, this.toolBtns.touchChildren = !0, this.toolBtns.filters = [], this.toolBtns.alpha = 1)
    },
    e.prototype.close = function() {
        this.toolBtns.touchChildren = !1,
        this.toolBtns.alpha = .6,
        this.showFight()
    },
    e.prototype.destroy = function() {
        ImageButtonUtil.removeAll(this),
        EventManager.removeEventListener("event_open_change_pet_panel", this.onEventChangePetPanel, this),
        EventManager.removeEventListener("event_close_change_pet_panel", this.onEventChangePetPanel, this),
        EventManager.removeEventListener("event_open_petBag_panel", this.onEventOpenBag, this),
        EventManager.removeEventListener("event_close_petBag_panel", this.onEventOpenBag, this),
        this.item_btn = null,
        this.btnEscape = null,
        this.btnPet = null,
        this.container = null,
        this.btnArray = [],
        this.btnArray = null,
        this.imageCon = null,
        t.prototype.destroy.call(this)
    },
    e.prototype.showItem = function(t) {
        this.resetOther()
    },
    e.prototype.showPet = function(t) {
        void 0 === t && (t = !1)
    },
    e.prototype.showFight = function() {},
    e.prototype.surrender = function() {
        var t = this;
        Alert.show("你确定要认输吗？",
        function() {
            SocketConnection.send(CommandID.PEAKJIHAD_SURRENDER)
        },
        function() {
            t.subject && t.subject.showFightPanel()
        })
    },
    e.prototype.escape = function() {
        var t = this;
        return PetFightModel.type == PetFightModel.FIGHT_DEMON_SPACE ? void Alarm.show("伏魔空间中对战不能随便撤退哦！", null, LevelManager.stage) : PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER && 102 != PetFightModel.type && 103 != PetFightModel.type && 104 != PetFightModel.type && PetFightModel.type != PetFightModel.PEAK_JIHAD_3V3 ? void Alarm.show("用户之间对战不能随便撤退哦！", null, LevelManager.stage) : void Alert.show("你确定要撤退吗？",
        function() {
            SocketConnection.send(CommandID.ESCAPE_FIGHT)
        },
        function() {
            t.subject && t.subject.showFightPanel()
        })
    },
    e.prototype.disablePetBtn = function(t) {
        this.disableBtn(this.btnPet, this.btnPet_mask, t)
    },
    e.AllowChangePet = !1,
    e
} (BasePanelObserver);
__reflect(ToolBtnPanelObserver.prototype, "ToolBtnPanelObserver", ["IFightToolPanel", "IActivePanelObserver"]);
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
ViolentIconView2 = function() {
    function t(t, e) {
        this._icon = t,
        this._icon.visible = !1,
        this._uid = e,
        this._icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._icon.parent.numTxt3.text = "0",
        ToolTipManager.add(t, "狂暴状态：伤害提升0%")
    }
    return t.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this._icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    t.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    t.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attData = e.firstAttackInfo: this._attData = e.secondAttackInfo,
        this.onRoundStart()
    },
    t.prototype.onRoundStart = function(t) {
        return void 0 === t && (t = null),
        ToolTipManager.remove(this._icon),
        null == this._attData ? void(this._icon.visible = !1) : this._attData.specailArr[12] <= 0 ? void(this._icon.visible = !1) : (this._icon.visible = !0, this._violentNum = this._attData.specailArr[12], this._icon.parent.numTxt3.text = String(this._violentNum), void ToolTipManager.add(this._icon, "狂暴状态：伤害提升" + 10 * this._violentNum + "%"))
    },
    t.prototype.destory = function() {
        ToolTipManager.remove(this._icon),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._icon = null
    },
    t
} ();
__reflect(ViolentIconView2.prototype, "ViolentIconView2");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
BossEffectIconController = function() {
    function t() {}
    return t.setup = function() {
        var t = this;
        return new Promise(function(e, i) {
            if (t.allEffects) e();
            else {
                var n = ClientConfig.getResPath("config/xml/bossEffectIcon.json");
                t.allEffects = {},
                RES.getResByUrl(n,
                function(i, n) {
                    t.parse(i),
                    e()
                },
                t, RES.ResourceItem.TYPE_JSON)
            }
        })
    },
    t.parse = function(t) {
        for (var e = t.root.bossEffect,
        i = 0; i < e.length; i++) {
            var n = e[i],
            o = n.iconId,
            r = n.tips,
            s = n.sort,
            a = n.rows,
            h = n.Eid,
            l = n.Args,
            c = "";
            h > 0 && (c += "" + h),
            "" != l && (c += "_" + l);
            var _ = {
                iconId: o,
                tips: r,
                sort: s,
                rows: a
            };
            this.allEffects[c] = _
        }
    },
    t.getIconId = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = "");
        var i = "";
        t > 0 && (i += "" + t),
        "" != e && (i += "_" + e);
        var n = this.allEffects[i];
        return null != n ? n.iconId: -1
    },
    t.getTips = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = "");
        var i = "";
        t > 0 && (i += "" + t),
        "" != e && (i += "_" + e);
        var n = this.allEffects[i];
        return null != n ? n.tips: ""
    },
    t.getSort = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = "");
        var i = "";
        t > 0 && (i += "" + t),
        "" != e && (i += "_" + e);
        var n = this.allEffects[i];
        return null != n ? n.sort: -1
    },
    t.getRows = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = "");
        var i = "";
        t > 0 && (i += "" + t),
        "" != e && (i += "_" + e);
        var n = this.allEffects[i];
        return null != n ? n.rows: -1
    },
    t.allEffects = null,
    t
} ();
__reflect(BossEffectIconController.prototype, "BossEffectIconController");
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
BaseAnimatorCon = function(t) {
    function e(e, i) {
        var n = t.call(this) || this;
        return n.hitframe = 0,
        n.endframe = 0,
        n.repeatframe = 0,
        n.repeatoverframe = 0,
        n.skillID = e,
        n.skillMC = i,
        n
    }
    return __extends(e, t),
    e.prototype.destroy = function() {
        this.skillMC.parent && this.skillMC.parent.removeChild(this.skillMC),
        this.skillMC.removeAllEventListeners("action_end"),
        this.skillMC = null
    },
    e.prototype.playMovie = function(t) {
        var i = this;
        void 0 === t && (t = 1),
        this._looptime = t,
        this.skillMC.addEventListener("action_end",
        function(t) {
            i.dispatchEvent(new egret.Event(e.ON_MOVIE_OVER))
        }),
        this.skillMC.gotoAndPlay(1),
        this.dispatchEvent(new egret.Event(e.ON_MOVIE_HIT)),
        this.totalGetTimer = (new Date).getTime()
    },
    e.prototype.check = function(t) {
        this.skillMC.currentFrame >= this.hitframe && 0 != this.hitframe ? (this.dispatchEvent(new egret.Event(e.ON_MOVIE_HIT)), this.hitframe = 0) : this.skillMC.currentFrame == this.repeatframe && 0 != this.repeatframe ? this.dispatchEvent(new egret.Event(e.ON_MOVIE_REPEAT)) : this.skillMC.currentFrame >= this.repeatoverframe && 0 != this.repeatoverframe ? (this._looptime--, this._looptime > 0 && this.skillMC.gotoAndPlay(this.repeatframe)) : this.skillMC.currentFrame >= this.endframe && 0 != this.endframe && (this.skillMC.removeEventListener(egret.Event.ENTER_FRAME, this.check), this.endframe = 0, this.skillMC.stop(), this.dispatchEvent(new egret.Event(e.ON_MOVIE_OVER)))
    },
    e.prototype.getDescription = function() {
        return SkillXMLInfo.getName(this.skillID)
    },
    e.ON_MOVIE_OVER = "onMovieOver",
    e.ON_MOVIE_HIT = "onMovieHit",
    e.ON_MOVIE_REPEAT = "onMovieRepeat",
    e
} (AbstractAnimatorCon);
__reflect(BaseAnimatorCon.prototype, "BaseAnimatorCon");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
FighterModelFactory = function() {
    function t() {}
    return t.createMode = function(t) {
        var e;
        return null == this.hashMap && (this.hashMap = new Object),
        t.userID == MainManager.actorID ? (e = new PlayerModel(t), this.playerMode = e, this.hashMap[t.userID] = e) : (e = new BaseFighterModel(t), this.enemyMode = e, this.hashMap[t.userID] = e),
        e
    },
    t.getFighterMode = function(t) {
        return this.hashMap[t]
    },
    t.clear = function() {
        this.playerMode.destroy(),
        this.enemyMode.destroy(),
        this.playerMode = null,
        this.enemyMode = null,
        this.hashMap = null
    },
    t
} ();
__reflect(FighterModelFactory.prototype, "FighterModelFactory");
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
PlayerPetView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.isOpened = !1,
        e._isFirstPet = !0,
        e.animateScaleX = 1,
        e
    }
    return __extends(e, t),
    e.prototype.initContainerPos = function() {
        this.petContainer.x = 70,
        this.petContainer.y = 115
    },
    e.prototype.setMc = function(t) {},
    e.prototype.update = function(t, e, i, n) {
        var o = this;
        void 0 === e && (e = 0),
        void 0 === i && (i = 0),
        void 0 === n && (n = 0),
        this.petID = t,
        this.changevalue = 0,
        this._skinId = i;
        var r = BaseFighterPetView.WIN_WIDTH / 2 + this.petContainer.x,
        s = 145 + this.petContainer.y,
        a = t;
        if (2 == n) {
            var h = this.petID;
            this._skinId > 0 && (h = PetSkinXMLInfo.getSkinPetId(this._skinId, this.petID)),
            a = PetXMLInfo.getTransform(h)
        }
        this.petAnimate.showPet(a, e, i, r, s, 1);
        var l = this._isFirstPet;
        this.petAnimate.playAppearAnim(function(t) {
            t ? l && o.dispatchEvent(new PetFightEvent(PetFightEvent.ON_OPENNING)) : o.dispatchEvent(new PetFightEvent(PetFightEvent.ON_OPENNING))
        },
        this),
        this._isFirstPet = !1
    },
    e
} (BaseFighterPetView);
__reflect(PlayerPetView.prototype, "PlayerPetView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PromiseGodSecondBloodView = function() {
    function t(t, e) {
        this._bloodBarMc = t,
        ToolTipManager.add(this._bloodBarMc.h2_up, "辛"),
        this._uid = e,
        this._bloodBarMc.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid);
        var i = this._fighterModel.info;
        this._bloodBarMc.changeHP2(i.xinHp, i.xinMaxHP),
        this._xinHp = i.xinHp,
        this.resetBar(i.xinHp, i.xinMaxHP),
        this.isSelf ? this._bloodBarMc.txtHP2.visible = !0 : this._bloodBarMc.txtHP2.visible = !1
    }
    return t.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this._bloodBarMc.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    t.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        this._playerModel = FighterModelFactory.playerMode,
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    t.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attData = e.firstAttackInfo: this._attData = e.secondAttackInfo,
        this.onRoundStart()
    },
    t.prototype.resetBar = function(t, e) {
        this._bloodBarMc && this._bloodBarMc.changeHP2 && this._bloodBarMc.changeHP2(t, e)
    },
    t.prototype.onRoundStart = function(t) {
        return void 0 === t && (t = null),
        null == this._attData ? void(this._bloodBarMc.h2_up.visible = !1) : this._attData.specailArr.length < 21 ? void(this._bloodBarMc.h2_up.visible = !1) : (this.xinHp = this._attData.specailArr[20], void this.resetBar(this._attData.specailArr[20], this._attData.specailArr[24]))
    },
    t.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 21 || (this.xinHp = this._attData.specailArr[21], this.resetBar(this._attData.specailArr[21], this._attData.specailArr[24])))
    },
    t.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attData && (this._attData.specailArr.length < 21 || (this.xinHp = this._attData.specailArr[22], this.resetBar(this._attData.specailArr[22], this._attData.specailArr[24])))
    },
    t.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attData && !(this._attData.specailArr.length < 21)) {
            setTimeout(function() {
                null != e._attData && (e.xinHp = e._attData.specailArr[23], e.resetBar(e._attData.specailArr[23], e._attData.specailArr[24]))
            },
            300)
        }
    },
    Object.defineProperty(t.prototype, "xinHp", {
        set: function(t) {
            if (null != this._bloodBarMc) {
                var e = t - this._xinHp;
                this.playDeltaNum(e),
                this._xinHp = t
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.playDeltaNum = function(t) {
        0 != t && null != this.delataNumTxt && (this.delataNumTxt.text = t + "", t > 0 && (this.delataNumTxt.text = "+ " + t), this.delataNumTxt.y = 29.5, this.delataNumTxt.alpha = 1, this.delataNumTxt.visible = !0, null != this.delataNumTxt && (egret.Tween.removeTweens(this.delataNumTxt), egret.Tween.get(this.delataNumTxt).to({
            y: -10
        },
        2500).call(this.tweenComplete, this)))
    },
    t.prototype.tweenComplete = function() {
        null != this._bloodBarMc && (this.delataNumTxt.visible = !1)
    },
    Object.defineProperty(t.prototype, "delataNumTxt", {
        get: function() {
            return this._bloodBarMc.hpdeltaNumTxt
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.destroy = function() {
        this._bloodBarMc && this._bloodBarMc.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        ToolTipManager.remove(this._bloodBarMc.h2_up),
        null != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        null != this._playerModel && this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        null != this._fighterModel && this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._bloodBarMc = null
    },
    Object.defineProperty(t.prototype, "isSelf", {
        get: function() {
            return this._uid == MainManager.actorID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "logPrefix", {
        get: function() {
            return this.isSelf ? "left": "right"
        },
        enumerable: !0,
        configurable: !0
    }),
    t
} ();
__reflect(PromiseGodSecondBloodView.prototype, "PromiseGodSecondBloodView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RelationshipView = function() {
    function t() {}
    return t.show = function(t, e, i) {
        if (void 0 === i && (i = null), null == this._restraint && (this._restraint = i), this._restraint) {
            var n, o, r = Number(PetXMLInfo.getType(t)),
            s = Number(PetXMLInfo.getType(e));
            n = SkillXMLInfo.petTypeNameEN(r).split("_"),
            o = SkillXMLInfo.petTypeNameEN(s).split("_");
            var a = this._restraint.getChildByName("Image_arrow_1"),
            h = this._restraint.getChildByName("Image_words_1"),
            l = this._restraint.getChildByName("tx_1"),
            c = TypeXMLInfo.getRelationsPow(n, o),
            _ = Math.pow(10, 4);
            c = Math.round(c * _) / _;
            var u, p = c.toString(),
            f = p.split(".")[1];
            u = void 0 != f ? f.length + 1 : 1,
            l.text = String(c.toFixed(u));
            var d = [0],
            g = [.125, .25, .375, .4375, .5, .5625, .625, .6875, .75, .8125, .875],
            m = [1],
            y = [1.125, 1.25, 1.375, 1.5, 2],
            v = [2.125, 2.25, 2.375, 2.5, 2.625, 2.75, 4],
            I = d.concat(g).concat(m).concat(y).concat(v),
            w = [126694, 16758572, 10608127, 16711679],
            M = [211095, 8789506, 1721480, 3557207];
            l.stroke = 1;
            var P = I.indexOf(c);
            h.source = "battle_imge_restraint_words_imge_" + P + "_png",
            c > 1 ? (c > 2 ? a.source = "battle_imge_restraint_arrow_imge_4_png": a.source = "battle_imge_restraint_arrow_imge_3_png", l.strokeColor = M[1], l.textColor = w[1], ToolTipManager.add(h, "可造成额外伤害")) : 0 == c ? (l.textColor = w[3], l.strokeColor = M[3], a.source = "battle_imge_restraint_arrow_imge_0_png", ToolTipManager.add(h, "无法造成伤害")) : 1 > c ? (l.textColor = w[2], l.strokeColor = M[2], a.source = "battle_imge_restraint_arrow_imge_2_png", ToolTipManager.add(h, "造成伤害减少")) : 1 == c && (l.textColor = w[0], l.strokeColor = M[0], a.source = "battle_imge_restraint_arrow_imge_1_png", ToolTipManager.add(h, "可造成正常伤害"));
            var E = this._restraint.getChildByName("Image_arrow_0"),
            S = this._restraint.getChildByName("Image_words_0"),
            C = this._restraint.getChildByName("tx_0"),
            F = TypeXMLInfo.getRelationsPow(o, n);
            F = Math.round(F * _) / _;
            var k, b = F.toString(),
            x = b.split(".")[1];
            k = void 0 != x ? x.length + 1 : 1,
            C.text = String(F.toFixed(k));
            var T = I.indexOf(F);
            S.source = "battle_imge_restraint_words_imge_" + T + "_png",
            F > 1 ? (F > 2 ? E.source = "battle_imge_restraint_arrow_imge_4_png": E.source = "battle_imge_restraint_arrow_imge_3_png", C.textColor = w[1], C.strokeColor = M[1], ToolTipManager.add(S, "可造成额外伤害")) : 0 == F ? (C.textColor = w[3], C.strokeColor = M[3], E.source = "battle_imge_restraint_arrow_imge_0_png", ToolTipManager.add(S, "无法造成伤害")) : 1 > F ? (C.textColor = w[2], C.strokeColor = M[2], E.source = "battle_imge_restraint_arrow_imge_2_png", ToolTipManager.add(S, "造成伤害减少")) : 1 == F && (C.textColor = w[0], C.strokeColor = M[0], E.source = "battle_imge_restraint_arrow_imge_1_png", ToolTipManager.add(S, "可造成正常伤害"))
        }
    },
    t.destroy = function() {
        this._restraint && (ToolTipManager.remove(this._restraint.restraint_0), ToolTipManager.remove(this._restraint.restraint_1), this._restraint = null)
    },
    t
} ();
__reflect(RelationshipView.prototype, "RelationshipView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RemoveStatusEffect = function() {
    function t(t, e) {
        var i = this;
        this.itemList = [300610, 300611, 300612, 300613, 300614, 300615, 300616, 300705, 300925, 300926, 300927, 300928, 300929, 300930],
        this.effectList = [6, 7, 8, 0, 2, 5, 1, 0, 15, 22, 19, 27, 9, 23];
        var n = ("Effect_0_" + this.effectList[this.itemList.indexOf(e)], this.effectList[this.itemList.indexOf(e)] + 1);
        null == this.effectMC && (this.effectMC = DragonbonesUtil.createAnimate("jiechuzhuangtai_ske_json", "jiechuzhuangtai_tex_json", "jiechuzhuangtai_tex_png", "jiechuzhuangtai")),
        DragonbonesUtil.play(this.effectMC, "jiechuzhuangtaiFrame", 1).then(function() {
            i.effectMC.parent && i.effectMC.parent.removeChild(i.effectMC),
            i.effectMC = null
        }),
        PetFightController.mvContainer.addChild(this.effectMC);
        var o = t.petWin.petContainer.localToGlobal(BaseFighterPetView.WIN_WIDTH / 2, BaseFighterPetView.WIN_HEIGHT - 15),
        r = PetFightController.mvContainer.globalToLocal(o.x, o.y);
        this.effectMC.x = r.x,
        this.effectMC.y = r.y,
        300705 == e ? t.propView.removeAllEffect() : t.propView.removeEffect(PetStatusEffectType.ABNORMAL, n),
        AbstractPetItemCategory.dispatchOnUsePetItem()
    }
    return t
} ();
__reflect(RemoveStatusEffect.prototype, "RemoveStatusEffect");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RenewBloodEffect = function() {
    function t(t, e, i) {
        var n = this;
        this.size = 43,
        this.txt = new egret.TextField,
        this.txt.filters = [new egret.GlowFilter(16777011, 1, 6, 6, 5)],
        this.txt.width = 240,
        this.txt.height = 53,
        this.txt.touchEnabled = !1,
        this.txt.textColor = 3394560,
        this.txt.textAlign = egret.HorizontalAlign.CENTER,
        this.txt.size = this.size,
        this.txt.bold = !0,
        t.info.userID == MainManager.actorID || FightManager.isReplay ? this.txt.x = 175 : this.txt.x = 735 - this.txt.width,
        0 > i ? this.txt.text = "-" + Math.abs(i) : this.txt.text = "+" + Math.abs(i),
        LevelManager.fightLevel.addChild(this.txt),
        this.txt.y = 130,
        egret.Tween.get(this.txt).to({
            y: 124
        },
        1e3),
        this.timer = new egret.Timer(2500, 1),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.closeTxt, this),
        this.timer.start(),
        null == this.effectMC && (this.effectMC = DragonbonesUtil.createAnimate("zhiliao_ske_json", "zhiliao_tex_json", "zhiliao_tex_png", "zhiliao")),
        DragonbonesUtil.play(this.effectMC, "zhiliaoFrame", 1).then(function() {
            n.effectMC.parent && n.effectMC.parent.removeChild(n.effectMC),
            n.effectMC = null
        }),
        PetFightController.mvContainer.addChild(this.effectMC);
        var o = t.petWin.petContainer.localToGlobal(BaseFighterPetView.WIN_WIDTH / 2, BaseFighterPetView.WIN_HEIGHT - 15),
        r = PetFightController.mvContainer.globalToLocal(o.x, o.y);
        this.effectMC.x = r.x,
        this.effectMC.y = r.y
    }
    return t.prototype.closeTxt = function(t) {
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.closeTxt, this),
        this.timer.stop(),
        this.timer = null,
        this.txt && (DisplayUtil.removeForParent(this.txt), this.txt = null),
        AbstractPetItemCategory.dispatchOnUsePetItem()
    },
    t
} ();
__reflect(RenewBloodEffect.prototype, "RenewBloodEffect");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
RenewPPEffect = function() {
    function t(t, e) {
        var i = this;
        if (this.itemID = e, t instanceof PlayerModel) for (var n = ItemXMLInfo.getPP(e), o = 0, r = t.skillBtnViews; o < r.length; o++) {
            var s = r[o];
            s.changePP(n)
        }
        this.timer = new egret.Timer(2500, 1),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.closeTxt, this),
        this.timer.start(),
        null == this.effectMC && (this.effectMC = DragonbonesUtil.createAnimate("PPhuifu_1_ske_json", "PPhuifu_1_tex_json", "PPhuifu_1_tex_png", "PPhuifu_1")),
        DragonbonesUtil.play(this.effectMC, "PPhuifu_1_Frame", 1).then(function() {
            i.effectMC.parent && i.effectMC.parent.removeChild(i.effectMC),
            i.effectMC = null
        }),
        PetFightController.mvContainer.addChild(this.effectMC);
        var a = t.petWin.petContainer.localToGlobal(BaseFighterPetView.WIN_WIDTH / 2, BaseFighterPetView.WIN_HEIGHT - 15),
        h = PetFightController.mvContainer.globalToLocal(a.x, a.y);
        this.effectMC.x = h.x,
        this.effectMC.y = h.y
    }
    return t.prototype.completeHandle = function(t) {
        this.effectMC && (this.effectMC.removeEventListener(egret.Event.COMPLETE, this.completeHandle, this), this.effectMC.parent && this.effectMC.parent.removeChild(this.effectMC), this.effectMC = null)
    },
    t.prototype.closeTxt = function(t) {
        AbstractPetItemCategory.dispatchOnUsePetItem(),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.closeTxt, this),
        this.timer.stop(),
        this.timer = null
    },
    t
} ();
__reflect(RenewPPEffect.prototype, "RenewPPEffect");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
LoadingViewController = function() {
    function t() {}
    return t.setup = function(t) {
        this.isOutFinish = !1,
        this.isLoadingUI = !1,
        this.loadingMC = null,
        this.outScreenMC = null,
        this.assetLoading = new AssetsLoadManager,
        this.skin_moves = config.xml.getAnyRes("skin_moves").root;
        for (var e = 0,
        i = t.allPetID; e < i.length; e++) {
            var n = i[e];
            this.assetLoading.addPetID(n);
            var o = PetXMLInfo.getCombo(n);
            o != n && (this.assetLoading.addPetID(o), this.assetLoading.addSkillID((10 * o + 1).toString()), this.assetLoading.addSkillID((10 * o + 2).toString()));
            var r = PetXMLInfo.getTransform(n);
            r != n && this.assetLoading.addPetID(r);
            var s = PetIdTransform.getPetId(n);
            0 != s && -1 == t.allPetID.indexOf(s) && this.assetLoading.addPetID(s)
        }
        for (var a = 0,
        h = t.allSkillID; a < h.length; a++) {
            var l = h[a];
            this.assetLoading.addSkillID(l)
        }
        for (var c = 0,
        _ = t.allPetCatch; c < _.length; c++) {
            var u = _[c],
            p = PetIdTransform.getPetId(0, u);
            0 != p && -1 == t.allPetID.indexOf(p) ? this.assetLoading.addPetID(p) : 0 != p && -1 != t.allPetID.indexOf(p) && PetFightModel.type == PetFightModel.PET_MELEE && this.assetLoading.addPetID(PetManager.getPetInfo(u).id)
        }
        this.loadingMC = new FightLoadingView(t),
        this.loadingMC.sprite().addEventListener(egret.Event.COMPLETE, this.onCHandler, this),
        SocketConnection.mainSocket.connected ? MainManager.stage.addChild(this.loadingMC.sprite()) : LevelManager.topLevel.addChild(this.loadingMC.sprite()),
        SocketConnection.addCmdListener(CommandID.LOAD_PERCENT, this.onPercent, this),
        SocketConnection.addCmdListener(CommandID.READY_TO_FIGHT, this.onReadyToFight, this),
        SocketConnection.mainSocket.addEventListener(egret.Event.CLOSE, this.socketClose, this),
        EventManager.addEventListener(PetFightEvent.START_FIGHT, this.onStartFight, this),
        EventManager.addEventListener(PetFightEvent.FIGHT_CLOSE, this.onCloseFight, this)
    },
    t.onPercent = function(t) {
        var e = new FightLoadPercentInfo(t.data);
        e.id != MainManager.actorID && this.loadingMC && this.loadingMC.setOtherPro(e.percent)
    },
    t.onCHandler = function(t) {
        this.loadingMC.sprite().removeEventListener(egret.Event.COMPLETE, this.onCHandler, this)
    },
    t.startForLoading = function() {
        this.isLoadingUI = !0,
        this.assetLoading.addEventListener(AssetsEvent.LOAD_ALL_ASSETS, this.onLoadAllForLoading, this),
        this.assetLoading.addEventListener(AssetsEvent.PROGRESS, this.onProgressForLoading, this),
        this.assetLoading.loadAssets()
    },
    t.onLoadAllForLoading = function(t) {
        this.assetLoading.removeEventListener(AssetsEvent.LOAD_ALL_ASSETS, this.onLoadAllForLoading, this),
        this.assetLoading.removeEventListener(AssetsEvent.PROGRESS, this.onProgressForLoading, this),
        this.onDestroyLoading(null)
    },
    t.onDestroyLoading = function(t) {
        this.loadingMC && this.loadingMC.removeEventListener("destroy_loading", this.onDestroyLoading, this),
        this.assetLoading.destroy(),
        FightManager.isReplay ? (this.isLoadingUI = !1, EventManager.dispatchEvent(new PetFightEvent(PetFightEvent.REPLAY_NEXT))) : this.onAssetsOverHandle()
    },
    t.onAssetsOverHandle = function() {
        if (t.isLoadingUI = !1, PetFightController._fightByServer) {
            if (PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE) return void SocketConnection.sendByQueue(42385, [4, 3]);
            SocketConnection.sendByQueue(42385, [1, 6])
        } else if (FightManager.fightNeedRequestByClient) {
            if (PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE) return void SocketConnection.sendByQueue(42385, [4, 3]);
            SocketConnection.sendByQueue(42385, [1, 6])
        } else SocketConnection.send(CommandID.READY_TO_FIGHT);
        PetFightController._fightByServer = !1
    },
    t.onProgressForLoading = function(t) {
        PetFightModel.type != PetFightModel.FANTASY_PET_MELEE && PetFightModel.type != PetFightModel.PET_MELEE_FIGHT_BOSS && PetFightModel.type != PetFightModel.WIZARDKING_BIGFIGHT && this.loadingMC && this.loadingMC.setMyPro(t.percent)
    },
    t.onReadyToFight = function(t) {
        var e = t.data,
        i = e.readUnsignedInt();
        PetFightModel.type != PetFightModel.PET_MELEE && PetFightModel.type != PetFightModel.FANTASY_PET_MELEE && PetFightModel.type != PetFightModel.PET_MELEE_FIGHT_BOSS && PetFightModel.type != PetFightModel.WIZARDKING_BIGFIGHT && this.loadingMC && this.loadingMC.ok(i)
    },
    t.onStartFight = function(t) {
        DisplayUtil.removeForParent(this.loadingMC.sprite())
    },
    t.onCloseFight = function(t) {
        if (this.assetLoading) try {
            this.assetLoading.destroy(),
            PetAssetsManager.getInstance().clearAll(),
            SkillAssetsManager.getInstance().clearAll(),
            this.assetLoading.clearPetAssets(),
            this.assetLoading.clearSkillAssets()
        } catch(e) {}
    },
    t.socketClose = function() {
        var t = this;
        this.isLoadingUI && EventManager.once(SocketEvent.SOCKETRECONNECT,
        function() {
            t.isLoadingUI || t.onAssetsOverHandle()
        },
        this)
    },
    t.destroy = function() {
        if (SocketConnection.removeCmdListener(CommandID.LOAD_PERCENT, this.onPercent, this), SocketConnection.removeCmdListener(CommandID.READY_TO_FIGHT, this.onReadyToFight, this), SocketConnection.mainSocket.removeEventListener(egret.Event.CLOSE, this.socketClose, this), EventManager.removeEventListener(PetFightEvent.START_FIGHT, this.onStartFight, this), EventManager.removeEventListener(PetFightEvent.FIGHT_CLOSE, this.onCloseFight, this), EventManager.removeAll(this), this.loadingMC && this.loadingMC.sprite && (this.loadingMC.removeEventListener(egret.Event.COMPLETE, this.onCHandler, this), this.loadingMC.removeEventListener("destroy_loading", this.onDestroyLoading, this), DisplayUtil.removeForParent(this.loadingMC.sprite()), this.loadingMC.destroy(), this.loadingMC = null), this.assetLoading) {
            this.assetLoading.removeEventListener(AssetsEvent.LOAD_ALL_ASSETS, this.onLoadAllForLoading, this),
            this.assetLoading.removeEventListener(AssetsEvent.PROGRESS, this.onProgressForLoading, this);
            try {
                this.assetLoading.destroy(),
                this.assetLoading.clearPetAssets(),
                this.assetLoading.clearSkillAssets()
            } catch(t) {}
        }
    },
    t.DEFAULT_SKILL = 10001,
    t.isOutFinish = !1,
    t
} ();
__reflect(LoadingViewController.prototype, "LoadingViewController");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetAnimateFactory = function() {
    function t() {}
    return t.getPetAnimate = function() {
        var t;
        return 0 == FightManager.fightAnimateMode ? t = new CJSPetAnimator: 1 == FightManager.fightAnimateMode ? t = new CardPetAnimator: 2 == FightManager.fightAnimateMode && (t = new CJSStandPetAnimator),
        t
    },
    t
} ();
__reflect(PetAnimateFactory.prototype, "PetAnimateFactory");
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
CardPetAnimator = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.shake = new BasicQuake,
        e
    }
    return __extends(e, t),
    e.prototype.playAnimate = function(t, e, i, n) {
        var o = this;
        e && egret.setTimeout(function() {
            e.call(n || o)
        },
        this, 1e3),
        i && egret.setTimeout(function() {
            i.call(n || o)
        },
        this, 2e3),
        this.animate && this.animate.parent && this.animate.parent.addChild(this.animate)
    },
    e.prototype.stopAnimateAtActionFrame = function(t, e, i) {
        this.animate && this.animate.parent && this.animate.parent.addChild(this.animate),
        e && e.call(i, !1)
    },
    e.prototype.playAppearAnim = function(t, e) {
        t && t.call(e, !1)
    },
    e.prototype.playTransformationAnim = function(t, e) {
        t.call(e)
    },
    e.prototype.playDefendAnim = function(t, e) {
        t && t.call(e || this)
    },
    e.prototype.playStandAnim = function(t, e) {
        0 != this.animate.skewX
    },
    e.prototype.showPet = function(e, i, n, o, r, s) {
        t.prototype.showPet.call(this, e, i, n, o, r, s);
        var a = e;
        a = PetIdTransform.getPetId(a, i),
        a = PetXMLInfo.getRealId(a),
        n > 0 && (a = PetSkinXMLInfo.getSkinPetId(n, a));
        var h = 0,
        l = 0,
        c = AssetsLoadManager.petAnchors["id" + a];
        c && (h = c.x, l = c.y),
        console.warn("PetID:" + a + "   offsetX:" + h + "  offsetY:" + l + "  x" + o);
        var _ = new eui.Image;
        _.source = ClientConfig.getfightPetPng(e + "", i, n),
        this.animate && this.animate.parent && (this.animate.parent.removeChild(this.animate), egret.Tween.removeTweens(this.animate)),
        _.anchorOffsetX = h,
        _.anchorOffsetY = l,
        _.x = o,
        _.y = r,
        _.scaleX = s,
        _.name = "pet" + a,
        this.animate = _,
        PetFightController.petContainer.addChild(_),
        console.warn("PetID:" + a + "   offsetX:" + h + "  offsetY:" + l + "  realX:" + _.x + "  ")
    },
    e
} (BasePetAnimator);
__reflect(CardPetAnimator.prototype, "CardPetAnimator");
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
CJSPetAnimator = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.newPets = [],
        e
    }
    return __extends(e, t),
    e.prototype.playAnimate = function(t, e, i, n) {
        var o = this;
        this.newPets.indexOf(this.petId) >= 0 ? this.animate.gotoAndPlay(t) : this.animate.gotoAndStop(t),
        this.animate.addEventListener("action_hit",
        function(t) {
            if (e) {
                var i = n || o;
                e.call(i)
            }
        }),
        this.animate.addEventListener("action_end",
        function(t) {
            if (o.animate.removeAllEventListeners("action_hit"), o.animate.removeAllEventListeners("action_end"), i) {
                var e = n || o;
                i.call(e)
            }
        }),
        this.newPets.indexOf(this.petId) < 0 && this.animate.getChildAt(0).gotoAndPlay(1),
        this.animate.parent.addChild(this.animate)
    },
    e.prototype.stopAnimateAtActionFrame = function(t, e, i) {
        this.animate.gotoAndStop(t),
        this.animate.parent.addChild(this.animate),
        e && e.call(i, !1)
    },
    e.prototype.playAppearAnim = function(t, e) {
        var i = this,
        n = this.animate.labels,
        o = !1;
        for (var r in n) if ("appear" == n[r].label) {
            o = !0;
            break
        }
        if (o) {
            this.animate.gotoAndStop("appear");
            var s = this.animate.getChildAt(0);
            s && (s.gotoAndPlay(2), this.animate.addEventListener("action_end",
            function(n) {
                i.animate.removeAllEventListeners("action_end"),
                t && t.call(e, !0)
            }))
        } else t && t.call(e, !1)
    },
    e.prototype.playTransformationAnim = function(t, e) {
        var i = this,
        n = !1,
        o = this.animate.labels;
        for (var r in o) if ("transform" == o[r].label) {
            n = !0;
            break
        }
        if (n) {
            this.animate.gotoAndStop("transform");
            var s = this.animate.getChildAt(0);
            s && (this.animate.addEventListener("action_end",
            function(n) {
                i.animate.removeAllEventListeners("action_end"),
                t.call(e)
            }), s.gotoAndPlay(2))
        } else t.call(e)
    },
    e.prototype.playDefendAnim = function(t, e) {
        this.newPets.indexOf(this.petId) >= 0 ? this.animate.gotoAndPlay("hited") : (this.animate.gotoAndStop("hited"), this.animate.getChildAt(0).gotoAndPlay(2)),
        t && t.call(e || this)
    },
    e.prototype.playStandAnim = function(t, e) {
        this.animate.getChildAt(0).gotoAndStop(1)
    },
    e.prototype.showPet = function(e, i, n, o, r, s) {
        t.prototype.showPet.call(this, e, i, n, o, r, s),
        this.petId = e;
        var a = PetAssetsManager.getInstance().getAssetsByID(e, i, n);
        this.animate && this.animate.parent && this.animate.parent.removeChild(this.animate),
        a.x = o,
        a.y = r,
        this.newPets.indexOf(this.petId) >= 0 && (a.y = r + 100),
        a.scaleX = s,
        this.animate = a,
        a.gotoAndPlay(1),
        CjsUtil.showAnimate(this.animate)
    },
    e.prototype.destroy = function() {
        this.animate && this.animate.parent && this.animate.parent.removeChild(this.animate)
    },
    e
} (BasePetAnimator);
__reflect(CJSPetAnimator.prototype, "CJSPetAnimator");
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
CJSSkillAnimator = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.init = function(t, e, i, n, o) {
        this.skillId = t;
        var r = SkillAssetsManager.getInstance().getAssetsByID(e);
        return r && (this.skillMC = r, r.x = i, r.y = n, r.scaleX = o, CjsUtil.showAnimate(r)),
        r
    },
    e.prototype.play = function(t, e, i) {
        var n = this;
        t && t.call(i || this),
        this.skillMC.addEventListener("action_end",
        function(t) {
            n.skillMC.removeAllEventListeners("action_end"),
            n.skillMC.removeAllEventListeners("action_hit"),
            n.skillMC.parent && n.skillMC.parent.removeChild(n.skillMC),
            e && e.call(i || n)
        }),
        this.skillMC.gotoAndPlay(1)
    },
    e
} (BaseSkillAnimator);
__reflect(CJSSkillAnimator.prototype, "CJSSkillAnimator");
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
CJSStandPetAnimator = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.shake = new BasicQuake,
        e
    }
    return __extends(e, t),
    e.prototype.playAnimate = function(t, e, i, n) {
        var o = this;
        e && egret.setTimeout(function() {
            e.call(n || o)
        },
        this, 2e3),
        i && egret.setTimeout(function() {
            i.call(n || o)
        },
        this, 3e3),
        this.animate.parent.addChild(this.animate)
    },
    e.prototype.stopAnimateAtActionFrame = function(t, e, i) {
        this.animate.parent.addChild(this.animate),
        e && e.call(i, !1)
    },
    e.prototype.playAppearAnim = function(t, e) {
        t && t.call(e, !1)
    },
    e.prototype.playTransformationAnim = function(t, e) {
        t.call(e)
    },
    e.prototype.playDefendAnim = function(t, e) {
        t && t.call(e || this)
    },
    e.prototype.playStandAnim = function(t, e) {},
    e.prototype.showPet = function(e, i, n, o, r, s) {
        t.prototype.showPet.call(this, e, i, n, o, r, s);
        var a = PetAssetsManager.getInstance().getPreviewAssetsByID(e, i, n);
        this.animate && this.animate.parent && this.animate.parent.removeChild(this.animate),
        a.x = o,
        a.y = r,
        a.scaleX = s,
        this.animate = a,
        a.gotoAndStop(1),
        CjsUtil.showAnimate(this.animate)
    },
    e.prototype.destroy = function() {
        this.animate && this.animate.parent && this.animate.parent.removeChild(this.animate)
    },
    e
} (BasePetAnimator);
__reflect(CJSStandPetAnimator.prototype, "CJSStandPetAnimator");
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
DBSkillAnimator = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.init = function(t, i, n, o, r) {
        return this.skillId = t,
        e.skillMC || (e.skillMC = DragonbonesUtil.createAnimate("texiao_ske_json", "texiao_tex_json", "texiao_tex_png", "texiao")),
        e.skillMC.x = n,
        e.skillMC.y = o,
        e.skillMC.scaleX = r,
        {}
    },
    e.prototype.play = function(t, i, n) {
        PetFightController.mvContainer.addChild(e.skillMC);
        var o = SkillXMLInfo.getCategory(~~this.skillId);
        1 == o ? (e.skillMC.animation.play("wugong", -1), e.skillMC.scaleX > 0 ? e.skillMC.x = e.skillMC.x + 580 : e.skillMC.x = e.skillMC.x - 560) : 2 == o ? e.skillMC.animation.play("tegong", -1) : (e.skillMC.animation.play("shuxing", -1), e.skillMC.y = e.skillMC.y + 70);
        var r = this,
        s = function() {
            i.call(n),
            e.skillMC.removeEventListener(dragonBones.EventObject.COMPLETE, s, r)
        };
        e.skillMC.addEventListener(dragonBones.EventObject.COMPLETE, s, r)
    },
    e
} (BaseSkillAnimator);
__reflect(DBSkillAnimator.prototype, "DBSkillAnimator");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetFightFrameManager = function() {
    function t() {}
    return t.getframe = function(t, e) {
        var i = 0,
        n = RES.getRes("fightFrame_json"),
        o = n[t.toString()];
        return o && (i = o[e]),
        i
    },
    t.geth5frame = function(t) {
        var e = 0,
        i = RES.getRes("fightFrame_json");
        return e = i[t]
    },
    t.getloopframe = function(t) {
        var e = 0,
        i = RES.getRes("fightFrame_json");
        return e = i[t + "loop"]
    },
    t
} ();
__reflect(PetFightFrameManager.prototype, "PetFightFrameManager");
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
BuffHeadFrameView = function(t) {
    function e(e, i) {
        var n = t.call(this) || this;
        n._lvNum = 0,
        n._id = e.index,
        n._lvNum = e.lvNum,
        n._uid = i,
        n._icon = new eui.Image,
        n.addChild(n._icon),
        n.touchEnabled = n._icon.touchEnabled = !1;
        var o = new eui.Group;
        return o.width = 35,
        o.height = 35,
        o.left = 0,
        o.bottom = 0,
        n.addChild(o),
        EventManager.addEventListener(PetFightEvent.SIGNBUFF_CHANGE_LVNUM, n.onBuffLvNumChange, n),
        ImageButtonUtil.add(o,
        function() {
            SignViewController.showInfoView(n.useId, n.id)
        },
        n),
        n.updateView(),
        n
    }
    return __extends(e, t),
    e.prototype.onBuffLvNumChange = function(t) {
        var e = t.dataObj,
        i = e.useId,
        n = e.iconId;
        this._lvNum = e.lvNum,
        this.useId == i && n == this.id && this.updateView()
    },
    e.prototype.updateView = function(t, e) {
        void 0 === t && (t = null),
        void 0 === e && (e = null),
        t && (this._id = t.index, this._lvNum = t.lvNum),
        e && (this._uid = e);
        var i = SignIconXmlInfo.getHeadFrameByidAndLvNum(this.id, this.lvNum);
        "" != i ? this._icon.source = ClientConfig.getBuffHeadFrameIcon(this.id, Number(i)) : this._icon.source = ClientConfig.getBuffHeadFrameIcon(this.id)
    },
    Object.defineProperty(e.prototype, "icon", {
        get: function() {
            return this
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "iconImage", {
        get: function() {
            return this._icon
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isShow", {
        get: function() {
            return this._show
        },
        set: function(t) {
            null != this.icon && (this._show != t && (this._show = t), this.visible = this._show)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isSelf", {
        get: function() {
            return this._uid == MainManager.actorID
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this._id
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "useId", {
        get: function() {
            return this._uid
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "lvNum", {
        get: function() {
            return this._lvNum
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.destroy = function() {
        EventManager.removeEventListener(PetFightEvent.SIGNBUFF_CHANGE_LVNUM, this.onBuffLvNumChange, this),
        ImageButtonUtil.removeAll(this),
        DisplayUtil.removeForParent(this),
        this._icon = null,
        DisplayUtil.removeAllChild(this)
    },
    e
} (eui.Group);
__reflect(BuffHeadFrameView.prototype, "BuffHeadFrameView");
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
SignBuffView_1 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this);
        var e = this._fighterModel;
        if (0 != e.info.resistenceinfo.resist_state) {
            this.isShow = !0;
            var i = "";
            i += "暴击伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, e.info.resistenceinfo.cirt).present + e.info.resistenceinfo.cirt_adj) + "%",
            i += "\n固定伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, e.info.resistenceinfo.regular).present + e.info.resistenceinfo.cirt_adj) + "%",
            i += "\n百分比伤害减免：" + (ResistanceSysController.getResistanceByLevel(0, e.info.resistenceinfo.precent).present + e.info.resistenceinfo.cirt_adj) + "%";
            var n, o;
            for (n = 1; 4 > n; n++) o = PetStatusEffectConfig.getName(0, e.info.resistenceinfo["ctl_" + n + "_idx"]),
            i += "\n免疫" + o + "：" + (ResistanceSysController.getResistanceByLevel(1, e.info.resistenceinfo["ctl_" + n]).present + e.info.resistenceinfo["ctl_" + n + "_adj"] + e.info.resistenceinfo.resist_all) + "%";
            for (n = 1; 4 > n; n++) o = PetStatusEffectConfig.getName(0, e.info.resistenceinfo["weak_" + n + "_idx"]),
            i += "\n免疫" + o + "：" + (ResistanceSysController.getResistanceByLevel(1, e.info.resistenceinfo["weak_" + n]).present + e.info.resistenceinfo["weak_" + n + "_adj"] + e.info.resistenceinfo.resist_all) + "%";
            0 != e.info.resistenceinfo.resist_all && (i += "\n<font color='#ff0000'>全免抗性：" + e.info.resistenceinfo.resist_all + "%</font>"),
            this.tipsStr = i
        } else this.isShow = !1
    },
    e.prototype.addIcon = function() {
        t.prototype.addIcon.call(this)
    },
    e.prototype.update = function() {},
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_1.prototype, "SignBuffView_1");
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
SignBuffView_10 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        n.tipsArr = ["地葬秘法", "瀚海秘法", "混沌秘法", "幻境秘法", "天玄秘法", "时空秘法"],
        n.addEvent();
        var o = n.isSelf ? StartFightInfo.startInfo.myInfo: StartFightInfo.startInfo.otherInfo;
        return n.showOrHideIcon(o.secretLaw),
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this)
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._playerModel = FighterModelFactory.playerMode,
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    e.prototype.onRoundOver = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && this.showOrHideIcon(this._attackData.secretLaw)
    },
    e.prototype.showOrHideIcon = function(t) {
        t == this._index - 9 ? (this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[this._index - 10])) : this.isShow = !1
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        ToolTipManager.remove(this.icon),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_10.prototype, "SignBuffView_10");
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
SignBuffView_1000 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.update(),
        this.tipsStr = String(this.signInfo.tips)
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !0
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        this._fightPetInfo = null
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_1000.prototype, "SignBuffView_1000");
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
SignBuffView_16 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["圣念"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.tipsArr = ["圣念"],
        this.update()
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !1,
        1 == this._fightPetInfo.holyAndEvilThoughts && this.showIcon(!0)
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 31 && 1 == this._attackData.specailArr[30] ? this.showIcon(!0) : this.showIcon(!1)
    },
    e.prototype.showIcon = function(t) {
        t ? (this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0])) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_16.prototype, "SignBuffView_16");
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
SignBuffView_17 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["邪念"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.tipsArr = ["邪念"],
        this.update()
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !1,
        2 == this._fightPetInfo.holyAndEvilThoughts && this.showIcon(!0)
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 31 && 2 == this._attackData.specailArr[30] ? this.showIcon(!0) : this.showIcon(!1)
    },
    e.prototype.showIcon = function(t) {
        t ? (this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0])) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_17.prototype, "SignBuffView_17");
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
SignBuffView_18 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["裂痕"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 32 ? (this.showmonikaIconValue(this._attackData.specailArr[31]), ToolTipManager.add(this.icon, this.tipsArr[0])) : (this.showmonikaIconValue(0), ToolTipManager.remove(this.icon))
    },
    e.prototype.showmonikaIconValue = function(t) {
        this.icon && (this.lvNum = t, this.isShow = t > 0, this.icon.numTxt.text = String(t), 0 == t && (this.icon.numTxt.text = ""))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_18.prototype, "SignBuffView_18");
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
SignBuffView_19 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["圣剑"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.tipsArr = ["圣剑"],
        this.update()
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !1,
        this._fightPetInfo.yearVip2022_shengjian > 0 && this.showIcon(!0, this._fightPetInfo.yearVip2022_shengjian)
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 33 && this._attackData.specailArr[32] > 0 ? this.showIcon(!0, this._attackData.specailArr[32]) : this.showIcon(!1)
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.yearVip2022_shengjian > 0 && this.useId == e.userID && this.showIcon(!0, e.yearVip2022_shengjian)
    },
    e.prototype.showIcon = function(t, e) {
        void 0 === e && (e = 0),
        t ? (this.lvNum = e, this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0]), this.icon.numTxt.text = String(e)) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_19.prototype, "SignBuffView_19");
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
SignBuffView_2 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addChild(this.icon),
        ToolTipManager.add(this.icon, "精灵护盾"),
        this.isShow = !1,
        this.icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this.icon.numTxt.text = "0",
        this._delataNumTxt = BitmapFontController.getFont("hp_damage_num_small"),
        this.icon.addChild(this._delataNumTxt),
        this._delataNumTxt.visible = !1
    },
    e.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid),
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        void 0 != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel = FighterModelFactory.playerMode,
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this.onRoundStart()
    },
    e.prototype.onRoundStart = function(t) {
        if (void 0 === t && (t = null), null == this._attackData) return void(this.isShow = !1);
        if (this._attackData.specailArr.length < 7) return void(this.isShow = !1);
        for (var e = !1,
        i = 0; 4 > i; i++) if (0 != this._attackData.specailArr[6 + i]) {
            e = !0;
            break
        }
        e ? this.isShow = !0 : this.isShow = !1,
        this._shieldNum = this._attackData.specailArr[6],
        this.icon.numTxt.text = this._attackData.specailArr[6]
    },
    e.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && (this._attackData.specailArr.length < 7 || (this.shieldNum = this._attackData.specailArr[7]))
    },
    e.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && (this._attackData.specailArr.length < 7 || (this.shieldNum = this._attackData.specailArr[8]))
    },
    e.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attackData && !(this._attackData.specailArr.length < 7)) {
            egret.setTimeout(function() {
                null != e._attackData && (e.shieldNum = e._attackData.specailArr[9])
            },
            this, 300)
        }
    },
    Object.defineProperty(e.prototype, "shieldNum", {
        set: function(t) {
            if (null != this.icon) {
                var e = t - this._shieldNum;
                this.playDeltaNum(e),
                this._shieldNum = t,
                this.icon.numTxt.text = "" + t,
                0 == t && (this.icon.numTxt.text = ""),
                this.lvNum = t
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.playDeltaNum = function(t) {
        var e = this;
        0 != t && (this.delataNumTxt.text = t + "", t > 0 && (this.delataNumTxt.text = "+ " + t), this._delataNumTxt.y = -20, this.delataNumTxt.alpha = 1, this.delataNumTxt.visible = !0, null != this.delataNumTxt && (egret.Tween.removeTweens(this.delataNumTxt), egret.Tween.get(this.$doAddChild).to({
            alpha: 0,
            y: -110
        },
        1e3).call(function() {
            e.delataNumTxt.visible = !1
        })))
    },
    Object.defineProperty(e.prototype, "delataNumTxt", {
        get: function() {
            return this._delataNumTxt
        },
        set: function(t) {
            this._delataNumTxt = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.destroy = function() {
        ToolTipManager.remove(this.icon),
        null != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        null != this._playerModel && this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        null != this._fighterModel && this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        null != this.icon && this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        t.prototype.destroy.call(this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_2.prototype, "SignBuffView_2");
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
SignBuffView_20 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["处决印记"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.tipsArr = ["处决印记"],
        this.update()
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !1,
        this._fightPetInfo.yearVip2022_chujue > 1 && this.showIcon(!0, this._fightPetInfo.yearVip2022_chujue)
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 34 && this._attackData.specailArr[33] > 0 ? this.showIcon(!0, this._attackData.specailArr[33]) : this.showIcon(!1)
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.yearVip2022_chujue > 0 && this.useId == e.userID && this.showIcon(!0, e.yearVip2022_chujue)
    },
    e.prototype.showIcon = function(t, e) {
        void 0 === e && (e = 0),
        t ? (this.lvNum = e, this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0]), this.icon.numTxt.text = String(e)) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_20.prototype, "SignBuffView_20");
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
SignBuffView_21 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["堕恶神祇"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.update()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 35 && this._attackData.specailArr[34] > 0 ? this.showIcon(!0, this._attackData.specailArr[34]) : this.showIcon(!1)
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.laborDay2022_yinji > 0 && this.useId == e.userID && this.showIcon(!0, e.laborDay2022_yinji)
    },
    e.prototype.showIcon = function(t, e) {
        void 0 === e && (e = 0),
        t ? (this.lvNum = e, this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0]), this.icon.numTxt.text = String(e)) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_21.prototype, "SignBuffView_21");
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
SignBuffView_22 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["堕恶神祇"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.update()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 36 && this._attackData.specailArr[35] > 0 ? this.showIcon(!0, this._attackData.specailArr[35]) : this.showIcon(!1)
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.suliShiXinMiZhen > 0 && this.useId == e.userID && this.showIcon(!0, e.suliShiXinMiZhen)
    },
    e.prototype.showIcon = function(t, e) {
        void 0 === e && (e = 0),
        t ? (this.lvNum = e, this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0]), this.icon.numTxt.text = "") : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_22.prototype, "SignBuffView_22");
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
SignBuffView_23 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["凄骨之印"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.update()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 37 && this._attackData.specailArr[36] > 0 ? this.showIcon(!0, this._attackData.specailArr[36]) : this.showIcon(!1)
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.muling_buff > 0 && this.useId == e.userID && this.showIcon(!0, e.muling_buff)
    },
    e.prototype.showIcon = function(t, e) {
        void 0 === e && (e = 0),
        t ? (this.lvNum = e, this.isShow = !0, ToolTipManager.add(this.icon, this.tipsArr[0]), this.icon.numTxt.text = "" + e) : (this.isShow = !1, ToolTipManager.remove(this.icon))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_23.prototype, "SignBuffView_23");
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
SignBuffView_3 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        ToolTipManager.add(this.icon, "精灵护罩"),
        this.icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this.icon.numTxt.text = "0",
        this._delataNumTxt = BitmapFontController.getFont("hp_damage_num_small"),
        this.icon.addChild(this._delataNumTxt),
        this._delataNumTxt.visible = !1
    },
    e.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        this._playerModel = FighterModelFactory.playerMode,
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this.onRoundStart()
    },
    e.prototype.onRoundStart = function(t) {
        if (void 0 === t && (t = null), null == this._attackData) return void(this.isShow = !1);
        if (this._attackData.specailArr.length < 16) return void(this.isShow = !1);
        for (var e = !1,
        i = 0; 4 > i; i++) if (0 != this._attackData.specailArr[15 + i]) {
            e = !0;
            break
        }
        e ? this.isShow = !0 : this.isShow = !1,
        this._shieldNum = this._attackData.specailArr[15],
        this.icon.numTxt.text = this._attackData.specailArr[15]
    },
    e.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && (this._attackData.specailArr.length < 16 || (this.shieldNum = this._attackData.specailArr[16]))
    },
    e.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && (this._attackData.specailArr.length < 16 || (this.shieldNum = this._attackData.specailArr[17]))
    },
    e.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attackData && !(this._attackData.specailArr.length < 16)) {
            egret.setTimeout(function() {
                null != e._attackData && (e.shieldNum = e._attackData.specailArr[18])
            },
            this, 300)
        }
    },
    Object.defineProperty(e.prototype, "shieldNum", {
        set: function(t) {
            if (null != this.icon) {
                var e = t - this._shieldNum;
                this.playDeltaNum(e),
                this._shieldNum = t,
                this.lvNum = t,
                this.icon.numTxt.text = t,
                0 == t && (this.icon.numTxt.text = "")
            }
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.playDeltaNum = function(t) {
        var e = this;
        0 != t && (this.delataNumTxt.text = t + "", t > 0 && (this.delataNumTxt.text = "+ " + t), this._delataNumTxt.y = -20, this.delataNumTxt.alpha = 1, this.delataNumTxt.visible = !0, null != this.delataNumTxt && (egret.Tween.removeTweens(this.delataNumTxt), egret.Tween.get(this.delataNumTxt).to({
            alpha: 0,
            y: -110
        },
        1e3).call(function() {
            e.delataNumTxt.visible = !1
        })))
    },
    Object.defineProperty(e.prototype, "delataNumTxt", {
        get: function() {
            return this._delataNumTxt
        },
        set: function(t) {
            this._delataNumTxt = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.destroy = function() {
        ToolTipManager.remove(this.icon),
        null != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        null != this._playerModel && this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        null != this._fighterModel && this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        null != this.icon && this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        t.prototype.destroy.call(this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_3.prototype, "SignBuffView_3");
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
SignBuffView_4 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tiparr = null,
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.update(),
        this.addEvent()
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        2987 == t.info.petID ? (this.isShow = !0, this.showEnyge(0)) : this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this._attackData.specailArr.length >= 6 && this.showEnyge(this._attackData.specailArr[5])
    },
    e.prototype.showEnyge = function(t) {
        var e = ["无能量", "减少自身受到伤害的8%，每增加1层额外获得8%的减伤", "免疫所有异常状态、免疫所有能力下降状态", "每回合恢复1/3最大HP", "每回合结束后，本回合自身受到的固定伤害转移到对手身上", "所有攻击先制额外+1", "自身所有攻击技能威力提升60%；且第五技能威力提升不再消耗自身神耀能量；赛尔对战中击败对手后自身神耀能量清零且下回合先制额外+3，非赛尔对战4回合后自身神耀能量清零且下回合先制额外+3"];
        this.icon && this.isShow && (this.icon.numTxt.text = String(t), ToolTipManager.remove(this.icon), ToolTipManager.add(this.icon, e[t]), this.lvNum = t, 0 == t && (this.icon.numTxt.text = ""))
    },
    e.prototype.addIcon = function() {
        t.prototype.addIcon.call(this)
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_4.prototype, "SignBuffView_4");
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
SignBuffView_5 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addChild(this.icon),
        this.icon.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        this.icon.numTxt.text = "0",
        ToolTipManager.add(this.icon, "狂暴状态：伤害提升0%")
    },
    e.prototype.onEnterFrame = function(t) {
        null != FighterModelFactory.enemyMode && null != FighterModelFactory.playerMode && (this.addEvent(), this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this))
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this.onRoundStart()
    },
    e.prototype.onRoundStart = function(t) {
        return void 0 === t && (t = null),
        ToolTipManager.remove(this.icon),
        null == this._attackData ? void(this.isShow = !1) : this._attackData.specailArr[12] <= 0 ? void(this.isShow = !1) : (this.isShow = !0, this._violentNum = this._attackData.specailArr[12], this.icon.numTxt.text = String(this._violentNum), this.lvNum = this._violentNum, void ToolTipManager.add(this.icon, "狂暴状态：伤害提升" + 10 * this._violentNum + "%"))
    },
    e.prototype.destroy = function() {
        null != this.icon && this.icon.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this),
        ToolTipManager.remove(this.icon),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        t.prototype.destroy.call(this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_5.prototype, "SignBuffView_5");
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
SignBuffView_6 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this._attackData.specailArr.length >= 28 ? this.showhuoDeErIconValue(this._attackData.specailArr[27]) : this.showhuoDeErIconValue(0)
    },
    e.prototype.showhuoDeErIconValue = function(t) {
        this.icon && (this.lvNum = t, this.isShow = t > 0, this.icon.numTxt.text = String(t), 0 == t && (this.icon.numTxt.text = ""))
    },
    e.prototype.addIcon = function() {
        t.prototype.addIcon.call(this)
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_6.prototype, "SignBuffView_6");
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
SignBuffView_7 = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this._attackData.specailArr.length >= 20 ? this.showmonikaIconValue(this._attackData.specailArr[19]) : this.showmonikaIconValue(0)
    },
    e.prototype.showmonikaIconValue = function(t) {
        this.icon && (this.lvNum = t, this.isShow = t > 0, this.icon.numTxt.text = String(t), 0 == t && (this.icon.numTxt.text = ""))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_7.prototype, "SignBuffView_7");
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
SignBuffView_8 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["首回合结束时受到自身最大体力1/8的真实伤害，boss无效", "首回合结束时受到自身最大体力1/6的真实伤害，boss无效", "首回合结束时受到自身最大体力1/4的真实伤害，boss无效"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 29 ? (this.showmonikaIconValue(this._attackData.specailArr[28]), ToolTipManager.add(this.icon, this.tipsArr[this._attackData.specailArr[28] - 1])) : (this.showmonikaIconValue(0), ToolTipManager.remove(this.icon))
    },
    e.prototype.showmonikaIconValue = function(t) {
        this.icon && (this.lvNum = t, this.isShow = t > 0, this.isShow ? this.icon.numTxt.text = String(t) : this.icon.numTxt.text = "")
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_8.prototype, "SignBuffView_8");
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
SignBuffView_9 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.tipsArr = ["蓄力"],
        n
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent()
    },
    e.prototype.update = function() {
        this._fighterModel;
        this.isShow = !1
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        if (null != t) {
            var e = t.dataObj;
            e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo
        } else if (null == this._attackData) return;
        this._attackData.specailArr.length >= 30 ? (this.showmonikaIconValue(this._attackData.specailArr[29]), ToolTipManager.add(this.icon, this.tipsArr[0])) : (this.showmonikaIconValue(0), ToolTipManager.remove(this.icon))
    },
    e.prototype.showmonikaIconValue = function(t) {
        this.icon && (this.lvNum = t, this.isShow = t > 0, this.icon.numTxt.text = String(t), 0 == t && (this.icon.numTxt.text = ""))
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView_9.prototype, "SignBuffView_9");
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
SignBuffView = function(t) {
    function e(e, i) {
        return t.call(this, e, i) || this
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        t.prototype.initView.call(this),
        this.addEvent(),
        this.update(),
        "" != this.signInfo.sptips && void 0 != this.signInfo.sptips && (this.tipsStr = String(this.signInfo.tips))
    },
    e.prototype.update = function() {
        var t = this._fighterModel;
        this._fightPetInfo = t.info,
        this.isShow = !1,
        this.setSignIcon(this._fightPetInfo.fightSigns)
    },
    e.prototype.addEvent = function() {
        EventManager.addEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.addEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this),
        this._fighterModel = FighterModelFactory.getFighterMode(this._uid),
        this._fighterModel.addEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._otherFighterModel = this._uid == MainManager.actorID ? FighterModelFactory.enemyMode: FighterModelFactory.playerMode,
        this._otherFighterUseSkillCon = this._otherFighterModel.skillCon,
        void 0 != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.addEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        this._playerModel = FighterModelFactory.playerMode,
        this._playerModel.addEventListener(PlayerModel.StartNextRound, this.onRoundOver, this)
    },
    e.prototype.onUseSkillAtck = function(t) {
        var e = t.dataObj;
        e.firstAttackInfo.userID == this._uid ? this._attackData = e.firstAttackInfo: this._attackData = e.secondAttackInfo,
        this.onRoundStart()
    },
    e.prototype.onRoundStart = function() {
        null != this._attackData && (void 0 == this.signInfo.showtime || 1 == this.signInfo.showtime) && this.setSignIcon(this._attackData.fightSigns)
    },
    e.prototype.onAttackOver = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && 2 == this.signInfo.showtime && this.setSignIcon(this._attackData.fightSigns)
    },
    e.prototype.onBeAttacked = function(t) {
        void 0 === t && (t = null),
        null != this._attackData && 3 == this.signInfo.showtime && this.setSignIcon(this._attackData.fightSigns)
    },
    e.prototype.onRoundOver = function(t) {
        var e = this;
        if (void 0 === t && (t = null), null != this._attackData) {
            egret.setTimeout(function() {
                null != e._attackData && (2 == e.signInfo.showtime || 3 == e.signInfo.showtime || 4 == e.signInfo.showtime) && e.setSignIcon(e._attackData.fightSigns)
            },
            this, 300)
        }
    },
    e.prototype.onchangePet = function(t) {
        var e = t.dataObj;
        e.userID == this.useId && (this._fightPetInfo.petID = e.petID, this.setSignIcon(e.fightSigns))
    },
    e.prototype.setSignIcon = function(t) {
        var e = t.getKeys(); - 1 != e.indexOf(String(this._index)) ? (this.fightSignInfo = t.getValue(this._index), this.showIcon(!0)) : this.signInfo.showmonster == this._fightPetInfo.petID ? this.showIcon(!0) : this.showIcon(!1)
    },
    e.prototype.showIcon = function(t) {
        if (this.fightSignInfo && (95 == this.index || 103 == this.index ? this.lvNum = this.fightSignInfo.spValue: this.lvNum = this.fightSignInfo.lvNum), t) {
            if (this.isShow = !0, 28 == this.index) this.tipsStr = SkillXMLInfo.getName(this.fightSignInfo.spValue);
            else {
                var e = SignIconXmlInfo.getSptipsByidAndLvNum(this.index, this.lvNum);
                this.tipsStr = null != e ? e: String(this.signInfo.tips)
            }
            ToolTipManager.add(this.icon, this.tipsStr),
            this.icon.numTxt.visible = this.signInfo.isShowNum > 0 ? !0 : !1,
            this.icon.numTxt.text = String(this.lvNum)
        } else this.isShow = !1,
        ToolTipManager.remove(this.icon)
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        this._fightPetInfo = null,
        null != this._otherFighterUseSkillCon && this._otherFighterUseSkillCon.removeEventListener(UseSkillController.MOVIE_OVER, this.onBeAttacked, this),
        null != this._playerModel && this._playerModel.removeEventListener(PlayerModel.StartNextRound, this.onRoundOver, this),
        null != this._fighterModel && this._fighterModel.removeEventListener(BaseFighterModel.ATTACK_OVER, this.onAttackOver, this),
        this._fighterModel = null,
        this._playerModel = null,
        this._otherFighterModel = null,
        this._otherFighterUseSkillCon = null,
        EventManager.removeEventListener(PetFightEvent.USE_SKILL_SUC_ATTACK, this.onUseSkillAtck, this),
        EventManager.removeEventListener(PetFightEvent.CHANGE_PET_NOTE, this.onchangePet, this)
    },
    e
} (BaseBufferIconView);
__reflect(SignBuffView.prototype, "SignBuffView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
EnemyPetEffectView = function() {
    function t() {}
    return t.setup = function(t) {
        this.p = t
    },
    t.config = function(t) {
        3 == this._oldStatus && 3 == t,
        this._oldStatus = t
    },
    t.removeAll = function() {},
    t.higherFight = function() {},
    t.destroyHigherFight = function() {
        this._eidArr = null,
        this._effectName = null
    },
    t._oldStatus = 0,
    t
} ();
__reflect(EnemyPetEffectView.prototype, "EnemyPetEffectView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PlayerPetEffectView = function() {
    function t() {}
    return t.showCrisisAndPriority = function(t) {
        var e = this;
        if (t.isCrit && (null == this._critMc && (this._critMc = DragonbonesUtil.createAnimate("baoji_ske_json", "baoji_tex_json", "baoji_tex_png", "baoji")), DragonbonesUtil.play(this._critMc, "baojiframe", 1).then(function() {
            e._critMc && e._critMc.parent && e._critMc.parent.removeChild(e._critMc),
            e._critMc = null
        }), PetFightController.mvContainer.addChild(this._critMc), t.userID == MainManager.actorID ? (this._critMc.x = 336, this._critMc.y = 537, this._critMc.scaleX = 1) : (this._critMc.x = 783, this._critMc.y = 537, this._critMc.scaleX = -1), this.shake.start(PetFightController.mainPanel, 700 / TimeScaleManager.GameSpeed, 0, 3, Math.PI / 40)), t.priority > 0 && !t.issecondFight) {
            var i = new eui.Image(RES.getRes("priority_png"));
            t.userID == MainManager.actorID ? this.showMovie(98, 144, i) : this.showMovie(680, 144, i)
        }
    },
    t.showBuffMovie = function(t, e) {
        var i = 105,
        n = 145,
        o = new eui.Image;
        if (e.type == PetStatusEffectType.TRAIT) t.battle_lv > 0 ? o.source = RES.getRes("buff_1_1_png") : t.battle_lv < 0 && (o.source = RES.getRes("buff_1_0_png"));
        else if (e.type == PetStatusEffectType.ABNORMAL && KTool.getBit(t.change_bitset, e.id + 1) > 0) switch (e.id) {
        case 21:
            o.source = RES.getRes("buff_0_21_png")
        }
        if (i = t.userID == FighterModelFactory.playerMode.info.userID ? 105 : 705, 21 == e.id, o && !t.issecondFight && this.showMovie(i, n, o), t.userID == MainManager.actorID) if (19 == e.id && t.userID == MainManager.actorID) FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!1);
        else {
            if (t.specailArr.length >= 27 && 0 != t.specailArr[26] && t.userID == MainManager.actorID) return void FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!1);
            FighterModelFactory.playerMode.toolBtnObserver.disablePetBtn(!0)
        }
    },
    t.showMovie = function(t, e, i) {
        i.x = t,
        i.y = e + 20,
        i.visible = !1,
        this.mcArr.push(i),
        PetFightController.mvContainer.addChild(i),
        this.playEff(t, e)
    },
    t.playEff = function(t, e) {
        if (0 != this.mcArr.length) {
            var i = this.mcArr[0];
            i.alpha = .5,
            i.visible = !0,
            egret.Tween.get(i).to({
                alpha: 1,
                y: e
            },
            1800 / TimeScaleManager.GameSpeed).call(this.oncomplete1, this, [t, e, i])
        }
    },
    t.oncomplete1 = function(t, e, i) {
        egret.Tween.get(i).to({
            alpha: 0,
            y: e - 20
        },
        1800 / TimeScaleManager.GameSpeed).call(this.onComplete, this, [t, e, i])
    },
    t.onComplete = function(t, e, i) {
        this.mcArr.splice(0, 1),
        i.parent && i.parent.removeChild(i),
        i = null,
        this.mcArr.length > 0 && this.playEff(t, e)
    },
    t.shake = new BasicQuake,
    t.mcArr = [],
    t
} ();
__reflect(PlayerPetEffectView.prototype, "PlayerPetEffectView");
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
PetFightMsgManager = function() {
    function t() {}
    return t.setup = function(t, e) {
        this.battleMsg = t,
        this.currRound = 0,
        this.btnReport = e;
        var i = +egret.localStorage.getItem("fight_report_position");
        2 == i ? (this.battleMsg.y = 280, this.initBtnReport()) : this.btnReport.visible = !1
    },
    t.initBtnReport = function() {
        var t = this;
        this.reportContent = +egret.localStorage.getItem("fight_report_content") || 1,
        this.btnReport.currentState = "down",
        ImageButtonUtil.add(this.btnReport,
        function() {
            console.log("this.btnReport.currentState :" + t.btnReport.currentState),
            "down" == t.btnReport.currentState ? (t.btnReport.currentState = "up", EventManager.dispatchEventWith("show_battle_msg", !1, {
                isShow: !0
            }), egret.Tween.get(t.btnReport).to({
                alpha: 1,
                y: t.targetY[t.reportContent]
            },
            200)) : (EventManager.dispatchEventWith("show_battle_msg", !1, {
                isShow: !1
            }), egret.Tween.get(t.btnReport).to({
                alpha: .2,
                y: 460
            },
            200).call(function() {
                t.btnReport.currentState = "down",
                t.btnReport.alpha = 1
            }))
        },
        this)
    },
    t.showFirstRoundMsg = function() {
        var e = StartFightInfo.startInfo.infoArray;
        if (NoteReadyToFightInfo.beChallenged) {
            for (var i = 0,
            n = e; i < n.length; i++) {
                var o = n[i];
                o._userID != MainManager.actorInfo.userID && t.showPetStartBattle(o._petName, !1)
            }
            for (var r = 0,
            s = e; r < s.length; r++) {
                var o = s[r];
                o._userID == MainManager.actorInfo.userID && t.showPetStartBattle(o._petName, !0)
            }
        } else {
            for (var a = 0,
            h = e; a < h.length; a++) {
                var o = h[a];
                o._userID == MainManager.actorInfo.userID && t.showPetStartBattle(o._petName, !0)
            }
            for (var l = 0,
            c = e; l < c.length; l++) {
                var o = c[l];
                o._userID != MainManager.actorInfo.userID && t.showPetStartBattle(o._petName, !1)
            }
        }
        t.showStartNewRound(1)
    },
    t.showTipText = function(t) {
        var e = '<font color="#fff256" > ' + t + " < /font>";
        this.addText(e)
    },
    t.showZhuijiTxt = function(t, e, i) {
        void 0 === i && (i = "");
        var n = "",
        o = MainManager.actorInfo.userID == t.userID,
        r = ZhuijiXmlInfo.getPetName(t.zhuijiId, e, i),
        s = ZhuijiXmlInfo.getSkillName(t.zhuijiId, e),
        a = ZhuijiXmlInfo.getReportTxt(t.zhuijiId, e);
        n = o ? this.getMyPetColorStr(r) : this.getEnemyPetColorStr(r),
        n += this.getSkillStr(s, !1);
        var h = +egret.localStorage.getItem("fight_report_content");
        "" != a && 2 == h && (n += "\n", n += o ? this.getMyPetColorStr(r) : this.getEnemyPetColorStr(r), n += '<font color="#ffffff">' + a + "</font>"),
        this.addText(n)
    },
    t.showStartNewRound = function(t) {
        if (this.currRound != t) {
            EventManager.dispatchEventWith("new_round"),
            this.currRound = t;
            var e = "" + t;
            10 > t ? e = "00" + t: 100 > t && (e = "0" + t);
            var i = "第" + e + "回";
            this.battleMsg.addRound(i)
        }
    },
    t.showPetStartBattle = function(t, e) {
        var i;
        i = e ? this.getMyPetColorStr(t) + '<font color="#ffffff">上场了</font>': this.getEnemyPetColorStr(t) + '<font color="#ffffff">上场了</font>',
        this.addText(i)
    },
    t.showPetDead = function(t, e) {
        var i;
        i = e ? this.getMyPetColorStr(t) : this.getEnemyPetColorStr(t),
        i += '<font color="#ffffff">被击败了</font>',
        this.addText(i)
    },
    t.showPetUseItem = function(t, e) {
        var i, n = t.info.userID == MainManager.actorInfo.userID;
        i = n ? this.getMyPetColorStr(t.info.petName) : this.getEnemyPetColorStr(t.info.petName);
        var o = ItemXMLInfo.getName(e.itemID);
        i += this.getUseItemStr(o),
        this.addText(i),
        this.isUseItemArr[n ? 0 : 1] = !0
    },
    t.addText = function(t) {
        this.battleMsg.addText(t)
    },
    t.getUseItemStr = function(t) {
        return '<font color="#ffffff">使用了</font><font color="#fff256">[' + t + "]</font>"
    },
    t.getMyPetColorStr = function(t) {
        return '<font color="#40afff">&lt;' + t + "&gt;</font>"
    },
    t.getEnemyPetColorStr = function(t) {
        return '<font color="#ff2121">&lt;' + t + "&gt;</font>"
    },
    t.getSkillStr = function(t, e) {
        return void 0 === e && (e = !1),
        e ? '<font color="#ffffff">使用了</font><font color="#fff256">[无限复制]</font><font color="#ffffff">使用了对手的技能</font><font color="#fff256">[' + t + "]</font>": '<font color="#ffffff">使用了</font><font color="#fff256">[' + t + "]</font>"
    },
    t.getCritCritColorStr = function() {
        return '<font color="#ffffff">打出了致命一击</font>'
    },
    t.showSkillText = function(t, e) {
        void 0 === e && (e = !1);
        var i = MainManager.actorInfo.userID == t.userID,
        n = FighterModelFactory.playerMode.info.petName,
        o = FighterModelFactory.enemyMode.info.petName,
        r = "";
        if (0 != t.skillID) {
            var s = FighterModelFactory.getFighterMode(t.userID),
            a = SkillXMLInfo.getName(t.skillID, s.info.skinId);
            r = i ? this.getMyPetColorStr(n) : this.getEnemyPetColorStr(o);
            var h = PetFightController.attackInfoList;
            t.skillID == h[0].skillID && 22050 == t.skillID && 0 != h[1].skillID ? (a = SkillXMLInfo.getName(h[1].skillID), r += this.getSkillStr(a, !0)) : t.skillID == h[1].skillID && 22050 == t.skillID && 0 != h[0].skillID ? (a = SkillXMLInfo.getName(h[0].skillID), r += this.getSkillStr(a, !0)) : r += this.getSkillStr(a, !1),
            t.isCrit && (r += this.getCritCritColorStr());
            var l = +egret.localStorage.getItem("fight_report_content");
            if (2 == l) {
                var c = SkillXMLInfo.getInfo(t.skillID);
                "" != c && 0 == SkillXMLInfo.getDamage(t.skillID) && (r += "\n", r += 2 == SkillXMLInfo.getGpFtSkillType(t.skillID) ? i ? this.getEnemyPetColorStr(o) : this.getMyPetColorStr(n) : i ? this.getMyPetColorStr(n) : this.getEnemyPetColorStr(o), r += c)
            }
        } else {
            var _ = i ? this.isUseItemArr[0] : this.isUseItemArr[1];
            _ || e || (r = i ? this.getMyPetColorStr(n) : this.getEnemyPetColorStr(o), r += '<font color="#ffffff">未使用技能</font>'),
            this.isUseItemArr[i ? 0 : 1] = !1
        }
        var u = FighterModelFactory.getFighterMode(t.userID);
        u.propView.removeAllEffect();
        var p = 0,
        f = !1,
        d = "";
        PetStatusEffectController.removeAllEffect(t.userID);
        for (var g = 0,
        m = t.status; g < m.length; g++) {
            var y = m[g];
            if (0 != y) {
                d += PetStatusEffectConfig.getName(0, p),
                f = !0;
                var v = new egret.ByteArray;
                v.writeUnsignedInt(0),
                v.writeUnsignedInt(p),
                v.writeUnsignedInt(y),
                v.position = 0;
                var I = new PetStatusEffectInfo(v);
                PetStatusEffectController.addEffect(t.userID, I),
                PlayerPetEffectView.showBuffMovie(t, I)
            }
            p++
        }
        for (var w = 0,
        M = t.sideEffects; w < M.length; w++) {
            var P = M[w];
            PetStatusEffectController.addEffect(t.userID, P)
        }
        t.sideEffects.length > 0 && PlayerPetEffectView.showBuffMovie(t, t.sideEffects[0]),
        this.battleMsg.addText(r)
    },
    t.destroy = function() {
        this.battleMsg.destroy(),
        this.battleMsg = null,
        ImageButtonUtil.removeAll(this)
    },
    t.targetY = [460, 267, 215],
    t.currRound = 0,
    t.isUseItemArr = [!1, !1],
    t
} ();
__reflect(PetFightMsgManager.prototype, "PetFightMsgManager");
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
BattleFieldIntroPop = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = BattleFieldIntroPopSkin,
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this._list.itemRenderer = BattleFieldIntroItem,
        ImageButtonUtil.add(this.btnClose, this.hide, this),
        this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectItem, this),
        SocketConnection.addCmdListener(CommandID.NOTE_USE_SKILL, this.hide, this)
    },
    e.prototype.setData = function(e) {
        t.prototype.setData.call(this, e),
        e && 1 == e.type ? (this._type = 1, this._id = e.id, this._rounds = e.rounds) : e && 2 == e.type && (this._type = 2, this._imprintInfo = e.data)
    },
    e.prototype._upDateView = function() {
        1 == this._type ? (this.title.source = "battle_field_intro_pop_title_1_png", this._list.dataProvider = new eui.ArrayCollection([{
            id: this._id,
            layers: this._rounds
        }])) : 2 == this._type && (this.title.source = "battle_field_intro_pop_title_2_png", this._list.dataProvider = new eui.ArrayCollection(this._imprintInfo)),
        this._list.selectedIndex = 0,
        this.onSelectItem()
    },
    e.prototype.onSelectItem = function(t) {
        if (1 == this._type) var e = FieldEffectXMLInfo.getBuffXml(this._id);
        else if (2 == this._type) var e = FieldEffectXMLInfo.getBuffXml(this._imprintInfo[this._list.selectedIndex].id);
        this.icon.source = ClientConfig.getFieldIcon(e.ID),
        this.txt_name.text = e.Name,
        this.txt_desc.text = e.Desc
    },
    e.prototype.destroy = function() {
        t.prototype.destroy.call(this),
        ImageButtonUtil.removeAll(this),
        this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectItem, this),
        SocketConnection.removeCmdListener(CommandID.NOTE_USE_SKILL, this.hide, this)
    },
    e
} (PopView);
__reflect(BattleFieldIntroPop.prototype, "BattleFieldIntroPop");
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
PlayerPropView = function(t) {
    function e(e) {
        return t.call(this, e) || this
    }
    return __extends(e, t),
    e.prototype.addIcon = function(t) {
        var e = 160 + (t.width + 4) * this.effectIcons.length,
        i = 96,
        n = this._propView.localToGlobal(e, i),
        o = this._propView.parent.globalToLocal(n.x, n.y);
        t.x = o.x,
        t.y = o.y,
        this._propView.parent.addChild(t)
    },
    e
} (BaseFighterPropView);
__reflect(PlayerPropView.prototype, "PlayerPropView");
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
generateEUI.paths["resource/eui_skins/component/BattleFieldEffectSkin.exml"] = window.BattleFieldEffectSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["neturalFieldIcon", "txt_neturalRounds", "neutralField", "myFieldIcon", "txt_myRounds", "myField", "enemyFieldIcon", "txt_enemyRounds", "enemyField"],
        this.height = 93,
        this.width = 301,
        this.elementsContent = [this.neutralField_i(), this.myField_i(), this.enemyField_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.neutralField_i = function() {
        var t = new eui.Group;
        return this.neutralField = t,
        t.x = 83,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.neturalFieldIcon_i(), this.txt_neturalRounds_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 86,
        t.source = "battle_field_effect_midBg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i.neturalFieldIcon_i = function() {
        var t = new eui.Image;
        return this.neturalFieldIcon = t,
        t.height = 34,
        t.horizontalCenter = 0,
        t.verticalCenter = -3,
        t.width = 34,
        t
    },
    i.txt_neturalRounds_i = function() {
        var t = new eui.Label;
        return this.txt_neturalRounds = t,
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "25",
        t.textColor = 13823999,
        t.y = 56,
        t
    },
    i.myField_i = function() {
        var t = new eui.Group;
        return this.myField = t,
        t.x = 0,
        t.y = 15,
        t.elementsContent = [this._Image2_i(), this.myFieldIcon_i(), this.txt_myRounds_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 78,
        t.source = "battle_field_effect_leftBg_png",
        t.width = 126,
        t.x = 0,
        t.y = 0,
        t
    },
    i.myFieldIcon_i = function() {
        var t = new eui.Image;
        return this.myFieldIcon = t,
        t.height = 34,
        t.horizontalCenter = -6,
        t.verticalCenter = 2,
        t.width = 34,
        t
    },
    i.txt_myRounds_i = function() {
        var t = new eui.Label;
        return this.txt_myRounds = t,
        t.horizontalCenter = -6,
        t.size = 16,
        t.text = "25",
        t.textColor = 13823999,
        t.y = 55,
        t
    },
    i.enemyField_i = function() {
        var t = new eui.Group;
        return this.enemyField = t,
        t.x = 175,
        t.y = 15,
        t.elementsContent = [this._Image3_i(), this.enemyFieldIcon_i(), this.txt_enemyRounds_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 78,
        t.source = "battle_field_effect_rightBg_png",
        t.width = 126,
        t.x = 0,
        t.y = 0,
        t
    },
    i.enemyFieldIcon_i = function() {
        var t = new eui.Image;
        return this.enemyFieldIcon = t,
        t.height = 34,
        t.horizontalCenter = 6,
        t.verticalCenter = 2,
        t.width = 34,
        t
    },
    i.txt_enemyRounds_i = function() {
        var t = new eui.Label;
        return this.txt_enemyRounds = t,
        t.horizontalCenter = 6,
        t.size = 16,
        t.text = "25",
        t.textColor = 13823999,
        t.y = 55,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleFieldIntroItemSkin.exml"] = window.BattleFieldIntroItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "num", "img_select"],
        this.height = 56,
        this.width = 56,
        this.elementsContent = [this.icon_i(), this.num_i(), this.img_select_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 34,
        t.width = 34,
        t.x = 11,
        t.y = 11,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "MFShangHei",
        t.right = 11,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1715303,
        t.text = "1",
        t.textColor = 16777215,
        t.y = 28,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.height = 56,
        t.source = "battle_field_intro_pop_img_select_png",
        t.width = 56,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleFieldIntroPopSkin.exml"] = window.BattleFieldIntroPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "txt_desc", "icon", "_list", "_scr", "txt_name"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this.txt_desc_i(), this.icon_i(), this._scr_i(), this.txt_name_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "battle_field_intro_pop_title_2_png",
        t.x = 31,
        t.y = -4,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 439,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 243,
        t.source = "common_s9_pop_leftbg_png",
        t.width = 88,
        t.x = 2,
        t.y = 34,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 7,
        t.size = 18,
        t.text = "场",
        t.textColor = 13820671,
        t.width = 342,
        t.x = 108,
        t.y = 110,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 34,
        t.width = 34,
        t.x = 109,
        t.y = 54,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 236,
        t.width = 56,
        t.x = 17,
        t.y = 35,
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
        return t.gap = -2,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "场地效果场地效果",
        t.textColor = 4173823,
        t.x = 164,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleItemTipSkin.exml"] = window.BattleItemTipSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txtMsg", "txtName"],
        this.height = 148,
        this.width = 320,
        this.elementsContent = [this.bg_i(), this.icon_i(), this.txtMsg_i(), this.txtName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.scale9Grid = new egret.Rectangle(5, 3, 31, 24),
        t.source = "battle_tip_bg_png",
        t.width = 320,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.visible = !1,
        t.x = 15,
        t.y = 19,
        t
    },
    i.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.multiline = !0,
        t.size = 16,
        t.text = "说明",
        t.textColor = 16777215,
        t.width = 209,
        t.x = 14,
        t.y = 45,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.size = 16,
        t.text = "药剂名称名称",
        t.textColor = 16773477,
        t.x = 14,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleMsgItemSkin.exml"] = window.BattleMsgItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_round"],
        this.height = 21,
        this.width = 404,
        this.elementsContent = [this._Image1_i(), this.txt_round_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.horizontalCenter = -8,
        t.source = "battle_msg_item_bg_png",
        t.width = 404,
        t.y = 0,
        t
    },
    i.txt_round_i = function() {
        var t = new eui.Label;
        return this.txt_round = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -8,
        t.size = 18,
        t.text = "第000回",
        t.textColor = 8301035,
        t.y = 2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleMsgSkin.exml"] = window.BattleMsgSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["msg_bg", "grp_list", "_scroller", "imgCountdownLine", "grpMsg", "btnBattleMsg"],
        this.height = 232,
        this.width = 418,
        this.elementsContent = [this.grpMsg_i(), this.btnBattleMsg_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpMsg_i = function() {
        var t = new eui.Group;
        return this.grpMsg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 232,
        t.horizontalCenter = 0,
        t.width = 418,
        t.elementsContent = [this.msg_bg_i(), this._scroller_i(), this.imgCountdownLine_i()],
        t
    },
    i.msg_bg_i = function() {
        var t = new eui.Image;
        return this.msg_bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(139, 77, 140, 78),
        t.source = "battle_msg_msg_bg_png",
        t.top = 0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.bottom = 18,
        t.left = 8,
        t.right = 6,
        t.top = 39,
        t.viewport = this.grp_list_i(),
        t
    },
    i.grp_list_i = function() {
        var t = new eui.Group;
        return this.grp_list = t,
        t.height = 174,
        t.width = 387,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 5,
        t.horizontalAlign = "justify",
        t
    },
    i.imgCountdownLine_i = function() {
        var t = new eui.Image;
        return this.imgCountdownLine = t,
        t.bottom = 0,
        t.left = 4,
        t.right = 4,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fight_msg_countdown_imgblueline_png",
        t.visible = !1,
        t
    },
    i.btnBattleMsg_i = function() {
        var t = new eui.Image;
        return this.btnBattleMsg = t,
        t.source = "battle_msg_battle_msg_btnup_png",
        t.visible = !1,
        t.x = 5,
        t.y = 159,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattlePetSkin.exml"] = window.BattlePetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet_item_bg", "head_bg", "head", "txtPetHp", "imgSelected", "failed", "chujue1", "chujue2", "txtchujueRound", "imprintIcon", "txtPetLv", "txtPetName", "imge_battle_pet_head_restraint_bg_0", "restraint_tx_0", "imge_battle_pet_head_restraint_bg_1", "restraint_tx_1", "battle_pet_head_restraint", "lock", "pet_type_icon", "elemet", "blood", "grpContent", "imge_item_mask"],
        this.height = 114,
        this.width = 185,
        this.elementsContent = [this.grpContent_i(), this.imge_item_mask_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.percentHeight = 100,
            t.scale9Grid = new egret.Rectangle(1, 1, 4, 4),
            t.source = "battle_blood_bg_png",
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.percentHeight = 100,
            t.source = "battle_blood_png",
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.visible = !0,
        t.x = -7,
        t.y = -37,
        t.elementsContent = [this._Group1_i(), this.blood_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.pet_item_bg_i(), this.head_bg_i(), this.head_i(), this.txtPetHp_i(), this._Label1_i(), this.imgSelected_i(), this.failed_i(), this.chujue1_i(), this.chujue2_i(), this.txtchujueRound_i(), this.imprintIcon_i(), this.txtPetLv_i(), this.txtPetName_i(), this.battle_pet_head_restraint_i(), this.lock_i(), this.elemet_i()],
        t
    },
    n.pet_item_bg_i = function() {
        var t = new eui.Image;
        return this.pet_item_bg = t,
        t.source = "battle_pet_item_bg_png",
        t.visible = !0,
        t.x = 8,
        t.y = 38,
        t
    },
    n.head_bg_i = function() {
        var t = new eui.Image;
        return this.head_bg = t,
        t.source = "battle_head_bg_png",
        t.visible = !0,
        t.x = 12,
        t.y = 40.22,
        t
    },
    n.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 80,
        t.source = "",
        t.width = 80,
        t.x = 12.43,
        t.y = 40,
        t
    },
    n.txtPetHp_i = function() {
        var t = new eui.Label;
        return this.txtPetHp = t,
        t.fontFamily = "MFShangHei",
        t.size = 13,
        t.text = "1000/1000",
        t.textColor = 16777215,
        t.width = 75,
        t.x = 94,
        t.y = 91,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 13,
        t.text = "属性:",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.visible = !1,
        t.width = 34,
        t.x = 98,
        t.y = 70,
        t
    },
    n.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "battle_selected_png",
        t.visible = !1,
        t.x = 1.78,
        t.y = 0,
        t
    },
    n.failed_i = function() {
        var t = new eui.Image;
        return this.failed = t,
        t.source = "battle_failed_png",
        t.visible = !1,
        t.x = 0,
        t.y = 30,
        t
    },
    n.chujue1_i = function() {
        var t = new eui.Image;
        return this.chujue1 = t,
        t.source = "battle_chujue_1_png",
        t.visible = !0,
        t.x = 157.67,
        t.y = 118.33,
        t
    },
    n.chujue2_i = function() {
        var t = new eui.Image;
        return this.chujue2 = t,
        t.height = 24,
        t.source = "battle_chujue_2_png",
        t.visible = !0,
        t.width = 24,
        t.x = 157.67,
        t.y = 118.33,
        t
    },
    n.txtchujueRound_i = function() {
        var t = new eui.Label;
        return this.txtchujueRound = t,
        t.fontFamily = "MFShangHei",
        t.size = 13,
        t.text = "3",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 15,
        t.x = 166.67,
        t.y = 126.33,
        t
    },
    n.imprintIcon_i = function() {
        var t = new eui.Image;
        return this.imprintIcon = t,
        t.source = "battle_imprint_icon_1_png",
        t.visible = !0,
        t.x = 126,
        t.y = 116,
        t
    },
    n.txtPetLv_i = function() {
        var t = new eui.Label;
        return this.txtPetLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.width = 60,
        t.x = 15.33,
        t.y = 104.04,
        t
    },
    n.txtPetName_i = function() {
        var t = new eui.Label;
        return this.txtPetName = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "精灵名字好",
        t.textColor = 16777215,
        t.width = 76.741,
        t.x = 14,
        t.y = 124.18,
        t
    },
    n.battle_pet_head_restraint_i = function() {
        var t = new eui.Group;
        return this.battle_pet_head_restraint = t,
        t.visible = !0,
        t.x = 94,
        t.y = 42,
        t.elementsContent = [this.imge_battle_pet_head_restraint_bg_0_i(), this.restraint_tx_0_i(), this.imge_battle_pet_head_restraint_bg_1_i(), this.restraint_tx_1_i()],
        t
    },
    n.imge_battle_pet_head_restraint_bg_0_i = function() {
        var t = new eui.Image;
        return this.imge_battle_pet_head_restraint_bg_0 = t,
        t.source = "battle_imge_battle_pet_head_restraint_bg_0_png",
        t.width = 95,
        t.x = 0,
        t.y = 0,
        t
    },
    n.restraint_tx_0_i = function() {
        var t = new eui.Label;
        return this.restraint_tx_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "微弱0.750》",
        t.textColor = 8631282,
        t.x = 3,
        t.y = 4.22,
        t
    },
    n.imge_battle_pet_head_restraint_bg_1_i = function() {
        var t = new eui.Image;
        return this.imge_battle_pet_head_restraint_bg_1 = t,
        t.source = "battle_imge_battle_pet_head_restraint_bg_0_png",
        t.width = 95,
        t.x = 0,
        t.y = 23,
        t
    },
    n.restraint_tx_1_i = function() {
        var t = new eui.Label;
        return this.restraint_tx_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "《微弱0.750",
        t.textAlign = "left",
        t.textColor = 8631282,
        t.x = 3,
        t.y = 27.22,
        t
    },
    n.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "battle_lock_png",
        t.visible = !0,
        t.x = 98.03,
        t.y = 117,
        t
    },
    n.elemet_i = function() {
        var t = new eui.Group;
        return this.elemet = t,
        t.x = 57.28,
        t.y = 40.86,
        t.elementsContent = [this._Image1_i(), this.pet_type_icon_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "battle_type_icon_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.pet_type_icon_i = function() {
        var t = new eui.Image;
        return this.pet_type_icon = t,
        t.height = 23,
        t.source = "battle_type_icon_png",
        t.width = 22,
        t.x = 12,
        t.y = 0,
        t
    },
    n.blood_i = function() {
        var t = new eui.ProgressBar;
        return this.blood = t,
        t.maximum = 1e3,
        t.minimum = 0,
        t.value = 400,
        t.width = 89,
        t.x = 94,
        t.y = 105,
        t.skinName = i,
        t
    },
    n.imge_item_mask_i = function() {
        var t = new eui.Image;
        return this.imge_item_mask = t,
        t.height = 108,
        t.source = "battle_imge_currency_mask_png",
        t.visible = !1,
        t.width = 182,
        t.x = 1.465,
        t.y = .984,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleSignBuffInfoItemSkin.exml"] = window.BattleSignBuffInfoItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_buff_Icon_bg", "img_select", "icon", "gr_buff_Icon"],
        this.height = 68,
        this.width = 68,
        this.elementsContent = [this.imge_buff_Icon_bg_i(), this.img_select_i(), this.gr_buff_Icon_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imge_buff_Icon_bg_i = function() {
        var t = new eui.Image;
        return this.imge_buff_Icon_bg = t,
        t.source = "battle_sign_buff_info_pop_imge_buff_icon_bg_png",
        t.x = 9,
        t.y = 10,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.source = "battle_sign_buff_info_pop_selected_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.gr_buff_Icon_i = function() {
        var t = new eui.Group;
        return this.gr_buff_Icon = t,
        t.height = 49,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 49,
        t.elementsContent = [this.icon_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "battle_sign_buff_info_pop_icon_png",
        t.visible = !1,
        t.x = 7,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleSignBuffInfoPopSkin.exml"] = window.BattleSignBuffInfoPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rect_bg", "imge_buffdes_bg", "tx_buffdes", "tx_scroller", "imge_list_bg", "imge_track", "imge_slider", "_list", "_scr", "tx_buffName", "tx_num_title", "tx_lvNum", "btnClose", "title", "imge_buff_Icon_bg", "icon", "gr_buff_Icon", "gr_lsignInfoView"],
        this.currentState = "left",
        this.height = 360,
        this.width = 528,
        this.elementsContent = [this.rect_bg_i(), this.gr_lsignInfoView_i()],
        this.states = [new eui.State("left", [new eui.SetProperty("rect_bg", "width", 528), new eui.SetProperty("rect_bg", "height", 360)]), new eui.State("right", [new eui.SetProperty("rect_bg", "x", 0), new eui.SetProperty("rect_bg", "width", 528), new eui.SetProperty("rect_bg", "height", 360), new eui.SetProperty("gr_lsignInfoView", "x", 74)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.rect_bg_i = function() {
        var t = new eui.Rect;
        return this.rect_bg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fillAlpha = 0,
        t.height = 398,
        t.width = 598,
        t.x = 0,
        t.y = 0,
        t
    },
    i.gr_lsignInfoView_i = function() {
        var t = new eui.Group;
        return this.gr_lsignInfoView = t,
        t.anchorOffsetY = 0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.imge_buffdes_bg_i(), this.tx_scroller_i(), this.imge_list_bg_i(), this.imge_track_i(), this.imge_slider_i(), this._scr_i(), this.tx_buffName_i(), this.tx_num_title_i(), this.tx_lvNum_i(), this.btnClose_i(), this.title_i(), this._Group2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 302,
        t.source = "title_pop_2022_img_482X286_bg_png",
        t.width = 454,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_buffdes_bg_i = function() {
        var t = new eui.Image;
        return this.imge_buffdes_bg = t,
        t.source = "battle_sign_buff_info_pop_imge_buffdes_bg_png",
        t.x = 98,
        t.y = 115,
        t
    },
    i.tx_scroller_i = function() {
        var t = new eui.Scroller;
        return this.tx_scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 156.98,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.visible = !0,
        t.width = 319.5,
        t.x = 106,
        t.y = 124,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.elementsContent = [this.tx_buffdes_i()],
        t
    },
    i.tx_buffdes_i = function() {
        var t = new eui.Label;
        return this.tx_buffdes = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 5,
        t.scrollV = 1,
        t.size = 16,
        t.text = "文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述",
        t.textAlign = "left",
        t.textColor = 6388143,
        t.width = 320.5,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_list_bg_i = function() {
        var t = new eui.Image;
        return this.imge_list_bg = t,
        t.anchorOffsetY = 0,
        t.height = 257.5,
        t.source = "battle_sign_buff_info_pop_imge_list_bg_png",
        t.x = 0,
        t.y = 36.5,
        t
    },
    i.imge_track_i = function() {
        var t = new eui.Image;
        return this.imge_track = t,
        t.source = "battle_sign_buff_info_pop_imge_track_png",
        t.visible = !1,
        t.x = 76,
        t.y = 39,
        t
    },
    i.imge_slider_i = function() {
        var t = new eui.Image;
        return this.imge_slider = t,
        t.source = "battle_sign_buff_info_pop_imge_slider_png",
        t.visible = !1,
        t.x = 76,
        t.y = 45,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.anchorOffsetX = 0,
        t.height = 236,
        t.scrollPolicyH = "off",
        t.width = 61,
        t.x = 7.65,
        t.y = 50,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.anchorOffsetX = 0,
        t.width = 60,
        t.x = -1.33,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -2,
        t
    },
    i.tx_buffName_i = function() {
        var t = new eui.Label;
        return this.tx_buffName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20.1164632585813,
        t.text = "标记名称",
        t.textColor = 16765477,
        t.x = 158,
        t.y = 54,
        t
    },
    i.tx_num_title_i = function() {
        var t = new eui.Label;
        return this.tx_num_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9461873741677,
        t.text = "当前剩余层数:",
        t.textColor = 12834813,
        t.x = 159,
        t.y = 84,
        t
    },
    i.tx_lvNum_i = function() {
        var t = new eui.Label;
        return this.tx_lvNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9461873741677,
        t.text = "5",
        t.textColor = 4187130,
        t.x = 270,
        t.y = 84,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_pop_btn_close_png",
        t.x = 416,
        t.y = 3,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "battle_sign_buff_info_pop_title_png",
        t.x = 43,
        t.y = 3.5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 49,
        t.width = 47,
        t.x = 98,
        t.y = 50,
        t.elementsContent = [this.imge_buff_Icon_bg_i(), this.gr_buff_Icon_i()],
        t
    },
    i.imge_buff_Icon_bg_i = function() {
        var t = new eui.Image;
        return this.imge_buff_Icon_bg = t,
        t.source = "battle_sign_buff_info_pop_imge_buff_icon_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.gr_buff_Icon_i = function() {
        var t = new eui.Group;
        return this.gr_buff_Icon = t,
        t.height = 49,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 49,
        t.elementsContent = [this.icon_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "battle_sign_buff_info_pop_icon_png",
        t.visible = !1,
        t.x = 7,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/BattleSkillTipSkin.exml"] = window.BattleSkillTipSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtMsg"],
        this.height = 160,
        this.width = 320,
        this.elementsContent = [this.bg_i(), this.txtMsg_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 160,
        t.scale9Grid = new egret.Rectangle(5, 3, 31, 24),
        t.source = "battle_tip_bg_png",
        t.width = 320,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.horizontalCenter = 0,
        t.multiline = !0,
        t.size = 18,
        t.text = "说明",
        t.textColor = 3143013,
        t.width = 300,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/ClockSkin.exml"] = window.ClockSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["clockBg", "txtClock", "waitpng"],
        this.height = 173,
        this.width = 234,
        this.elementsContent = [this.clockBg_i(), this.txtClock_i(), this.waitpng_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.clockBg_i = function() {
        var t = new eui.Image;
        return this.clockBg = t,
        t.source = "battle_clock_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtClock_i = function() {
        var t = new eui.BitmapLabel;
        return this.txtClock = t,
        t.font = "battle_clock_num_fnt",
        t.horizontalCenter = 0,
        t.letterSpacing = -110,
        t.text = "10",
        t.y = 0,
        t
    },
    i.waitpng_i = function() {
        var t = new eui.Image;
        return this.waitpng = t,
        t.horizontalCenter = -1,
        t.source = "battle_wait_png",
        t.visible = !1,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/ControllBtnsSkin.exml"] = window.ControllBtnsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnPet", "btnPet_mask", "btnEscape", "btnEscape_mask", "btnBag", "btnBag_mask", "btnShowBtn", "btnShowBtn_mask", "group_btns"],
        this.height = 298,
        this.width = 310,
        this.elementsContent = [this.group_btns_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_btns_i = function() {
        var t = new eui.Group;
        return this.group_btns = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 288,
        t.visible = !0,
        t.width = 309,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.btnPet_i(), this.btnPet_mask_i(), this.btnEscape_i(), this.btnEscape_mask_i(), this.btnBag_i(), this.btnBag_mask_i(), this.btnShowBtn_i(), this.btnShowBtn_mask_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.anchorOffsetX = 0,
        t.source = "battle_btnBg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.name = "btnPet",
        t.right = 3,
        t.source = "battle_btnPet_png",
        t.visible = !0,
        t.y = 149,
        t
    },
    i.btnPet_mask_i = function() {
        var t = new eui.Image;
        return this.btnPet_mask = t,
        t.scaleX = 2,
        t.scaleY = 2,
        t.source = "battle_image_btn_mask_1_png",
        t.visible = !1,
        t.x = 155,
        t.y = 145.5,
        t
    },
    i.btnEscape_i = function() {
        var t = new eui.Image;
        return this.btnEscape = t,
        t.source = "battle_btnRetreat_png",
        t.x = 161,
        t.y = 63,
        t
    },
    i.btnEscape_mask_i = function() {
        var t = new eui.Image;
        return this.btnEscape_mask = t,
        t.height = 84,
        t.source = "battle_image_btn_mask_1_png",
        t.visible = !1,
        t.width = 84,
        t.x = 163,
        t.y = 61,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "battle_btnBag0_png",
        t.x = 106,
        t.y = 118,
        t
    },
    i.btnBag_mask_i = function() {
        var t = new eui.Image;
        return this.btnBag_mask = t,
        t.height = 84,
        t.source = "battle_image_btn_mask_1_png",
        t.visible = !1,
        t.width = 84,
        t.x = 108,
        t.y = 116,
        t
    },
    i.btnShowBtn_i = function() {
        var t = new eui.Image;
        return this.btnShowBtn = t,
        t.source = "battle_btnPetback_png",
        t.visible = !0,
        t.x = 161,
        t.y = 63,
        t
    },
    i.btnShowBtn_mask_i = function() {
        var t = new eui.Image;
        return this.btnShowBtn_mask = t,
        t.height = 84,
        t.source = "battle_image_btn_mask_1_png",
        t.visible = !1,
        t.width = 84,
        t.x = 217,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/EffectMcSkin.exml"] = window.EffectMcSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "bg", "msg_txt", "tips"],
        this.width = 182,
        this.elementsContent = [this.icon_i(), this.tips_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.bottom = 16,
        t.left = 2,
        t
    },
    i.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 57,
        t.visible = !0,
        t.width = 178,
        t.x = 0,
        t.y = 3,
        t.elementsContent = [this.bg_i(), this.msg_txt_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 60,
        t.scale9Grid = new egret.Rectangle(5, 3, 31, 24),
        t.source = "battle_tip_bg_png",
        t.width = 163,
        t.x = 5,
        t.y = 5,
        t
    },
    i.msg_txt_i = function() {
        var t = new eui.Label;
        return this.msg_txt = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 8,
        t.size = 16,
        t.text = "Label",
        t.width = 143,
        t.x = 15,
        t.y = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/FightItemBarSkin.exml"] = window.FightItemBarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller"],
        this.height = 150,
        this.width = 750,
        this.elementsContent = [this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.anchorOffsetX = 0,
        t.height = 150,
        t.width = 750,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 150,
        t.width = 750,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 150,
        t.width = 750,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/FightLoadingPetItemSkin.exml"] = window.FightLoadingPetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "head", "txtName", "txtLv", "shoufa", "chuzhan"],
        this.height = 101,
        this.width = 82,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this.head_i(), this.txtName_i(), this.txtLv_i(), this.shoufa_i(), this.chuzhan_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 101,
        t.source = "common_pet_head_bg_size_110_134_png",
        t.visible = !0,
        t.width = 82,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 101,
        t.source = "common_pet_head_bg_null_size_110_134_png",
        t.width = 82,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_pet_head_name_bg_110_134_png",
        t.width = 82,
        t.x = 0,
        t.y = 80,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 80,
        t.width = 80,
        t.x = 1,
        t.y = 1,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 1,
        t.size = 14,
        t.text = "精灵名字",
        t.textColor = 16777215,
        t.y = 83,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 14.4,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 1,
        t.y = 2,
        t
    },
    i.shoufa_i = function() {
        var t = new eui.Image;
        return this.shoufa = t,
        t.height = 17,
        t.source = "fight_loading_pet_item_shoufa_png",
        t.width = 40,
        t.x = 41,
        t.y = 64,
        t
    },
    i.chuzhan_i = function() {
        var t = new eui.Image;
        return this.chuzhan = t,
        t.height = 17,
        t.source = "fight_loading_pet_item_chuzhan_png",
        t.width = 40,
        t.x = 41,
        t.y = 64,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/LeftInfoSkin.exml"] = window.LeftInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["lvbg", "self_info_bg", "head", "headFrame", "h1_down", "h1_up", "h2_down", "h2_up", "pet_type_icon", "grpBar", "ability_icons", "imprintIcon", "buff_1", "buff_2", "txtLv", "txtHP1", "txtHP2", "txtPetName", "effect", "icon"],
        this.currentState = "normal",
        this.height = 194,
        this.width = 460,
        this.elementsContent = [this.grpBar_i(), this.ability_icons_i(), this.imprintIcon_i(), this.buff_1_i(), this.buff_2_i(), this.txtLv_i(), this.txtHP1_i(), this.txtPetName_i(), this.effect_i(), this.icon_i()],
        this.h2_down_i(),
        this.h2_up_i(),
        this._HorizontalLayout3_i(),
        this._HorizontalLayout5_i(),
        this.txtHP2_i(),
        this.states = [new eui.State("normal", [new eui.SetProperty("h1_down", "y", 26), new eui.SetProperty("h1_up", "y", 26), new eui.SetProperty("buff_1", "y", 47), new eui.SetProperty("txtHP1", "y", 22), new eui.SetProperty("txtHP2", "y", 24)]), new eui.State("vip1", [new eui.SetProperty("lvbg", "source", "battle_lvbg_2_png"), new eui.SetProperty("self_info_bg", "source", "battle_self_info_bg2_png"), new eui.SetProperty("self_info_bg", "x", 0), new eui.SetProperty("head", "x", 8), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("h1_down", "y", 26), new eui.SetProperty("h1_up", "y", 26), new eui.SetProperty("h2_down", "source", "battle_self_hp3_down_png"), new eui.SetProperty("h2_up", "source", "battle_self_hp3_up_png"), new eui.SetProperty("h2_up", "x", 116), new eui.SetProperty("buff_1", "y", 47), new eui.SetProperty("txtLv", "stroke", 1), new eui.SetProperty("txtHP1", "y", 23.45), new eui.SetProperty("txtHP2", "y", 24), new eui.SetProperty("", "width", 460)]), new eui.State("vip2", [new eui.AddItems("h2_down", "grpBar", 2, "pet_type_icon"), new eui.AddItems("h2_up", "grpBar", 2, "pet_type_icon"), new eui.AddItems("txtHP2", "", 2, "txtPetName"), new eui.SetProperty("lvbg", "source", "battle_lvbg_3_png"), new eui.SetProperty("lvbg", "y", -2), new eui.SetProperty("lvbg", "x", 107), new eui.SetProperty("self_info_bg", "source", "battle_self_info_bg3_png"), new eui.SetProperty("self_info_bg", "x", 0), new eui.SetProperty("head", "x", 8), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("h2_down", "y", 36), new eui.SetProperty("h2_down", "x", 116), new eui.SetProperty("h2_down", "source", "battle_self_hp2_down_png"), new eui.SetProperty("h2_up", "y", 36), new eui.SetProperty("h2_up", "x", 116), new eui.SetProperty("h2_up", "source", "battle_self_hp2_up_png"), new eui.SetProperty("pet_type_icon", "y", -4), new eui.SetProperty("imprintIcon", "y", 66), new eui.SetProperty("buff_1", "layout", this._HorizontalLayout3), new eui.SetProperty("buff_1", "top", 52), new eui.SetProperty("buff_2", "layout", this._HorizontalLayout5), new eui.SetProperty("txtHP2", "x", 193), new eui.SetProperty("txtHP2", "y", 34), new eui.SetProperty("txtHP2", "size", 13), new eui.SetProperty("txtPetName", "y", 1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpBar_i = function() {
        var t = new eui.Group;
        return this.grpBar = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.lvbg_i(), this.self_info_bg_i(), this.head_i(), this.headFrame_i(), this.h1_down_i(), this.h1_up_i(), this.pet_type_icon_i()],
        t
    },
    i.lvbg_i = function() {
        var t = new eui.Image;
        return this.lvbg = t,
        t.source = "battle_lvbg_1_png",
        t.x = 111,
        t.y = 1,
        t
    },
    i.self_info_bg_i = function() {
        var t = new eui.Image;
        return this.self_info_bg = t,
        t.source = "battle_self_info_bg1_png",
        t.x = 3,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 106,
        t.source = "",
        t.width = 106,
        t.x = 6,
        t.y = 3,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Group;
        return this.headFrame = t,
        t.height = 119,
        t.width = 119,
        t.x = -3,
        t.y = -3,
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_sp_head_kuang_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.h1_down_i = function() {
        var t = new eui.Image;
        return this.h1_down = t,
        t.source = "battle_self_hp1_down_png",
        t.x = 115,
        t.y = 21,
        t
    },
    i.h1_up_i = function() {
        var t = new eui.Image;
        return this.h1_up = t,
        t.source = "battle_self_hp1_up_png",
        t.visible = !0,
        t.x = 115,
        t.y = 21,
        t
    },
    i.h2_down_i = function() {
        var t = new eui.Image;
        return this.h2_down = t,
        t.source = "battle_self_hp4_down_png",
        t.visible = !0,
        t.x = 114,
        t.y = 26,
        t
    },
    i.h2_up_i = function() {
        var t = new eui.Image;
        return this.h2_up = t,
        t.source = "battle_self_hp4_up_png",
        t.visible = !0,
        t.x = 114,
        t.y = 26,
        t
    },
    i.pet_type_icon_i = function() {
        var t = new eui.Image;
        return this.pet_type_icon = t,
        t.height = 26,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "",
        t.visible = !0,
        t.width = 26,
        t.x = 194,
        t.y = 0,
        t
    },
    i.ability_icons_i = function() {
        var t = new eui.Group;
        return this.ability_icons = t,
        t.x = 4,
        t.y = 121,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imprintIcon_i = function() {
        var t = new eui.Image;
        return this.imprintIcon = t,
        t.height = 35,
        t.source = "battle_imprint_icon_png",
        t.width = 35,
        t.x = 117,
        t.y = 42,
        t
    },
    i.buff_1_i = function() {
        var t = new eui.Group;
        return this.buff_1 = t,
        t.left = 125,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 2,
        t
    },
    i.buff_2_i = function() {
        var t = new eui.Group;
        return this.buff_2 = t,
        t.x = 125,
        t.y = 76,
        t.layout = this._HorizontalLayout4_i(),
        t
    },
    i._HorizontalLayout4_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 2,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.stroke = 1,
        t.text = "LV.100",
        t.textColor = 16777215,
        t.x = 121,
        t.y = 3,
        t
    },
    i.txtHP1_i = function() {
        var t = new eui.Label;
        return this.txtHP1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "200/300",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 200,
        t.x = 211,
        t.y = 19,
        t
    },
    i.txtHP2_i = function() {
        var t = new eui.Label;
        return this.txtHP2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "200/300",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 200,
        t.x = 211,
        t.y = 25,
        t
    },
    i.txtPetName_i = function() {
        var t = new eui.Label;
        return this.txtPetName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称名称名称",
        t.textColor = 16777215,
        t.x = 227,
        t.y = 3,
        t
    },
    i.effect_i = function() {
        var t = new EffectmcPanelui;
        return this.effect = t,
        t.x = 2,
        t.y = 66,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.bottom = 87,
        t.left = 6,
        t.visible = !1,
        t
    },
    i._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return this._HorizontalLayout3 = t,
        t.gap = 10,
        t
    },
    i._HorizontalLayout5_i = function() {
        var t = new eui.HorizontalLayout;
        return this._HorizontalLayout5 = t,
        t.gap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/PetItemSkin.exml"] = window.PetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_icon", "txtNum", "imgSelected", "imge_currency_mask"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this._Image1_i(), this.item_icon_i(), this.txtNum_i(), this.imgSelected_i(), this.imge_currency_mask_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_1_png",
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_icon_i = function() {
        var t = new eui.Image;
        return this.item_icon = t,
        t.height = 55,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 55,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 50,
        t.y = 57,
        t
    },
    i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "battle_selected_item_png",
        t.visible = !1,
        t.x = -10,
        t.y = -38.104,
        t
    },
    i.imge_currency_mask_i = function() {
        var t = new eui.Image;
        return this.imge_currency_mask = t,
        t.height = 80,
        t.name = "currency_mask",
        t.source = "battle_imge_currency_mask_png",
        t.visible = !1,
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/RightInfoSkin.exml"] = window.RightInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["lvbg", "self_info_bg", "head", "headFrame", "h1_down", "h1_up", "h2_down", "h2_up", "pet_type_icon", "grpBar", "ability_icons", "imprintIcon", "buff_1", "buff_2", "txtLv", "txtHP1", "txtHP2", "txtPetName", "icon", "effect"],
        this.currentState = "normal",
        this.height = 194,
        this.width = 460,
        this.elementsContent = [this.grpBar_i(), this.ability_icons_i(), this.imprintIcon_i(), this.buff_1_i(), this.buff_2_i(), this.txtLv_i(), this.txtHP1_i(), this.txtPetName_i(), this.icon_i(), this.effect_i()],
        this.h2_down_i(),
        this.h2_up_i(),
        this.txtHP2_i(),
        this.states = [new eui.State("normal", [new eui.SetProperty("h1_down", "y", 26), new eui.SetProperty("h1_down", "x", 114), new eui.SetProperty("h1_up", "y", 26), new eui.SetProperty("h1_up", "x", 114), new eui.SetProperty("buff_1", "y", 47), new eui.SetProperty("txtHP1", "y", 24)]), new eui.State("vip1", [new eui.SetProperty("lvbg", "source", "battle_lvbg_2_png"), new eui.SetProperty("self_info_bg", "source", "battle_self_info_bg2_png"), new eui.SetProperty("self_info_bg", "x", 0), new eui.SetProperty("head", "x", 8), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("h1_up", "y", 26), new eui.SetProperty("h2_down", "source", "battle_self_hp3_down_png"), new eui.SetProperty("h2_up", "source", "battle_self_hp3_up_png"), new eui.SetProperty("h2_up", "x", 116), new eui.SetProperty("buff_1", "y", 47), new eui.SetProperty("txtLv", "stroke", 1), new eui.SetProperty("", "width", 460)]), new eui.State("vip2", [new eui.AddItems("h2_down", "grpBar", 2, "pet_type_icon"), new eui.AddItems("h2_up", "grpBar", 2, "pet_type_icon"), new eui.AddItems("txtHP2", "", 2, "txtPetName"), new eui.SetProperty("lvbg", "source", "battle_lvbg_3_png"), new eui.SetProperty("lvbg", "x", 109), new eui.SetProperty("lvbg", "y", -2), new eui.SetProperty("self_info_bg", "source", "battle_self_info_bg3_png"), new eui.SetProperty("self_info_bg", "x", 0), new eui.SetProperty("head", "x", 8), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("h2_down", "y", 36), new eui.SetProperty("h2_down", "x", 116), new eui.SetProperty("h2_down", "source", "battle_self_hp2_down_png"), new eui.SetProperty("h2_up", "y", 36), new eui.SetProperty("h2_up", "x", 116), new eui.SetProperty("h2_up", "source", "battle_self_hp2_up_png"), new eui.SetProperty("pet_type_icon", "y", -4), new eui.SetProperty("imprintIcon", "y", 66), new eui.SetProperty("imprintIcon", "x", 322), new eui.SetProperty("buff_1", "x", 125), new eui.SetProperty("buff_1", "top", 52), new eui.SetProperty("txtHP1", "x", 39), new eui.SetProperty("txtHP1", "y", 19), new eui.SetProperty("txtPetName", "y", 1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpBar_i = function() {
        var t = new eui.Group;
        return this.grpBar = t,
        t.right = 0,
        t.scaleX = -1,
        t.y = 0,
        t.elementsContent = [this.lvbg_i(), this.self_info_bg_i(), this.head_i(), this.headFrame_i(), this.h1_down_i(), this.h1_up_i(), this.pet_type_icon_i()],
        t
    },
    i.lvbg_i = function() {
        var t = new eui.Image;
        return this.lvbg = t,
        t.source = "battle_lvbg_1_png",
        t.x = 111,
        t.y = 1,
        t
    },
    i.self_info_bg_i = function() {
        var t = new eui.Image;
        return this.self_info_bg = t,
        t.source = "battle_self_info_bg1_png",
        t.x = 3,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 106,
        t.source = "",
        t.width = 106,
        t.x = 6,
        t.y = 3,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Group;
        return this.headFrame = t,
        t.height = 119,
        t.width = 119,
        t.x = -3,
        t.y = -3,
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_sp_head_kuang_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.h1_down_i = function() {
        var t = new eui.Image;
        return this.h1_down = t,
        t.source = "battle_self_hp1_down_png",
        t.visible = !0,
        t.x = 116,
        t.y = 21,
        t
    },
    i.h1_up_i = function() {
        var t = new eui.Image;
        return this.h1_up = t,
        t.source = "battle_self_hp1_up_png",
        t.visible = !0,
        t.x = 116,
        t.y = 21,
        t
    },
    i.h2_down_i = function() {
        var t = new eui.Image;
        return this.h2_down = t,
        t.source = "battle_self_hp4_down_png",
        t.visible = !0,
        t.x = 114,
        t.y = 26,
        t
    },
    i.h2_up_i = function() {
        var t = new eui.Image;
        return this.h2_up = t,
        t.source = "battle_self_hp4_up_png",
        t.visible = !0,
        t.x = 114,
        t.y = 26,
        t
    },
    i.pet_type_icon_i = function() {
        var t = new eui.Image;
        return this.pet_type_icon = t,
        t.height = 26,
        t.scaleX = -1,
        t.scaleY = 1,
        t.source = "",
        t.width = 26,
        t.x = 221,
        t.y = 0,
        t
    },
    i.ability_icons_i = function() {
        var t = new eui.Group;
        return this.ability_icons = t,
        t.right = 6,
        t.y = 121,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imprintIcon_i = function() {
        var t = new eui.Image;
        return this.imprintIcon = t,
        t.height = 35,
        t.source = "battle_imprint_icon_png",
        t.width = 35,
        t.x = 308,
        t.y = 42,
        t
    },
    i.buff_1_i = function() {
        var t = new eui.Group;
        return this.buff_1 = t,
        t.right = 125,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 2,
        t
    },
    i.buff_2_i = function() {
        var t = new eui.Group;
        return this.buff_2 = t,
        t.right = 125,
        t.skewY = 180,
        t.y = 76,
        t.layout = this._HorizontalLayout3_i(),
        t
    },
    i._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 2,
        t
    },
    i.txtLv_i = function() {
        var t = new eui.Label;
        return this.txtLv = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.stroke = 1,
        t.text = "LV.100",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 70,
        t.x = 268,
        t.y = 3,
        t
    },
    i.txtHP1_i = function() {
        var t = new eui.Label;
        return this.txtHP1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "200/300",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.width = 200,
        t.x = 33,
        t.y = 25,
        t
    },
    i.txtHP2_i = function() {
        var t = new eui.Label;
        return this.txtHP2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 13,
        t.text = "200/300",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.width = 200,
        t.x = 73,
        t.y = 35,
        t
    },
    i.txtPetName_i = function() {
        var t = new eui.Label;
        return this.txtPetName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称名称名称",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 200,
        t.x = 32,
        t.y = 3,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.bottom = 86,
        t.right = 6,
        t.visible = !1,
        t
    },
    i.effect_i = function() {
        var t = new EffectmcPanelui;
        return this.effect = t,
        t.x = 406,
        t.y = 66,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/RoundInfoSkin.exml"] = window.RoundInfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["round_bg", "group_round_bg", "imgreport_bg", "group_imgreport_bg", "txtRound2", "groupBottomRound", "reportBg", "txtRound", "btnReport", "txtLife_0", "life_head_0", "txtLife_1", "life_head_1", "imge_restraint_arrow_imge_1", "imge_restraint_words_imge_1", "restraint_tx_1", "imge_restraint_arrow_imge_0", "imge_restraint_words_imge_0", "restraint_tx_0", "restraint"],
        this.height = 126,
        this.width = 428,
        this.elementsContent = [this.group_round_bg_i(), this.group_imgreport_bg_i(), this.groupBottomRound_i(), this.btnReport_i(), this.txtLife_0_i(), this.life_head_0_i(), this.txtLife_1_i(), this.life_head_1_i(), this.restraint_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_round_bg_i = function() {
        var t = new eui.Group;
        return this.group_round_bg = t,
        t.cacheAsBitmap = !0,
        t.height = 122.667,
        t.visible = !0,
        t.width = 434.667,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.round_bg_i()],
        t
    },
    i.round_bg_i = function() {
        var t = new eui.Image;
        return this.round_bg = t,
        t.height = 91,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_round_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_imgreport_bg_i = function() {
        var t = new eui.Group;
        return this.group_imgreport_bg = t,
        t.cacheAsBitmap = !0,
        t.height = 31.333,
        t.visible = !0,
        t.width = 314.667,
        t.x = 43.327,
        t.y = 80,
        t.elementsContent = [this.imgreport_bg_i()],
        t
    },
    i.imgreport_bg_i = function() {
        var t = new eui.Image;
        return this.imgreport_bg = t,
        t.height = 31,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_msg_imgreport_bg_png",
        t.width = 311,
        t.x = 0,
        t.y = 0,
        t
    },
    i.groupBottomRound_i = function() {
        var t = new eui.Group;
        return this.groupBottomRound = t,
        t.visible = !0,
        t.x = 112.355,
        t.y = 81,
        t.elementsContent = [this._Image1_i(), this.txtRound2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "battle_msg_imgreport_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtRound2_i = function() {
        var t = new eui.Label;
        return this.txtRound2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "第00回合",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.width = 84,
        t
    },
    i.btnReport_i = function() {
        var t = new eui.Group;
        return this.btnReport = t,
        t.visible = !0,
        t.x = 111.802,
        t.y = 68,
        t.elementsContent = [this.reportBg_i(), this.txtRound_i()],
        t
    },
    i.reportBg_i = function() {
        var t = new eui.Image;
        return this.reportBg = t,
        t.height = 54,
        t.source = "battle_btnReport1_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "第00回合",
        t.textColor = 16777215,
        t.x = 40,
        t.y = 17,
        t
    },
    i.txtLife_0_i = function() {
        var t = new eui.Label;
        return this.txtLife_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "03",
        t.textAlign = "right",
        t.textColor = 8453887,
        t.width = 24,
        t.x = 63.316,
        t.y = 88,
        t
    },
    i.life_head_0_i = function() {
        var t = new eui.Image;
        return this.life_head_0 = t,
        t.height = 26,
        t.source = "battle_life_head_0_png",
        t.visible = !0,
        t.width = 21,
        t.x = 89.332,
        t.y = 82,
        t
    },
    i.txtLife_1_i = function() {
        var t = new eui.Label;
        return this.txtLife_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "03",
        t.textAlign = "left",
        t.textColor = 8453887,
        t.visible = !0,
        t.width = 24,
        t.x = 310.547,
        t.y = 88,
        t
    },
    i.life_head_1_i = function() {
        var t = new eui.Image;
        return this.life_head_1 = t,
        t.height = 26,
        t.source = "battle_life_head_0_png",
        t.width = 21,
        t.x = 288.071,
        t.y = 82,
        t
    },
    i.restraint_i = function() {
        var t = new eui.Group;
        return this.restraint = t,
        t.height = 53,
        t.width = 211.688,
        t.x = 91,
        t.y = 26,
        t.elementsContent = [this.imge_restraint_arrow_imge_1_i(), this.imge_restraint_words_imge_1_i(), this.restraint_tx_1_i(), this.imge_restraint_arrow_imge_0_i(), this.imge_restraint_words_imge_0_i(), this.restraint_tx_0_i()],
        t
    },
    i.imge_restraint_arrow_imge_1_i = function() {
        var t = new eui.Image;
        return this.imge_restraint_arrow_imge_1 = t,
        t.name = "Image_arrow_1",
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_imge_restraint_arrow_imge_2_png",
        t.x = 75,
        t.y = 3,
        t
    },
    i.imge_restraint_words_imge_1_i = function() {
        var t = new eui.Image;
        return this.imge_restraint_words_imge_1 = t,
        t.name = "Image_words_1",
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_imge_restraint_words_imge_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.restraint_tx_1_i = function() {
        var t = new eui.Label;
        return this.restraint_tx_1 = t,
        t.fontFamily = "MFShangHei",
        t.name = "tx_1",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 211095,
        t.text = "2.62502",
        t.textAlign = "center",
        t.textColor = 126437,
        t.visible = !1,
        t.width = 70,
        t.x = 39.347,
        t.y = 35.999999999999986,
        t
    },
    i.imge_restraint_arrow_imge_0_i = function() {
        var t = new eui.Image;
        return this.imge_restraint_arrow_imge_0 = t,
        t.anchorOffsetX = 18.293,
        t.anchorOffsetY = 15.753,
        t.name = "Image_arrow_0",
        t.scaleX = 1,
        t.scaleY = 1,
        t.skewY = 180,
        t.source = "battle_imge_restraint_arrow_imge_2_png",
        t.x = 132.49,
        t.y = 17.383,
        t
    },
    i.imge_restraint_words_imge_0_i = function() {
        var t = new eui.Image;
        return this.imge_restraint_words_imge_0 = t,
        t.name = "Image_words_0",
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_imge_restraint_words_imge_2_png",
        t.visible = !0,
        t.x = 152,
        t.y = 0,
        t
    },
    i.restraint_tx_0_i = function() {
        var t = new eui.Label;
        return this.restraint_tx_0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = .508,
        t.fontFamily = "MFShangHei",
        t.name = "tx_0",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 211095,
        t.text = "1.25001",
        t.textAlign = "center",
        t.textColor = 126437,
        t.visible = !1,
        t.width = 70,
        t.x = 110.838,
        t.y = 35.508,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/SkillBarBaojiSkin.exml"] = window.SkillBarBaojiSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["skill_bar_bg", "effect_icon", "txtSkillName", "grpContent", "skill_bar_baoji"],
        this.currentState = "left",
        this.height = 65,
        this.width = 480,
        this.elementsContent = [this.skill_bar_baoji_i()],
        this.states = [new eui.State("left", [new eui.SetProperty("effect_icon", "verticalCenter", 0)]), new eui.State("right", [new eui.SetProperty("skill_bar_bg", "scaleX", -1), new eui.SetProperty("skill_bar_bg", "x", 480), new eui.SetProperty("effect_icon", "x", 401), new eui.SetProperty("effect_icon", "verticalCenter", 0), new eui.SetProperty("txtSkillName", "x", 46), new eui.SetProperty("txtSkillName", "textAlign", "right")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.skill_bar_baoji_i = function() {
        var t = new eui.Group;
        return this.skill_bar_baoji = t,
        t.x = 0,
        t.y = -17,
        t.elementsContent = [this.skill_bar_bg_i(), this.grpContent_i()],
        t
    },
    i.skill_bar_bg_i = function() {
        var t = new eui.Image;
        return this.skill_bar_bg = t,
        t.height = 82,
        t.source = "battle_skill_bar_bg2_png",
        t.width = 480,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.height = 50,
        t.x = 33,
        t.y = 24,
        t.elementsContent = [this.effect_icon_i(), this.txtSkillName_i()],
        t
    },
    i.effect_icon_i = function() {
        var t = new eui.Image;
        return this.effect_icon = t,
        t.height = 38,
        t.source = "",
        t.width = 46,
        t.x = 0,
        t
    },
    i.txtSkillName_i = function() {
        var t = new eui.Label;
        return this.txtSkillName = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "REEJI",
        t.size = 26,
        t.text = "技能名字技能名字",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.width = 342,
        t.x = 56,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/SkillBarSkin.exml"] = window.SkillBarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["skill_bar_bg", "effect_icon", "txtSkillName", "grpContent"],
        this.currentState = "left",
        this.height = 54,
        this.width = 553,
        this.elementsContent = [this.skill_bar_bg_i(), this.grpContent_i()],
        this.states = [new eui.State("left", [new eui.SetProperty("grpContent", "x", 33)]), new eui.State("right", [new eui.SetProperty("skill_bar_bg", "scaleX", -1), new eui.SetProperty("skill_bar_bg", "x", 553), new eui.SetProperty("effect_icon", "x", 483), new eui.SetProperty("effect_icon", "verticalCenter", 0), new eui.SetProperty("txtSkillName", "textAlign", "right"), new eui.SetProperty("txtSkillName", "x", 53), new eui.SetProperty("grpContent", "x", 33)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.skill_bar_bg_i = function() {
        var t = new eui.Image;
        return this.skill_bar_bg = t,
        t.height = 74,
        t.source = "battle_skill_bar_bg_png",
        t.width = 553,
        t.x = 0,
        t.y = -23,
        t
    },
    i.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.height = 30,
        t.x = 66,
        t.y = 11.278,
        t.elementsContent = [this.effect_icon_i(), this.txtSkillName_i()],
        t
    },
    i.effect_icon_i = function() {
        var t = new eui.Image;
        return this.effect_icon = t,
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.txtSkillName_i = function() {
        var t = new eui.Label;
        return this.txtSkillName = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "技能名字技能名字",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t.width = 410,
        t.x = 55,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/SkillItemSkin.exml"] = window.SkillItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["kide_skill_bg", "txtPower", "txt1", "txtCount", "txt0", "imge_runawayIcon", "txtRunawayNumTx", "txtSkillName", "type_icon", "imge_item_mask", "imge_lockSkillmask"],
        this.currentState = "hide",
        this.height = 108,
        this.width = 190,
        this.elementsContent = [this.kide_skill_bg_i(), this.txtPower_i(), this.txt1_i(), this.txtCount_i(), this.txt0_i(), this.imge_runawayIcon_i(), this.txtRunawayNumTx_i(), this.txtSkillName_i(), this._Group1_i(), this.imge_item_mask_i(), this.imge_lockSkillmask_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("kide_skill_bg", "source", "battle_skill_bg_png"), new eui.SetProperty("kide_skill_bg", "y", 4), new eui.SetProperty("kide_skill_bg", "x", 4), new eui.SetProperty("txt1", "fontFamily", "MFShangHei"), new eui.SetProperty("txt0", "fontFamily", "MFShangHei"), new eui.SetProperty("txtSkillName", "fontFamily", "REEJI"), new eui.SetProperty("type_icon", "y", 18), new eui.SetProperty("type_icon", "x", 22)]), new eui.State("hide", [new eui.SetProperty("txt1", "fontFamily", "MFShangHei"), new eui.SetProperty("txt0", "fontFamily", "MFShangHei"), new eui.SetProperty("txtSkillName", "fontFamily", "REEJI")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.kide_skill_bg_i = function() {
        var t = new eui.Image;
        return this.kide_skill_bg = t,
        t.source = "battle_kide_skill_bg_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.txtPower_i = function() {
        var t = new eui.Label;
        return this.txtPower = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.x = 108,
        t.y = 73,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力：",
        t.textColor = 16777215,
        t.x = 67,
        t.y = 73,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35/35",
        t.textColor = 16777215,
        t.verticalAlign = "middle",
        t.x = 108,
        t.y = 49,
        t
    },
    i.txt0_i = function() {
        var t = new eui.Label;
        return this.txt0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "次数：",
        t.textColor = 16777215,
        t.x = 67,
        t.y = 49,
        t
    },
    i.imge_runawayIcon_i = function() {
        var t = new eui.Image;
        return this.imge_runawayIcon = t,
        t.height = 17,
        t.source = "battle_skill_runawayIcon_png",
        t.width = 11,
        t.x = 152,
        t.y = 75,
        t
    },
    i.txtRunawayNumTx_i = function() {
        var t = new eui.Label;
        return this.txtRunawayNumTx = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "0",
        t.textColor = 16777215,
        t.x = 165,
        t.y = 78,
        t
    },
    i.txtSkillName_i = function() {
        var t = new eui.Label;
        return this.txtSkillName = t,
        t.fontFamily = "REEJI",
        t.size = 16,
        t.text = "技能名称",
        t.textColor = 16777215,
        t.x = 67,
        t.y = 17,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 40,
        t.width = 40,
        t.x = 16,
        t.y = 17,
        t.elementsContent = [this.type_icon_i()],
        t
    },
    i.type_icon_i = function() {
        var t = new eui.Image;
        return this.type_icon = t,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t
    },
    i.imge_item_mask_i = function() {
        var t = new eui.Image;
        return this.imge_item_mask = t,
        t.height = 108,
        t.source = "battle_imge_item_mask_png",
        t.visible = !1,
        t.width = 184,
        t.x = 1.169,
        t.y = -1.384,
        t
    },
    i.imge_lockSkillmask_i = function() {
        var t = new eui.Image;
        return this.imge_lockSkillmask = t,
        t.source = "battle_lockedskill_imge_lockskillmask_1_png",
        t.visible = !1,
        t.x = 2,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/component/SpeedcomponentSkin.exml"] = window.SpeedcomponentSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["jiasu", "back"],
        this.height = 64,
        this.width = 54,
        this.elementsContent = [this.jiasu_i(), this.back_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.jiasu_i = function() {
        var t = new eui.Image;
        return this.jiasu = t,
        t.height = 64,
        t.source = "battle_jiasu_png",
        t.width = 54,
        t
    },
    i.back_i = function() {
        var t = new eui.Image;
        return this.back = t,
        t.height = 64,
        t.source = "battle_back_png",
        t.width = 54,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightloadingSkin.exml"] = window.FightloadingSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg2", "headBg1", "proBg1", "pro1", "head1", "head1Mask", "title1", "nick1", "protxt1", "icon1", "list_0", "grpLeftContent", "leftGrp", "bg1", "headBg2", "head2", "head2Mask", "npcName", "protxt2", "proBg2", "pro2", "title2", "nick2", "icon2", "list_1", "grpRightContent", "rightGrp", "vs", "aniGrp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.leftGrp_i(), this.rightGrp_i(), this.vs_i(), this.aniGrp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.leftGrp_i = function() {
        var t = new eui.Group;
        return this.leftGrp = t,
        t.height = 640,
        t.left = 0,
        t.visible = !0,
        t.width = 838.2,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.bg2_i(), this.grpLeftContent_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(319, 80, 60, 480),
        t.source = "battle_loding_leftBg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = -76.2,
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.source = "battle_loding_left_player_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpLeftContent_i = function() {
        var t = new eui.Group;
        return this.grpLeftContent = t,
        t.left = 0,
        t.y = 13,
        t.elementsContent = [this.headBg1_i(), this.proBg1_i(), this.pro1_i(), this.head1_i(), this.head1Mask_i(), this.title1_i(), this.nick1_i(), this.protxt1_i(), this.icon1_i(), this.list_0_i()],
        t
    },
    i.headBg1_i = function() {
        var t = new eui.Image;
        return this.headBg1 = t,
        t.height = 122,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 122,
        t.x = 17,
        t.y = 162,
        t
    },
    i.proBg1_i = function() {
        var t = new eui.Image;
        return this.proBg1 = t,
        t.left = 20,
        t.right = 49,
        t.source = "battle_loding_proBg1_png",
        t.y = 407.786,
        t
    },
    i.pro1_i = function() {
        var t = new eui.Image;
        return this.pro1 = t,
        t.left = 20,
        t.source = "battle_loding_pro1_png",
        t.width = 0,
        t.y = 407.786,
        t
    },
    i.head1_i = function() {
        var t = new eui.Image;
        return this.head1 = t,
        t.height = 119,
        t.source = "",
        t.width = 119,
        t.x = 19,
        t.y = 164,
        t
    },
    i.head1Mask_i = function() {
        var t = new eui.Image;
        return this.head1Mask = t,
        t.height = 119,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 119,
        t.x = 19,
        t.y = 164,
        t
    },
    i.title1_i = function() {
        var t = new eui.Label;
        return this.title1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "称号文本称号文本称号文本",
        t.textColor = 16777215,
        t.x = 158,
        t.y = 194,
        t
    },
    i.nick1_i = function() {
        var t = new eui.Label;
        return this.nick1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "昵称五个字",
        t.textColor = 16777215,
        t.x = 158,
        t.y = 226,
        t
    },
    i.protxt1_i = function() {
        var t = new eui.Label;
        return this.protxt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "0%",
        t.textColor = 15858175,
        t.x = 24,
        t.y = 374.416,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Group;
        return this.icon1 = t,
        t.visible = !0,
        t.x = 19,
        t.y = 164,
        t
    },
    i.list_0_i = function() {
        var t = new eui.List;
        return this.list_0 = t,
        t.height = 107,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 542,
        t.x = 17,
        t.y = 17.549,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t
    },
    i.rightGrp_i = function() {
        var t = new eui.Group;
        return this.rightGrp = t,
        t.right = 0,
        t.visible = !0,
        t.width = 838,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.bg1_i(), this.grpRightContent_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(398, 80, 50, 480),
        t.source = "battle_loding_rightBg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 76.2,
        t.y = 0,
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(592, 68, 29, 415),
        t.source = "battle_loding_right_player_bg_png",
        t.visible = !0,
        t.y = 89,
        t
    },
    i.grpRightContent_i = function() {
        var t = new eui.Group;
        return this.grpRightContent = t,
        t.right = 0,
        t.visible = !0,
        t.width = 570,
        t.y = 229,
        t.elementsContent = [this.headBg2_i(), this.head2_i(), this.head2Mask_i(), this.npcName_i(), this.protxt2_i(), this.proBg2_i(), this.pro2_i(), this.title2_i(), this.nick2_i(), this.icon2_i(), this.list_1_i()],
        t
    },
    i.headBg2_i = function() {
        var t = new eui.Image;
        return this.headBg2 = t,
        t.height = 122,
        t.right = 19,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 122,
        t.y = 121,
        t
    },
    i.head2_i = function() {
        var t = new eui.Image;
        return this.head2 = t,
        t.height = 119,
        t.right = 19,
        t.source = "",
        t.width = 119,
        t.y = 123,
        t
    },
    i.head2Mask_i = function() {
        var t = new eui.Image;
        return this.head2Mask = t,
        t.height = 119,
        t.right = 19,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 119,
        t.y = 123,
        t
    },
    i.npcName_i = function() {
        var t = new eui.Label;
        return this.npcName = t,
        t.fontFamily = "MFShangHei",
        t.right = 155,
        t.size = 26,
        t.text = "精灵名字单行公有十二个字",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 312,
        t.y = 186,
        t
    },
    i.protxt2_i = function() {
        var t = new eui.Label;
        return this.protxt2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 29,
        t.size = 30,
        t.text = "0%",
        t.textAlign = "right",
        t.textColor = 15858175,
        t.width = 100,
        t.y = 7.37,
        t
    },
    i.proBg2_i = function() {
        var t = new eui.Image;
        return this.proBg2 = t,
        t.left = 60,
        t.right = 20,
        t.source = "battle_loding_proBg1_png",
        t.y = 0,
        t
    },
    i.pro2_i = function() {
        var t = new eui.Image;
        return this.pro2 = t,
        t.right = 20,
        t.scaleX = 1,
        t.source = "battle_loding_pro1_png",
        t.width = 0,
        t.x = 604,
        t.y = 0,
        t
    },
    i.title2_i = function() {
        var t = new eui.Label;
        return this.title2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 158,
        t.size = 22,
        t.text = "称号文本称号文本称号文本",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 264,
        t.y = 151,
        t
    },
    i.nick2_i = function() {
        var t = new eui.Label;
        return this.nick2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 158,
        t.size = 30,
        t.text = "昵称五个字",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 150,
        t.y = 183,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Group;
        return this.icon2 = t,
        t.height = 119,
        t.right = 19,
        t.visible = !0,
        t.width = 119,
        t.y = 123,
        t
    },
    i.list_1_i = function() {
        var t = new eui.List;
        return this.list_1 = t,
        t.height = 107,
        t.right = 33,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 542,
        t.y = 280.35,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 10,
        t.horizontalAlign = "right",
        t
    },
    i.vs_i = function() {
        var t = new eui.Image;
        return this.vs = t,
        t.horizontalCenter = 0,
        t.source = "battle_loding_vs_png",
        t.visible = !1,
        t.y = 0,
        t
    },
    i.aniGrp_i = function() {
        var t = new eui.Group;
        return this.aniGrp = t,
        t.height = 0,
        t.horizontalCenter = 0,
        t.touchChildren = !1,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.width = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemCatchPanelSkin.exml"] = window.ItemCatchPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["image_currency_mask"],
        this.height = 48,
        this.width = 691,
        this.elementsContent = [this.image_currency_mask_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.image_currency_mask_i = function() {
        var t = new eui.Image;
        return this.image_currency_mask = t,
        t.height = 42,
        t.name = "currency_mask",
        t.source = "battle_imge_currency_mask_png",
        t.visible = !1,
        t.width = 643,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemEatPanelSkin.exml"] = window.ItemEatPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["scroller_mask", "grpItem", "_scroller", "rb_Hp", "rb_Pp", "rb_State", "rb_Catch", "image_currency_mask"],
        this.height = 143,
        this.width = 1136,
        this.elementsContent = [this.scroller_mask_i(), this._Image1_i(), this._scroller_i(), this.rb_Hp_i(), this.rb_Pp_i(), this.rb_State_i(), this.rb_Catch_i(), this.image_currency_mask_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_itemHp_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_itemHp_down_png"), new eui.SetProperty("_Image1", "x", 1), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_itemPp_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_itemPp_down_png"), new eui.SetProperty("_Image1", "x", 1), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_itemState_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_itemState_down_png"), new eui.SetProperty("_Image1", "x", 1), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_itemCatch_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_itemCatch_down_png"), new eui.SetProperty("_Image1", "x", 1), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.scroller_mask_i = function() {
        var t = new eui.Image;
        return this.scroller_mask = t,
        t.bottom = 0,
        t.scale9Grid = new egret.Rectangle(124, 69, 55, 68),
        t.source = "battle_item_mask_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "battle_item_itembg_png",
        t.touchEnabled = !1,
        t
    },
    s._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.height = 300,
        t.visible = !0,
        t.x = 0,
        t.y = -157,
        t.viewport = this.grpItem_i(),
        t
    },
    s.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.height = 90,
        t.touchEnabled = !1,
        t.width = 740,
        t
    },
    s.rb_Hp_i = function() {
        var t = new eui.RadioButton;
        return this.rb_Hp = t,
        t.groupName = "nav_battle_item",
        t.x = 12,
        t.y = -46,
        t.skinName = i,
        t
    },
    s.rb_Pp_i = function() {
        var t = new eui.RadioButton;
        return this.rb_Pp = t,
        t.groupName = "nav_battle_item",
        t.x = 147,
        t.y = -46,
        t.skinName = n,
        t
    },
    s.rb_State_i = function() {
        var t = new eui.RadioButton;
        return this.rb_State = t,
        t.groupName = "nav_battle_item",
        t.x = 282,
        t.y = -46,
        t.skinName = o,
        t
    },
    s.rb_Catch_i = function() {
        var t = new eui.RadioButton;
        return this.rb_Catch = t,
        t.groupName = "nav_battle_item",
        t.x = 417,
        t.y = -46,
        t.skinName = r,
        t
    },
    s.image_currency_mask_i = function() {
        var t = new eui.Image;
        return this.image_currency_mask = t,
        t.height = 42,
        t.name = "currency_mask",
        t.source = "battle_imge_currency_mask_png",
        t.visible = !1,
        t.width = 540.315,
        t.x = 10.704,
        t.y = -46.83,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemUISkin.exml"] = window.ItemUISkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "numTxt", "imge_currency_mask"],
        this.height = 69,
        this.width = 69,
        this.elementsContent = [this.bg_i(), this.numTxt_i(), this.imge_currency_mask_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "fightbtns.itemUI_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "fightbtns.itemUI_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Button;
        return this.bg = t,
        t.height = 69,
        t.label = "",
        t.visible = !0,
        t.width = 69,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    n.numTxt_i = function() {
        var t = new eui.Label;
        return this.numTxt = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "MFShangHei",
        t.height = 21,
        t.size = 16,
        t.text = "222",
        t.textAlign = "right",
        t.textColor = 13861902,
        t.width = 66,
        t.x = 1,
        t.y = 42,
        t
    },
    n.imge_currency_mask_i = function() {
        var t = new eui.Image;
        return this.imge_currency_mask = t,
        t.height = 69,
        t.name = "currency_mask",
        t.source = "battle_imge_currency_mask_png",
        t.visible = !1,
        t.width = 69,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainfightSkin.exml"] = window.MainfightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petContainer", "mvContainer", "grpEffectMovieContainer", "timeMC", "fieldEffect", "battleMsg", "grpSkillContainer", "grpPetContainer", "grpItemContainer", "toolBtns", "controlMC", "relationship", "roundInfo", "MyInfoPanel", "OtherInfoPanel", "speedMc", "btnReport"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.petContainer_i(), this.mvContainer_i(), this.grpEffectMovieContainer_i(), this.timeMC_i(), this.fieldEffect_i(), this.battleMsg_i(), this.controlMC_i(), this.relationship_i(), this.roundInfo_i(), this.MyInfoPanel_i(), this.OtherInfoPanel_i(), this.speedMc_i(), this.btnReport_i()],
        this.states = [new eui.State("down", []), new eui.State("up", [])]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.currentState = "down",
            this.elementsContent = [],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, "")]), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "battle_msg_btnzhanbao2_png",
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.source = "battle_msg_btnzhanbao1_png",
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.source = "battle_bg_jpg",
        t.percentWidth = 100,
        t.x = 1,
        t
    },
    n.petContainer_i = function() {
        var t = new eui.Group;
        return this.petContainer = t,
        t.height = 0,
        t.width = 0,
        t
    },
    n.mvContainer_i = function() {
        var t = new eui.Group;
        return this.mvContainer = t,
        t.height = 0,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.grpEffectMovieContainer_i = function() {
        var t = new eui.Group;
        return this.grpEffectMovieContainer = t,
        t.height = 0,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.timeMC_i = function() {
        var t = new CountDown;
        return this.timeMC = t,
        t.horizontalCenter = -5,
        t.scaleX = .8,
        t.scaleY = .8,
        t.skinName = "ClockSkin",
        t.visible = !0,
        t.y = 145,
        t
    },
    n.fieldEffect_i = function() {
        var t = new BattleFieldEffect;
        return this.fieldEffect = t,
        t.horizontalCenter = .5,
        t.scaleX = .8,
        t.scaleY = .8,
        t.skinName = "BattleFieldEffectSkin",
        t.verticalCenter = -169.5,
        t
    },
    n.battleMsg_i = function() {
        var t = new BattleMsg;
        return this.battleMsg = t,
        t.horizontalCenter = 0,
        t.skinName = "BattleMsgSkin",
        t.visible = !0,
        t.y = 95,
        t
    },
    n.controlMC_i = function() {
        var t = new eui.Group;
        return this.controlMC = t,
        t.anchorOffsetX = 4.79,
        t.anchorOffsetY = 0,
        t.bottom = 0,
        t.height = 122,
        t.horizontalCenter = -1,
        t.visible = !0,
        t.percentWidth = 100,
        t.elementsContent = [this.grpSkillContainer_i(), this.grpPetContainer_i(), this.grpItemContainer_i(), this.toolBtns_i()],
        t
    },
    n.grpSkillContainer_i = function() {
        var t = new eui.Group;
        return this.grpSkillContainer = t,
        t.anchorOffsetX = 0,
        t.height = 108,
        t.horizontalCenter = -90,
        t.name = "grpSkillContainer",
        t.visible = !0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = -6,
        t.horizontalAlign = "center",
        t.paddingBottom = 0,
        t.verticalAlign = "bottom",
        t
    },
    n.grpPetContainer_i = function() {
        var t = new eui.Group;
        return this.grpPetContainer = t,
        t.anchorOffsetX = 0,
        t.bottom = 0,
        t.left = 0,
        t.name = "grpPetContainer",
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t
    },
    n.grpItemContainer_i = function() {
        var t = new eui.Group;
        return this.grpItemContainer = t,
        t.anchorOffsetX = 0,
        t.height = 143,
        t.left = 0,
        t.name = "grpItemContainer",
        t.right = 0,
        t.visible = !0,
        t.y = -21,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    n._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.horizontalAlign = "center",
        t.paddingBottom = 0,
        t.verticalAlign = "bottom",
        t
    },
    n.toolBtns_i = function() {
        var t = new ToolBtn;
        return this.toolBtns = t,
        t.bottom = 0,
        t.height = 287,
        t.right = 0,
        t.skinName = "ControllBtnsSkin",
        t.visible = !0,
        t.width = 262,
        t
    },
    n.relationship_i = function() {
        var t = new eui.Image;
        return this.relationship = t,
        t.horizontalCenter = -10.5,
        t.y = 29,
        t
    },
    n.roundInfo_i = function() {
        var t = new RoundInfo;
        return this.roundInfo = t,
        t.horizontalCenter = 16.5,
        t.skinName = "RoundInfoSkin",
        t.visible = !0,
        t.y = 0,
        t
    },
    n.MyInfoPanel_i = function() {
        var t = new LeftPlayerInfo;
        return this.MyInfoPanel = t,
        t.left = 10,
        t.skinName = "LeftInfoSkin",
        t.top = 10,
        t
    },
    n.OtherInfoPanel_i = function() {
        var t = new BasePlayerComponet;
        return this.OtherInfoPanel = t,
        t.right = 10,
        t.skinName = "RightInfoSkin",
        t.top = 10,
        t
    },
    n.speedMc_i = function() {
        var t = new SpeedComponent;
        return this.speedMc = t,
        t.right = 25,
        t.skinName = "SpeedcomponentSkin",
        t.y = 205,
        t
    },
    n.btnReport_i = function() {
        var t = new eui.Component;
        return this.btnReport = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 460,
        t.skinName = i,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OtherinfoSkin.exml"] = window.OtherinfoSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["headRect", "barMC_down", "barMC_up", "hp_txt", "hp1", "headRect2", "barMC_down2", "barMC_up2", "hp_txt2", "hp_txt3", "hpdeltaNumTxt", "hp2", "typeIconBg", "level_txt", "name_txt", "die0", "die1", "die2", "die3", "die4", "die5", "live0", "live1", "live2", "live3", "live4", "live5", "aliveNumMC", "numTxt2", "deltaNumTxt2", "shield2", "numTxt3", "violentMc", "numTxt", "deltaNumTxt", "shield", "mc", "monikaIcon", "num", "enygemc", "resistance", "iconMC", "effect"],
        this.height = 300,
        this.width = 453,
        this.elementsContent = [this.hp1_i(), this.hp2_i(), this.typeIconBg_i(), this.level_txt_i(), this.name_txt_i(), this.aliveNumMC_i(), this.shield2_i(), this.violentMc_i(), this.shield_i(), this.monikaIcon_i(), this.enygemc_i(), this.resistance_i(), this.iconMC_i(), this.effect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.hp1_i = function() {
        var t = new eui.Group;
        return this.hp1 = t,
        t.x = 2,
        t.y = 3,
        t.elementsContent = [this.headRect_i(), this.barMC_down_i(), this.barMC_up_i(), this.hp_txt_i()],
        t
    },
    i.headRect_i = function() {
        var t = new eui.Image;
        return this.headRect = t,
        t.source = "headRect1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.barMC_down_i = function() {
        var t = new eui.Image;
        return this.barMC_down = t,
        t.anchorOffsetX = 349,
        t.source = "barMC_down1_png",
        t.x = 358.5,
        t.y = 26,
        t
    },
    i.barMC_up_i = function() {
        var t = new eui.Image;
        return this.barMC_up = t,
        t.anchorOffsetX = 349,
        t.scaleX = 1,
        t.source = "barMC_up1_png",
        t.x = 358.5,
        t.y = 26,
        t
    },
    i.hp_txt_i = function() {
        var t = new eui.Label;
        return this.hp_txt = t,
        t.anchorOffsetX = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.text = "Label",
        t.width = 166,
        t.x = 18.5,
        t.y = 20,
        t
    },
    i.hp2_i = function() {
        var t = new eui.Group;
        return this.hp2 = t,
        t.x = 0,
        t.y = 3,
        t.elementsContent = [this.headRect2_i(), this.barMC_down2_i(), this.barMC_up2_i(), this.hp_txt2_i(), this.hp_txt3_i(), this.hpdeltaNumTxt_i()],
        t
    },
    i.headRect2_i = function() {
        var t = new eui.Image;
        return this.headRect2 = t,
        t.source = "fightui.headrecr_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.barMC_down2_i = function() {
        var t = new eui.Image;
        return this.barMC_down2 = t,
        t.anchorOffsetX = 330,
        t.source = "fightui.hp_down_r_2_png",
        t.x = 360,
        t.y = 26,
        t
    },
    i.barMC_up2_i = function() {
        var t = new eui.Image;
        return this.barMC_up2 = t,
        t.anchorOffsetX = 350,
        t.source = "fightui.hp_up_r_2_png",
        t.x = 361,
        t.y = 8,
        t
    },
    i.hp_txt2_i = function() {
        var t = new eui.Label;
        return this.hp_txt2 = t,
        t.anchorOffsetX = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "Label",
        t.width = 166,
        t.x = 98,
        t.y = 3,
        t
    },
    i.hp_txt3_i = function() {
        var t = new eui.Label;
        return this.hp_txt3 = t,
        t.anchorOffsetX = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "Label",
        t.width = 166,
        t.x = 92,
        t.y = 23,
        t
    },
    i.hpdeltaNumTxt_i = function() {
        var t = new eui.Label;
        return this.hpdeltaNumTxt = t,
        t.anchorOffsetX = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 26,
        t.text = "Label",
        t.textColor = 10027008,
        t.width = 166,
        t.x = 55,
        t.y = 73,
        t
    },
    i.typeIconBg_i = function() {
        var t = new eui.Image;
        return this.typeIconBg = t,
        t.height = 30,
        t.width = 30,
        t.x = 334,
        t.y = 45,
        t
    },
    i.level_txt_i = function() {
        var t = new eui.Label;
        return this.level_txt = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.size = 18,
        t.text = "1",
        t.width = 58,
        t.x = 323,
        t.y = 75,
        t
    },
    i.name_txt_i = function() {
        var t = new eui.Label;
        return this.name_txt = t,
        t.size = 12,
        t.text = "Label",
        t.textAlign = "center",
        t.width = 88,
        t.wordWrap = !1,
        t.x = 247,
        t.y = 54,
        t
    },
    i.aliveNumMC_i = function() {
        var t = new eui.Group;
        return this.aliveNumMC = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 21,
        t.width = 111,
        t.x = 77.5,
        t.y = 53.5,
        t.elementsContent = [this.die0_i(), this.die1_i(), this.die2_i(), this.die3_i(), this.die4_i(), this.die5_i(), this.live0_i(), this.live1_i(), this.live2_i(), this.live3_i(), this.live4_i(), this.live5_i()],
        t
    },
    i.die0_i = function() {
        var t = new eui.Image;
        return this.die0 = t,
        t.source = "petliveicon0002_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.die1_i = function() {
        var t = new eui.Image;
        return this.die1 = t,
        t.source = "petliveicon0002_png",
        t.x = 23,
        t.y = 0,
        t
    },
    i.die2_i = function() {
        var t = new eui.Image;
        return this.die2 = t,
        t.source = "petliveicon0002_png",
        t.x = 44,
        t.y = 0,
        t
    },
    i.die3_i = function() {
        var t = new eui.Image;
        return this.die3 = t,
        t.source = "petliveicon0002_png",
        t.x = 65,
        t.y = 0,
        t
    },
    i.die4_i = function() {
        var t = new eui.Image;
        return this.die4 = t,
        t.source = "petliveicon0002_png",
        t.x = 86,
        t.y = 0,
        t
    },
    i.die5_i = function() {
        var t = new eui.Image;
        return this.die5 = t,
        t.source = "petliveicon0002_png",
        t.x = 107,
        t.y = 0,
        t
    },
    i.live0_i = function() {
        var t = new eui.Image;
        return this.live0 = t,
        t.source = "petliveicon0001_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.live1_i = function() {
        var t = new eui.Image;
        return this.live1 = t,
        t.source = "petliveicon0001_png",
        t.x = 23,
        t.y = 0,
        t
    },
    i.live2_i = function() {
        var t = new eui.Image;
        return this.live2 = t,
        t.source = "petliveicon0001_png",
        t.x = 44,
        t.y = 0,
        t
    },
    i.live3_i = function() {
        var t = new eui.Image;
        return this.live3 = t,
        t.source = "petliveicon0001_png",
        t.x = 65,
        t.y = 0,
        t
    },
    i.live4_i = function() {
        var t = new eui.Image;
        return this.live4 = t,
        t.source = "petliveicon0001_png",
        t.x = 86,
        t.y = 0,
        t
    },
    i.live5_i = function() {
        var t = new eui.Image;
        return this.live5 = t,
        t.source = "petliveicon0001_png",
        t.x = 107,
        t.y = 0,
        t
    },
    i.shield2_i = function() {
        var t = new eui.Group;
        return this.shield2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.width = 37,
        t.x = 103,
        t.y = 86,
        t.elementsContent = [this._Image1_i(), this.numTxt2_i(), this.deltaNumTxt2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "shield2_png",
        t.x = -1,
        t.y = 2,
        t
    },
    i.numTxt2_i = function() {
        var t = new eui.Label;
        return this.numTxt2 = t,
        t.size = 18,
        t.text = "Label",
        t.x = 4,
        t.y = 1,
        t
    },
    i.deltaNumTxt2_i = function() {
        var t = new eui.Label;
        return this.deltaNumTxt2 = t,
        t.size = 18,
        t.text = "Label",
        t.x = 15,
        t.y = 10,
        t
    },
    i.violentMc_i = function() {
        var t = new eui.Group;
        return this.violentMc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.width = 37,
        t.x = 153,
        t.y = 86,
        t.elementsContent = [this._Image2_i(), this.numTxt3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "fightui.violentMc_png",
        t.x = -1,
        t.y = 2,
        t
    },
    i.numTxt3_i = function() {
        var t = new eui.Label;
        return this.numTxt3 = t,
        t.size = 18,
        t.text = "Label",
        t.x = 4,
        t.y = 1,
        t
    },
    i.shield_i = function() {
        var t = new eui.Group;
        return this.shield = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.width = 37,
        t.x = 203,
        t.y = 86,
        t.elementsContent = [this._Image3_i(), this.numTxt_i(), this.deltaNumTxt_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "shield_png",
        t.x = -1,
        t.y = 2,
        t
    },
    i.numTxt_i = function() {
        var t = new eui.Label;
        return this.numTxt = t,
        t.size = 18,
        t.text = "Label",
        t.x = 4,
        t.y = 1,
        t
    },
    i.deltaNumTxt_i = function() {
        var t = new eui.Label;
        return this.deltaNumTxt = t,
        t.size = 18,
        t.text = "Label",
        t.x = 15,
        t.y = 10,
        t
    },
    i.monikaIcon_i = function() {
        var t = new eui.Group;
        return this.monikaIcon = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.width = 37,
        t.x = 253,
        t.y = 86,
        t.elementsContent = [this._Image4_i(), this.mc_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "fightui.monikaIcon_png",
        t.x = -1,
        t.y = 2,
        t
    },
    i.mc_i = function() {
        var t = new eui.Label;
        return this.mc = t,
        t.size = 18,
        t.text = "Label",
        t.x = 4,
        t.y = 1,
        t
    },
    i.enygemc_i = function() {
        var t = new eui.Group;
        return this.enygemc = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 16,
        t.width = 37,
        t.x = 254,
        t.y = 87,
        t.elementsContent = [this._Image5_i(), this.num_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "fightui.enygemc_png",
        t.x = -1,
        t.y = 2,
        t
    },
    i.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.size = 18,
        t.text = "Label",
        t.x = 4,
        t.y = 1,
        t
    },
    i.resistance_i = function() {
        var t = new eui.Image;
        return this.resistance = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 33,
        t.source = "fightui.resistance_png",
        t.width = 33,
        t.x = 303,
        t.y = 93,
        t
    },
    i.iconMC_i = function() {
        var t = new eui.Image;
        return this.iconMC = t,
        t.height = 62,
        t.width = 62,
        t.x = 376,
        t.y = 23,
        t
    },
    i.effect_i = function() {
        var t = new OtherEffectmcPanelui;
        return this.effect = t,
        t.x = 271,
        t.y = 71,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SelectpetfightButton.exml"] = window.SelectpetfightButton = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["labelDisplay", "iconDisplay"],
        this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.iconDisplay_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "fightbtns.select_fight_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(1, 3, 8, 8),
        t.source = "fightbtns.select_fight_up_png",
        t.percentWidth = 100,
        t
    },
    i.labelDisplay_i = function() {
        var t = new eui.Label;
        return this.labelDisplay = t,
        t.bottom = 8,
        t.left = 8,
        t.right = 8,
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 16777215,
        t.top = 8,
        t.verticalAlign = "middle",
        t
    },
    i.iconDisplay_i = function() {
        var t = new eui.Image;
        return this.iconDisplay = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SkillbtnSkin.exml"] = window.SkillbtnSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["labelDisplay", "iconDisplay"],
        this.minHeight = 50,
        this.minWidth = 100,
        this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.iconDisplay_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "skillmcbg0002_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(1, 3, 8, 8),
        t.source = "skillmcbg0001_png",
        t.percentWidth = 100,
        t
    },
    i.labelDisplay_i = function() {
        var t = new eui.Label;
        return this.labelDisplay = t,
        t.bottom = 8,
        t.left = 6,
        t.right = 10,
        t.size = 20,
        t.text = "",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.top = 8,
        t.verticalAlign = "middle",
        t
    },
    i.iconDisplay_i = function() {
        var t = new eui.Image;
        return this.iconDisplay = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin);