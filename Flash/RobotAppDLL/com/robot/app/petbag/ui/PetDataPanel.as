package com.robot.app.petbag.ui
{
   import com.robot.app.info.BulaikeEffectInfo;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.mapProcess.control.AngelEvilController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.pet.PetGenderIconManager;
   import com.robot.core.ui.effectTips.EffectInfoTips;
   import com.robot.core.ui.skillBtn.NormalSkillBtn;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class PetDataPanel
   {
      
      private static const MAX:int = 4;
       
      
      private var skillBtnArray:Array;
      
      private var _mainUI:Sprite;
      
      private var _numTxt:TextField;
      
      private var _nameTxt:TextField;
      
      private var _levelTxt:TextField;
      
      private var _abilityTxt:TextField;
      
      private var _upExpTxt:TextField;
      
      private var _charaTxt:TextField;
      
      private var _effectMC:MovieClip;
      
      private var _getTimeTxt:TextField;
      
      private var _showMc:MovieClip;
      
      private var _abilityLight:MovieClip;
      
      private var _attackTxt:TextField;
      
      private var _defenceTxt:TextField;
      
      private var _saTxt:TextField;
      
      private var _sdTxt:TextField;
      
      private var _speedTxt:TextField;
      
      private var _hpTxt:TextField;
      
      private var ev_attackTxt:TextField;
      
      private var ev_defenceTxt:TextField;
      
      private var ev_saTxt:TextField;
      
      private var ev_sdTxt:TextField;
      
      private var ev_speedTxt:TextField;
      
      private var ev_hpTxt:TextField;
      
      private var _id:uint;
      
      private var _ct:uint;
      
      private var _petInfo:PetInfo;
      
      private var _attMc:SimpleButton;
      
      private var _tipTxtArr:Array;
      
      private var _numArr:Array;
      
      private var _generIcon:MovieClip;
      
      private var _evolutionMC:MovieClip;
      
      private var _specialEffectIcon:Sprite;
      
      private var des1:String = "<font color=\'#ffff00\'>";
      
      private var des2:String = "</font>";
      
      private var _spMc:MovieClip;
      
      public function PetDataPanel(param1:Sprite)
      {
         this.skillBtnArray = [];
         this._numArr = [];
         super();
         this._mainUI = param1;
         this._numTxt = this._mainUI["numTxt"];
         this._nameTxt = this._mainUI["nameTxt"];
         this._levelTxt = this._mainUI["levelTxt"];
         this._abilityTxt = this._mainUI["abilityTxt"];
         this._upExpTxt = this._mainUI["upExpTxt"];
         this._charaTxt = this._mainUI["charaTxt"];
         this._effectMC = this._mainUI["effectMC"];
         this._getTimeTxt = this._mainUI["getTimeTxt"];
         this._attackTxt = this._mainUI["attackTxt"];
         this._defenceTxt = this._mainUI["defenceTxt"];
         this._saTxt = this._mainUI["saTxt"];
         this._sdTxt = this._mainUI["sdTxt"];
         this._speedTxt = this._mainUI["speedTxt"];
         this._hpTxt = this._mainUI["hpTxt"];
         this.ev_attackTxt = this._mainUI["ev_attackTxt"];
         this.ev_defenceTxt = this._mainUI["ev_defenceTxt"];
         this.ev_saTxt = this._mainUI["ev_saTxt"];
         this.ev_sdTxt = this._mainUI["ev_sdTxt"];
         this.ev_speedTxt = this._mainUI["ev_speedTxt"];
         this.ev_hpTxt = this._mainUI["ev_hpTxt"];
         this._generIcon = this._mainUI["gener_icon"];
         this.addEffectBg();
         var _loc2_:uint = 0;
         while(_loc2_ < 6)
         {
            ToolTipManager.add(this._mainUI["icon_" + _loc2_],"学习力");
            _loc2_++;
         }
         SocketConnection.addCmdListener(CommandID.EAT_SPECIAL_MEDICINE,this.onEatSplItem);
         SocketConnection.addCmdListener(CommandID.UP_GRADE_MEDICINE,this.onEatUpItem);
         this._tipTxtArr = [this._attackTxt,this._defenceTxt,this._saTxt,this._sdTxt,this._speedTxt];
         this._evolutionMC = this._mainUI["evolutionMC"];
      }
      
      public function clearInfo() : void
      {
         this._numTxt.text = "";
         this._nameTxt.text = "";
         this._levelTxt.text = "";
         this._abilityTxt.text = "";
         this._upExpTxt.text = "";
         this._charaTxt.text = "";
         this._effectMC.visible = false;
         this._getTimeTxt.text = "";
         this._attackTxt.text = "";
         this._defenceTxt.text = "";
         this._saTxt.text = "";
         this._sdTxt.text = "";
         this._speedTxt.text = "";
         this._hpTxt.text = "";
         if(this._id != 0)
         {
            ResourceManager.cancel(ClientConfig.getPetSwfPath(this._id,this._ct),this.onShowComplete);
         }
         if(this._showMc)
         {
            DisplayUtil.removeForParent(this._showMc);
            this._showMc = null;
         }
         if(this._abilityLight)
         {
            DisplayUtil.removeForParent(this._abilityLight);
            this._abilityLight = null;
         }
         if(this.skillBtnArray)
         {
            this.clearOldBtn();
         }
         PetGenderIconManager.hideIcon(this._mainUI);
      }
      
      public function show(param1:PetInfo) : void
      {
         if(this._spMc)
         {
            DisplayUtil.removeForParent(this._spMc);
            ToolTipManager.remove(this._spMc);
            this._spMc = null;
         }
         ToolTipManager.remove(this._charaTxt);
         ToolTipManager.remove(this._abilityTxt);
         this._effectMC.visible = false;
         this._generIcon.visible = false;
         this._evolutionMC.visible = false;
         ToolTipManager.remove(this._evolutionMC);
         if(this._specialEffectIcon)
         {
            ToolTipManager.remove(this._specialEffectIcon);
            DisplayUtil.removeForParent(this._specialEffectIcon);
            this._specialEffectIcon = null;
         }
         PetManager.storageUpDate(param1.catchTime,this.showInfo);
      }
      
      private function showInfo(param1:PetInfo) : void
      {
         var j:uint;
         var i:int;
         var evolvingLv:uint;
         var evlToID:uint;
         var evlFlag:uint;
         var normal:PetEffectInfo = null;
         var ability:PetEffectInfo = null;
         var eff:PetEffectInfo = null;
         var starLv:int = 0;
         var desc:String = null;
         var intro:String = null;
         var skillBtn:NormalSkillBtn = null;
         var petArr:Array = null;
         var goldFlag:Boolean = false;
         var silverFlag:Boolean = false;
         var k:uint = 0;
         var info:PetInfo = param1;
         this._petInfo = info;
         if(this._petInfo.generation > 0)
         {
            this._generIcon.visible = true;
         }
         else
         {
            this._generIcon.visible = false;
         }
         this._numTxt.htmlText = "序号:" + this.des1 + StringUtil.renewZero(this._petInfo.id.toString(),3) + this.des2;
         this._nameTxt.htmlText = "名字:" + this.des1 + PetXMLInfo.getName(this._petInfo.id) + this.des2;
         this._levelTxt.htmlText = "等级:" + this.des1 + this._petInfo.level.toString() + this.des2;
         this._upExpTxt.htmlText = "升级所需经验值:" + this.des1 + (this._petInfo.nextLvExp - this._petInfo.exp).toString() + this.des2;
         this._charaTxt.htmlText = "性格:" + this.des1 + NatureXMLInfo.getName(this._petInfo.nature) + this.des2;
         ToolTipManager.add(this._charaTxt,NatureXMLInfo.getDes(this._petInfo.nature));
         j = 0;
         while(j < this._petInfo.effectList.length)
         {
            eff = this._petInfo.effectList[j] as PetEffectInfo;
            if(eff.effectID != 177)
            {
               if(eff.status == 1 || eff.status == 4)
               {
                  if(eff.effectID > 400 && eff.effectID <= 420)
                  {
                     ability = eff;
                  }
                  else
                  {
                     normal = eff;
                  }
               }
            }
            j++;
         }
         this._abilityTxt.htmlText = "";
         this._effectMC.visible = false;
         if(ability)
         {
            this._abilityTxt.htmlText = "特质:" + this.des1 + PetEffectXMLInfo.getEffect(ability.effectID,ability.args) + this.des2;
            ToolTipManager.add(this._abilityTxt,PetEffectXMLInfo.getEffectDes(ability.effectID,ability.args));
         }
         if(normal)
         {
            starLv = int(PetEffectXMLInfo.getStarLevel(normal.effectID,normal.args));
            desc = String(PetEffectXMLInfo.getEffect(normal.effectID,normal.args));
            intro = String(PetEffectXMLInfo.getIntros(desc).getValue(starLv));
            EffectInfoTips.setup(this._effectMC,desc,starLv,intro);
         }
         this._getTimeTxt.htmlText = "获得时间:" + this.des1 + StringUtil.timeFormat(this._petInfo.catchTime) + this.des2;
         this.showIcon(this._petInfo.effectList.filter(function(param1:PetEffectInfo, param2:int, param3:Array):Boolean
         {
            return param1.status == 2;
         },this._petInfo.effectList));
         if(this._attMc)
         {
            DisplayUtil.removeForParent(this._attMc);
            this._attMc = null;
         }
         this._attMc = UIManager.getButton("Icon_PetType_" + PetXMLInfo.getType(this._petInfo.id));
         if(this._attMc)
         {
            this._attMc.x = this._nameTxt.x + this._nameTxt.textWidth + 10 + 10;
            this._attMc.y = this._nameTxt.y + 10;
            DisplayUtil.uniformScale(this._attMc,20);
            this._mainUI.addChild(this._attMc);
            PetGenderIconManager.addIcon(this._mainUI,new Point(this._attMc.x + 20,this._attMc.y - 10),PetXMLInfo.getPetGender(this._petInfo.id));
         }
         else
         {
            PetGenderIconManager.hideIcon(this._mainUI);
         }
         if(this._id != 0)
         {
            ResourceManager.cancel(ClientConfig.getPetSwfPath(this._id,this._ct),this.onShowComplete);
         }
         if(this._showMc)
         {
            DisplayUtil.removeForParent(this._showMc);
            this._showMc = null;
         }
         if(this._abilityLight)
         {
            DisplayUtil.removeForParent(this._abilityLight);
            this._abilityLight = null;
         }
         this._id = this._petInfo.id;
         this._ct = this._petInfo.catchTime;
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._id,this._ct),this.onShowComplete,"pet");
         PetPropAddController.showAddTxtTip(this._attackTxt,this._petInfo,0);
         PetPropAddController.showAddTxtTip(this._defenceTxt,this._petInfo,1);
         PetPropAddController.showAddTxtTip(this._saTxt,this._petInfo,2);
         PetPropAddController.showAddTxtTip(this._sdTxt,this._petInfo,3);
         PetPropAddController.showAddTxtTip(this._speedTxt,this._petInfo,4);
         PetPropAddController.showAddTxtTip(this._hpTxt,this._petInfo,5);
         this.ev_attackTxt.htmlText = this.des1 + this._petInfo.ev_attack.toString() + this.des2;
         this.ev_defenceTxt.htmlText = this.des1 + this._petInfo.ev_defence.toString() + this.des2;
         this.ev_saTxt.htmlText = this.des1 + this._petInfo.ev_sa.toString() + this.des2;
         this.ev_sdTxt.htmlText = this.des1 + this._petInfo.ev_sd.toString() + this.des2;
         this.ev_speedTxt.htmlText = this.des1 + this._petInfo.ev_sp.toString() + this.des2;
         this.ev_hpTxt.htmlText = this.des1 + this._petInfo.ev_hp.toString() + this.des2;
         this.clearOldBtn();
         i = 0;
         while(i < MAX)
         {
            if(i < this._petInfo.skillNum)
            {
               skillBtn = new NormalSkillBtn(this._petInfo.skillArray[i].id,this._petInfo.skillArray[i].pp);
               skillBtn.petInfo = this._petInfo;
               if(this._petInfo.skillArray[i].id == 12867)
               {
                  if(MainManager.actorModel.isClothTianshen())
                  {
                     skillBtn.filters = [new GlowFilter(16711680)];
                  }
               }
            }
            else
            {
               skillBtn = new NormalSkillBtn();
            }
            skillBtn.x = 18 + (skillBtn.width + 10) * (i % 2);
            skillBtn.y = 218 + (skillBtn.height + 8) * Math.floor(i / 2);
            this.skillBtnArray.push(skillBtn);
            this._mainUI.addChild(skillBtn);
            i++;
         }
         this._mainUI.visible = true;
         evolvingLv = uint(PetXMLInfo.getEvolvingLv(this._petInfo.id));
         evlToID = uint(PetXMLInfo.getEvolvesTo(this._petInfo.id));
         evlFlag = uint(PetXMLInfo.getEvolvFlag(this._petInfo.id));
         this._evolutionMC.visible = true;
         if(evlToID != 0)
         {
            this._evolutionMC.mouseEnabled = true;
            this._evolutionMC.gotoAndStop(1);
            ToolTipManager.add(this._evolutionMC,evolvingLv + "级进化为" + PetXMLInfo.getName(evlToID) + "。");
         }
         else if(evlFlag == 0)
         {
            this._evolutionMC.mouseEnabled = false;
            this._evolutionMC.gotoAndStop(2);
         }
         else
         {
            this._evolutionMC.mouseEnabled = true;
            this._evolutionMC.gotoAndStop(3);
            ToolTipManager.add(this._evolutionMC,evolvingLv + "级在实验室进化舱进化。");
         }
         if(this._petInfo.id == 261 || info.id == 1845)
         {
            SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect);
            SocketConnection.send(CommandID.M_2149);
         }
         else if(this._petInfo.id == 875 || this._petInfo.id == 2341)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE);
         }
         else if(this._petInfo.id == 798)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,0);
         }
         else if(PetBagControllerNew.xteamPetArr.indexOf(this._petInfo.id) != -1)
         {
            if(PetBagControllerNew.isHasXteamEffect)
            {
               this._specialEffectIcon = UIManager.getSprite("icon_xteam_wuxianzhanyi");
               ToolTipManager.add(this._specialEffectIcon,"无限战意");
               if(this._specialEffectIcon)
               {
                  this._specialEffectIcon.x = 260;
                  this._specialEffectIcon.y = 10;
                  this._mainUI.addChild(this._specialEffectIcon);
               }
            }
            else if(this._petInfo.id == 1394 || this._petInfo.id == 1395)
            {
               this._specialEffectIcon = UIManager.getSprite("icon_ruierka_jueduifangyu");
               ToolTipManager.add(this._specialEffectIcon,"绝对防御");
               if(this._specialEffectIcon)
               {
                  this._specialEffectIcon.x = 260;
                  this._specialEffectIcon.y = 10;
                  this._mainUI.addChild(this._specialEffectIcon);
               }
            }
         }
         else if(this._petInfo.id == 928 || this._petInfo.id == 929)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_ruierka_jueduifangyu");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"绝对防御");
            }
         }
         else if(this._petInfo.id == 1178 || this._petInfo.id == 1179)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_mengqike_jin");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"火眼金睛");
            }
         }
         else if(this._petInfo.id == 1211 || this._petInfo.id == 1212)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1212");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"每回合5%概率令对手麻痹");
            }
         }
         else if(this._petInfo.id == 1226 || this._petInfo.id == 1227)
         {
            if(MainManager.actorModel.isClothTianshen())
            {
               this._specialEffectIcon = UIManager.getSprite("icon_1226");
               if(this._specialEffectIcon)
               {
                  this._specialEffectIcon.x = 260;
                  this._specialEffectIcon.y = 10;
                  this._specialEffectIcon.width = 30;
                  this._specialEffectIcon.height = 28;
                  this._mainUI.addChild(this._specialEffectIcon);
                  ToolTipManager.add(this._specialEffectIcon,"天光烈袭威力提升至160");
               }
            }
         }
         else if(this._petInfo.id == 1238)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1238");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"每回合10%概率令对手烧伤");
            }
         }
         else if(this._petInfo.id == 70)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this._petInfo.catchTime);
         }
         else if(this._petInfo.id == 1259 || this._petInfo.id == 1260)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1259");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"进入战斗一定概率速度提升1个等级");
            }
         }
         else if(this._petInfo.id == 1279)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1279");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"5%几率令对手属性技能失效");
            }
         }
         else if(this._petInfo.id == 1287 || this._petInfo.id == 1288)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1287");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               if(AngelEvilController.allHave)
               {
                  ToolTipManager.add(this._specialEffectIcon,"每回合50%概率消除害怕状态");
               }
               else
               {
                  ToolTipManager.add(this._specialEffectIcon,"每回合40%概率消除害怕状态");
               }
            }
         }
         else if(this._petInfo.id == 1289 || this._petInfo.id == 1290)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1289");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               if(AngelEvilController.allHave)
               {
                  ToolTipManager.add(this._specialEffectIcon,"每回合50%概率消除疲惫状态");
               }
               else
               {
                  ToolTipManager.add(this._specialEffectIcon,"每回合40%概率消除疲惫状态");
               }
            }
         }
         else if(this._petInfo.id == 1317)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1317");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 41;
               this._specialEffectIcon.height = 40;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"令对手每回合额外增加10%冻伤概率");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveLingGuangEffect(this._petInfo.effectList) && (this._petInfo.id == 811 || this._petInfo.id == 810 || this._petInfo.id == 809))
         {
            this._specialEffectIcon = UIManager.getSprite("icon_811");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 41;
               this._specialEffectIcon.height = 40;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"草系技能威力提升5%");
            }
         }
         else if(this._petInfo.id == 1481 || this._petInfo.id == 1482 || this._petInfo.id == 1498 || this._petInfo.id == 1499)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1481");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 265;
               this._specialEffectIcon.y = 18;
               this._specialEffectIcon.width = 31;
               this._specialEffectIcon.height = 30;
               this._mainUI.addChild(this._specialEffectIcon);
               petArr = PetManager.getBagMap();
               goldFlag = false;
               silverFlag = false;
               k = 0;
               while(k < petArr.length)
               {
                  if((petArr[k] as PetListInfo).id == 1481 || (petArr[k] as PetListInfo).id == 1482)
                  {
                     goldFlag = true;
                  }
                  if((petArr[k] as PetListInfo).id == 1498 || (petArr[k] as PetListInfo).id == 1499)
                  {
                     silverFlag = true;
                  }
                  k++;
               }
               if(goldFlag && silverFlag)
               {
                  (this._specialEffectIcon as MovieClip).gotoAndStop(1);
               }
               else
               {
                  (this._specialEffectIcon as MovieClip).gotoAndStop(2);
               }
               ToolTipManager.add(this._specialEffectIcon,"先手攻击");
            }
         }
         else if(this._petInfo.id == 1535 || this._petInfo.id == 1536)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_1536");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 262;
               this._specialEffectIcon.y = 8;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"受到攻击将消除对手能力强化状态");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveMaiErSiEffect(this._petInfo.effectList) && (this._petInfo.id == 1203 || this._petInfo.id == 1204))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_1203");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 31;
               this._specialEffectIcon.height = 30;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"反弹1/8伤害");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveDarkGodEffect(this._petInfo.effectList) && (this._petInfo.id == 1731 || this._petInfo.id == 1732))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_1732");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._specialEffectIcon.width = 31;
               this._specialEffectIcon.height = 30;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"出战时，若首回合受到致命伤害则保留1点体力");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveScareEffect(this._petInfo.effectList) && (this._petInfo.id == 1864 || this._petInfo.id == 1865))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_1865_1864");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"出战时，首回合免疫所有异常状态");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveLukasiEffect(this._petInfo.effectList) && (this._petInfo.id == 1910 || this._petInfo.id == 1909))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_1910_1909");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"登场后每三回合，必定获得一次致命一击效果");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveAbosiEffect(this._petInfo.effectList) && (this._petInfo.id == 2118 || this._petInfo.id == 2117))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_2118_2117");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"10%令对手害怕");
            }
         }
         else if(this._petInfo.effectList.length > 0 && this.haveRuiyaEffect(this._petInfo.effectList) && (this._petInfo.id == 2326 || this._petInfo.id == 2327))
         {
            this._specialEffectIcon = UIManager.getMovieClip("icon_2326_2327");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 258;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"受到所有伤害减少5%");
            }
         }
         else if(this._petInfo.id == 1121)
         {
            this._specialEffectIcon = UIManager.getMovieClip("Hun_Icon");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"破魂：攻击时一定概率额外附加伤害！");
            }
         }
         else if(this._petInfo.id == 1122)
         {
            this._specialEffectIcon = UIManager.getMovieClip("Xiang_Icon");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"翱翔：攻击时一定概率提升自身速度等级！");
            }
         }
         else if(this._petInfo.id == 1114 || this._petInfo.id == 1115)
         {
            if(KTool.checkPetInBag(1155) || KTool.checkPetInBag(1156))
            {
               this._specialEffectIcon = UIManager.getSprite("icon_wolf");
               if(this._specialEffectIcon)
               {
                  this._specialEffectIcon.x = 260;
                  this._specialEffectIcon.y = 10;
                  this._mainUI.addChild(this._specialEffectIcon);
                  ToolTipManager.add(this._specialEffectIcon,"血狼一族（体力上限+50）");
               }
            }
         }
         else if(this._petInfo.id == 1155 || this._petInfo.id == 1156)
         {
            if(KTool.checkPetInBag(1114) || KTool.checkPetInBag(1115))
            {
               this._specialEffectIcon = UIManager.getSprite("icon_wolf");
               if(this._specialEffectIcon)
               {
                  this._specialEffectIcon.x = 260;
                  this._specialEffectIcon.y = 10;
                  this._mainUI.addChild(this._specialEffectIcon);
                  ToolTipManager.add(this._specialEffectIcon,"血狼一族（体力上限+50）");
               }
            }
         }
         else if(this._petInfo.id == 1019)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_jiuweifox_zhong");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"九尾重生");
            }
         }
         else if(this._petInfo.id == 597 || this._petInfo.id == 599)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this._petInfo.catchTime);
         }
         else if(this._petInfo.id == 461 || this._petInfo.id == 462 || this._petInfo.id == 903 || this._petInfo.id == 904)
         {
            this._spMc = UIManager.getMovieClip("SpecialPet_Tip_Mc");
            this._spMc.x = 100;
            this._spMc.y = 40;
            this._mainUI.addChild(this._spMc);
            if(this._petInfo.id == 461 || this._petInfo.id == 462)
            {
               ToolTipManager.add(this._spMc,"每当中秋节和每个月的22日，它将爆发出惊人的力量！");
            }
            if(this._petInfo.id == 903 || this._petInfo.id == 904)
            {
               ToolTipManager.add(this._spMc,"每当中秋节和每个月的12日，它将爆发出惊人的力量！");
            }
         }
         else if(info.id == 1928 || info.id == 1929 || info.id == 1940 || info.id == 1941 || info.id == 1969 || info.id == 1970 || info.id == 2512 || info.id == 2520 || info.id == 2530)
         {
            KTool.getForeverNum(4060,function(param1:uint):void
            {
               var _loc2_:* = param1 << 31 == 1;
               if(_loc2_)
               {
                  _spMc = UIManager.getMovieClip("背包内每存在一种三兄弟精灵时自身每回合回复15点体力，最多45点");
                  _spMc.x = 260;
                  _spMc.y = 10;
                  _mainUI.addChild(_spMc);
                  ToolTipManager.add(_spMc,"背包内每存在一种三兄弟精灵时自身每回合回复15点体力(最多每回合回复45点)");
                  DebugTrace.show("含有此技能特性！这个是一个特殊处理的，实际不是技能特性，有疑问问后台！");
               }
            });
         }
         else if((info.id == 2166 || info.id == 2167) && info.effectList.length > 0 && this.haveLongZunEffect(info.effectList))
         {
            this._specialEffectIcon = UIManager.getSprite("icon_bulaike_ni");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 260;
               this._specialEffectIcon.y = 10;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"上场第一回合免疫并反弹所有异常状态(每场战斗只能触发一次)");
            }
         }
      }
      
      private function haveLongZunEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 418)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveMaiErSiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 11)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveLingGuangEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 134)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveDarkGodEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 217)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveScareEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 221)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveLukasiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 227)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveAbosiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 186)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveRuiyaEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 254)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function onGaiyaEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.defEffectID == 1)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_gaiya_shixuezhili");
            ToolTipManager.add(this._specialEffectIcon,"嗜血之力");
         }
         else if(_loc2_.defEffectID == 2)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_gaiya_xieqilingran");
            ToolTipManager.add(this._specialEffectIcon,"邪气凛然");
         }
         else if(_loc2_.defEffectID == 3)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_gaiya_shipotianjing");
            ToolTipManager.add(this._specialEffectIcon,"石破天惊");
         }
         if(this._specialEffectIcon)
         {
            this._specialEffectIcon.x = 260;
            this._specialEffectIcon.y = 10;
            this._mainUI.addChild(this._specialEffectIcon);
         }
      }
      
      private function onBulaikeEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
         var _loc2_:BulaikeEffectInfo = param1.data as BulaikeEffectInfo;
         if(_loc2_.defEffectID == 1)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_bulaike_kuang");
            ToolTipManager.add(this._specialEffectIcon,"狂之印");
         }
         else if(_loc2_.defEffectID == 2)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_bulaike_ba");
            ToolTipManager.add(this._specialEffectIcon,"霸之体");
         }
         else if(_loc2_.defEffectID == 3)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_bulaike_yi");
            ToolTipManager.add(this._specialEffectIcon,"意之念");
         }
         if(this._specialEffectIcon)
         {
            this._specialEffectIcon.x = 260;
            this._specialEffectIcon.y = 10;
            this._mainUI.addChild(this._specialEffectIcon);
         }
      }
      
      private function onKaxiusiResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_798");
            if(this._specialEffectIcon)
            {
               this._specialEffectIcon.x = 262;
               this._specialEffectIcon.y = 8;
               this._specialEffectIcon.width = 30;
               this._specialEffectIcon.height = 28;
               this._mainUI.addChild(this._specialEffectIcon);
               ToolTipManager.add(this._specialEffectIcon,"狂攻之力");
            }
         }
      }
      
      private function addEffectBg() : void
      {
         var _loc2_:PetEffectIcon = null;
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            _loc2_ = new PetEffectIcon();
            _loc2_.name = "icon" + _loc1_;
            this._mainUI.addChild(_loc2_);
            _loc2_.x = 18 + (_loc2_.width + 4) * _loc1_;
            _loc2_.y = 112;
            _loc1_++;
         }
      }
      
      private function showIcon(param1:Array) : void
      {
         var _loc3_:PetEffectIcon = null;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            _loc3_ = this._mainUI.getChildByName("icon" + _loc2_) as PetEffectIcon;
            _loc3_.clear();
            if(_loc2_ < param1.length)
            {
               _loc3_.show(param1[_loc2_] as PetEffectInfo);
            }
            _loc2_++;
         }
      }
      
      private function clearOldBtn() : void
      {
         var _loc1_:NormalSkillBtn = null;
         for each(_loc1_ in this.skillBtnArray)
         {
            _loc1_.destroy();
            _loc1_ = null;
         }
         this.skillBtnArray = [];
      }
      
      public function hide() : void
      {
         this._mainUI.visible = false;
      }
      
      private function onShowComplete(param1:DisplayObject) : void
      {
         this._showMc = param1 as MovieClip;
         if(this._showMc)
         {
            DisplayUtil.stopAllMovieClip(this._showMc);
            this._mainUI.addChild(this._showMc);
            this._showMc.x = 68;
            this._showMc.y = 120;
            if(80 / this._showMc.width < 100 / this._showMc.height)
            {
               this._showMc.scaleX = this._showMc.scaleY = 80 / this._showMc.width;
            }
            else
            {
               this._showMc.scaleX = this._showMc.scaleY = 100 / this._showMc.height;
            }
         }
         if(this._id == 2394)
         {
            this._showMc.scaleY = this._showMc.scaleX = 1.3;
         }
         switch(this._petInfo.abilityType)
         {
            case 10:
               this._abilityLight = UIManager.getMovieClip("RedAbilityPetBright");
               break;
            case 20:
               this._abilityLight = UIManager.getMovieClip("BlueAbilityPetBright");
               break;
            case 32:
               this._abilityLight = UIManager.getMovieClip("YellowAbilityPetBright");
         }
         if(this._abilityLight)
         {
            this._abilityLight.x = 68;
            this._abilityLight.y = 120;
            this._mainUI.addChild(this._abilityLight);
         }
         this._mainUI.addChild(this._evolutionMC);
      }
      
      private function onEatSplItem(param1:SocketEvent) : void
      {
         var evt:SocketEvent = param1;
         SocketConnection.addCmdListener(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GET_PET_INFO,arguments.callee);
            var _loc3_:PetInfo = param1.data as PetInfo;
            if(_loc3_.id == 904 || _loc3_.id == 462 || _loc3_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc3_.catchTime,_loc3_.id);
            }
            PetManager.upDate();
         });
         SocketConnection.send(CommandID.GET_PET_INFO,this._petInfo.catchTime);
      }
      
      private function onEatUpItem(param1:SocketEvent) : void
      {
         var evt:SocketEvent = param1;
         SocketConnection.addCmdListener(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GET_PET_INFO,arguments.callee);
            var _loc3_:PetInfo = param1.data as PetInfo;
            if(_loc3_.id == 904 || _loc3_.id == 462 || _loc3_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc3_.catchTime,_loc3_.id);
            }
            PetManager.upDate();
         });
         SocketConnection.send(CommandID.GET_PET_INFO,this._petInfo.catchTime);
      }
      
      private function checkHasEat(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = KTool.readDataByBits(_loc2_,32);
         if(_loc3_[0] == 1)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_fanzhiji_lie");
            ToolTipManager.add(this._specialEffectIcon,"帮助烈刃一族必定繁殖出火刃");
         }
         if(this._specialEffectIcon)
         {
            this._specialEffectIcon.x = 260;
            this._specialEffectIcon.y = 10;
            this._mainUI.addChild(this._specialEffectIcon);
         }
      }
      
      private function checkHasSuperLeiyi(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = KTool.readDataByBits(_loc2_,32);
         if(_loc3_[1] == 1)
         {
            this._specialEffectIcon = UIManager.getSprite("icon_70");
            ToolTipManager.add(this._specialEffectIcon,"电系技能伤害提升");
         }
         if(this._specialEffectIcon)
         {
            this._specialEffectIcon.x = 260;
            this._specialEffectIcon.y = 10;
            this._mainUI.addChild(this._specialEffectIcon);
         }
      }
   }
}
