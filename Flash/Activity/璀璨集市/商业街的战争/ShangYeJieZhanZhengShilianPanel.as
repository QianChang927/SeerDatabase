package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import org.taomee.events.SocketEvent;
   
   public class ShangYeJieZhanZhengShilianPanel extends ActivityModel
   {
      private var score:int;
      
      private var cScore:int;
      
      private var selectBoss:Object;
      
      private var fightTime:int;
      
      private var needCf:int;
      
      private var myCf:int;
      
      private var mybuff:int;
      
      private var bossInfos:Array;
      
      private var maxTime:int = 5;
      
      private var selectIdx:int = -1;
      
      private var fightBoo:Boolean;
      
      public function ShangYeJieZhanZhengShilianPanel()
      {
         super();
         resUrl = "2024/0927/ShangYeJieZhanZhengShilianPanel";
         configUrl = "2024/0927/ShangYeJieZhanZheng";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         this.fightBoo = data.boo;
         this.score = data.score;
         this.myCf = data.cf;
         this.selectIdx = data.boss;
      }
      
      override public function show() : void
      {
         var j:int;
         super.show();
         _ui["tip"].visible = false;
         for(j = 0; j < 18; j++)
         {
            _ui["mcc"]["icon_" + j].gotoAndStop(j + 1);
         }
         if(!BitBuffSetClass.getState(24476))
         {
            BitBuffSetClass.setState(24476,1);
            DialogControl.showAllDilogs(162,1).then(function():void
            {
               _ui["tip"].visible = true;
            });
         }
      }
      
      override protected function updatePanel() : void
      {
         var tmpValue:int;
         var tmpCf:int;
         var tmpScore:int;
         var bosses:Array;
         var j:int;
         var str:String = null;
         var tmpStrs:Array = null;
         var boss:Object = null;
         var tmpNeed:int = 0;
         var inited:Boolean = getValue("inited") == 1;
         if(!inited)
         {
            SocketConnection.sendByQueue(41950,[56,11],function(e:SocketEvent):void
            {
               refresh();
            });
            return;
         }
         tmpValue = int(getValue("scoreCf"));
         tmpCf = tmpValue & 0xFFFF;
         tmpScore = tmpValue >> 16 & 0xFFFF;
         if(tmpCf > this.myCf && this.fightBoo)
         {
            doAction("alarm2",[tmpCf - this.myCf,tmpScore - this.score]);
         }
         this.myCf = tmpCf;
         this.score = tmpScore;
         _ui["myScore"].text = this.score;
         _ui["myCf"].text = this.myCf;
         this.mybuff = getValue("value") >> 24 & 0xFF;
         _ui["mybuff"].gotoAndStop(this.mybuff == 0 ? 6 : this.mybuff);
         bosses = getValue("bosses");
         this.bossInfos = [];
         for(j = 0; j < 19; j++)
         {
            boss = {};
            str = bosses[j];
            tmpStrs = str.split("_");
            boss.need = int(tmpStrs[0]);
            boss.buff = int(tmpStrs[1]);
            boss.cf = int(tmpStrs[2]);
            boss.score = int(tmpStrs[3]);
            boss.seer = int(tmpStrs[4]);
            this.bossInfos.push(boss);
            tmpNeed = this.getNeedBuff(boss.need,j);
            if(j < 18)
            {
               _ui["mcc"]["cf_" + j].gotoAndStop(this.myCf >= tmpNeed ? 1 : 2);
               _ui["mcc"]["cf_" + j]["cf"].text = boss.need + "";
            }
            if(Boolean(_ui["mcc"]["flag_" + j]))
            {
               _ui["mcc"]["flag_" + j].visible = KTool.getBit(getValue("value"),j + 1) == 1;
            }
         }
         _ui["seer"].gotoAndStop(this.myCf >= 1000 ? 3 : (this.myCf >= 600 ? 2 : 1));
         if(this.fightBoo && Boolean(FightManager.isWin))
         {
            this.selectIdx = -1;
         }
         this.fightTime = getValue("time");
         this.clickBoss(this.selectIdx);
         if(Boolean(_ui["seerHouse"]))
         {
            _ui["seerHouse"].gotoAndStop(this.myCf >= 1000 ? 1 : (this.myCf >= 600 ? 2 : 3));
         }
         this.fightBoo = false;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ShangYeJieZhanZhengMainPanel");
               break;
            case "plus":
               KTool.buyProductWithExchange(260970,14388,function():void
               {
                  refresh();
               });
               break;
            case "fight_0":
               if(this.fightTime >= this.maxTime)
               {
                  doAction("alarm");
                  return;
               }
               this.hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showAppModule("ShangYeJieZhanZhengShilianPanel",{
                     "cf":myCf,
                     "score":score,
                     "boo":true
                  });
               });
               FightManager.fightNoMapBoss("",18645);
               break;
            case "fight_1":
               if(this.myCf >= this.needCf)
               {
                  if(this.fightTime >= this.maxTime)
                  {
                     doAction("alarm");
                     return;
                  }
                  this.hide();
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     ModuleManager.showAppModule("ShangYeJieZhanZhengShilianPanel",{
                        "cf":myCf,
                        "score":score,
                        "boo":true,
                        "boss":selectIdx
                     });
                  });
                  FightManager.fightNoMapBoss("",18627 + this.selectIdx);
               }
               else
               {
                  doAction("alarm1");
               }
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "btn_" + index:
               this.clickBoss(index);
               break;
            case "pclose":
               _ui["tip"].visible = false;
               break;
            case "btn":
               _ui["tip"].visible = true;
         }
      }
      
      private function getNeedBuff(value:int, selectValue:int = -1) : int
      {
         var tmpNeed:int = 0;
         var tmpSelect:int = selectValue == -1 ? this.selectIdx : selectValue;
         switch(this.mybuff)
         {
            case 1:
               if(tmpSelect % 2 == 0)
               {
                  tmpNeed = value - 100;
               }
               else
               {
                  tmpNeed = value;
               }
               break;
            case 2:
               if(tmpSelect % 2 == 1)
               {
                  tmpNeed = value - 100;
               }
               else
               {
                  tmpNeed = value;
               }
               break;
            case 3:
               if(tmpSelect >= 9)
               {
                  tmpNeed = value - 100;
               }
               else
               {
                  tmpNeed = value;
               }
               break;
            case 4:
               if(tmpSelect % 2 == 0)
               {
                  tmpNeed = value - 200;
               }
               else
               {
                  tmpNeed = value;
               }
               break;
            case 5:
               if(tmpSelect % 2 == 1)
               {
                  tmpNeed = value - 200;
               }
               else
               {
                  tmpNeed = value;
               }
               break;
            default:
               tmpNeed = value;
         }
         return tmpNeed;
      }
      
      private function clickBoss(index:int) : void
      {
         this.selectIdx = index;
         if(this.selectIdx == -1)
         {
            _ui["mc"].gotoAndStop(2);
            return;
         }
         _ui["mc"].gotoAndStop(1);
         if(Boolean(_ui["mc"]["leftTxt"]))
         {
            _ui["mc"]["leftTxt"].text = this.maxTime - this.fightTime;
            CommonUI.setEnabled(_ui["mc"]["plus"],this.fightTime >= this.maxTime);
         }
         this.selectBoss = this.bossInfos[index];
         var bossScore:int = int(this.selectBoss.score);
         var bossCf:int = int(this.selectBoss.cf);
         var bossbuf:int = int(this.selectBoss.buff);
         _ui["mc"]["bossScore"].text = bossScore;
         _ui["mc"]["bossCf"].text = bossCf;
         this.needCf = this.getNeedBuff(this.selectBoss.need);
         _ui["mc"]["buff"].gotoAndStop(bossbuf == 0 ? 6 : bossbuf);
         _ui["mc"]["bossIcon"].gotoAndStop(index + 1);
         _ui["mc"]["numIcon"].gotoAndStop(index + 1);
         _ui["mc"]["needMc"].gotoAndStop(this.myCf >= this.needCf ? 1 : 2);
         _ui["mc"]["needMc"]["cf"].text = this.selectBoss.need;
         CommonUI.setEnabled(_ui["mc"]["fight_1"],KTool.getBit(getValue("value"),index + 1) == 0);
         if(this.selectIdx == 18)
         {
            _ui["mc"]["house"].gotoAndStop(4);
         }
         else
         {
            _ui["mc"]["house"].gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         this.selectBoss = null;
         this.bossInfos = null;
         super.hide();
      }
   }
}

