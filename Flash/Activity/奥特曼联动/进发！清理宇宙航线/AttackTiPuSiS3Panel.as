package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class AttackTiPuSiS3Panel extends ActivityModel
   {
      public function AttackTiPuSiS3Panel()
      {
         super();
         configUrl = "2024/1025/AttackTiPuSi";
         resUrl = "2024/1025/AttackTiPuSiS3Panel";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         switch(btn_name)
         {
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "close":
               hide();
               ModuleManager.showAppModule("AttackTiPuSiMainPanel");
               break;
            case "gotoF":
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(!FightManager.isWin)
                  {
                     Alarm2.show("很遗憾挑战失败，请再接再厉");
                     ModuleManager.showAppModule("AttackTiPuSiS3Panel");
                  }
                  else
                  {
                     ModuleManager.showAppModule("AttackTiPuSiS1Panel");
                  }
               });
               FightManager.fightNoMapBoss("",18367);
               break;
            case "onekey":
               doAction("BuyOneKey").then(function():void
               {
                  doAction("FlgeReq1",7);
                  hide();
                  ModuleManager.showAppModule("AttackTiPuSiS1Panel");
               });
               return;
         }
      }
   }
}

