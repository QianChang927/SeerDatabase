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
   import com.robot.core.utils.CommonUI;
   
   public class BigShotRideSuitS1Panel extends ActivityModel
   {
      private var forever_124299:int;
      
      private var itemNum:int;
      
      private var daily_203162:int;
      
      public function BigShotRideSuitS1Panel()
      {
         super();
         resUrl = "2024/1122/BigShotRideSuitS1Panel";
         configUrl = "2024/1122/BigShotRideSuit";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.forever_124299 = getValue("forever_124299");
         this.daily_203162 = getValue("daily_203162");
         this.itemNum = getValue("itemNum");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         _ui["numTxt"].text = this.itemNum;
         if(this.daily_203162 >= 4)
         {
            Alarm2.show("今日挑战已完成！");
            hide();
            ModuleManager.showAppModule("BigShotRideSuitMainPanel");
            return;
         }
         for(var i:int = 1; i <= 4; i++)
         {
            if(this.daily_203162 >= i)
            {
               _ui["flag_" + i].visible = true;
            }
            else
            {
               _ui["flag_" + i].visible = false;
            }
            if(i - 1 == this.daily_203162)
            {
               CommonUI.setEnabled(_ui["fight_" + i],true);
            }
            else
            {
               CommonUI.setEnabled(_ui["fight_" + i],false);
            }
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("BigShotRideSuitMainPanel");
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "plus":
               doAction("Buy_1").then(refresh);
               break;
            case "fight_" + index:
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showAppModule("BigShotRideSuitS1Panel");
               });
               FightManager.fightNoMapBoss("",18694 + index);
         }
      }
   }
}

