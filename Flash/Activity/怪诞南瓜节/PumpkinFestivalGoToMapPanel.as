package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   
   public class PumpkinFestivalGoToMapPanel extends ActivityModel
   {
      public function PumpkinFestivalGoToMapPanel()
      {
         super();
         resUrl = "2024/1101/PumpkinFestivalGoToMapPanel";
         configUrl = "2022/1216/CultivationGoToMap";
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
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               break;
            case "go_1":
               hide();
               ModuleManager.showAppModule("PumpkinGuessEnter");
               break;
            case "go_2":
               hide();
               ModuleManager.showAppModule("CandyGreatBattleGameMainPanel");
               break;
            case "go_3":
               hide();
               ModuleManager.showAppModule("PumpkinGhostKidMainPanel");
               break;
            case "gotoBtn":
               hide();
               ModuleManager.showAppModule("MasterSpiritNestWanShengSkinForSaleMianPanel");
         }
      }
   }
}

