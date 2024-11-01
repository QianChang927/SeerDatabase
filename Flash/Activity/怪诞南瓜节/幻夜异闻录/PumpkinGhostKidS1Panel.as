package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class PumpkinGhostKidS1Panel extends ActivityModel
   {
      private var _dayCount:int;
      
      private var _time:int;
      
      public function PumpkinGhostKidS1Panel()
      {
         super();
         resUrl = "2020/1030/PumpkinGhostKidS1Panel";
         configUrl = "2020/1030/PumpkinGhostKid";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this._dayCount = getValue("dayCount");
         this._time = getValue("time");
         _ui["num"].text = 4 - this._dayCount;
         if(this._dayCount != 4)
         {
            CommonUI.setEnabled(_ui["plus"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["plus"],true);
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
               ModuleManager.showAppModule("PumpkinGhostKidMainPanel");
               break;
            case "go":
               if(this._time == 0)
               {
                  if(this._dayCount != 4)
                  {
                     doAction("FlgeReq1",1).then(function():void
                     {
                        hide();
                        ModuleManager.showAppModule("PumpkinGhostKidS2Panel");
                     });
                  }
                  else
                  {
                     Alarm2.show("今日剩余次数不足，请明日再来。");
                  }
               }
               else
               {
                  hide();
                  ModuleManager.showAppModule("PumpkinGhostKidS2Panel");
               }
               break;
            case "plus":
               doAction("BuyItemNum2").then(refresh);
         }
      }
   }
}

