package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class PumpkinGuessEnter extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      public function PumpkinGuessEnter()
      {
         super();
         resUrl = "2024/1101/PumpkinGuessEnter";
         configUrl = "2024/1101/PumpkinGuessConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
            StatManager.sendStat2014("1101南瓜猜猜猜大挑战","打开了南瓜猜猜猜大挑战主面板","2024运营活动");
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("PumpkinFestivalGoToMapPanel");
               break;
            case "btnGoto":
               StatManager.sendStat2014("1101南瓜猜猜猜大挑战","打开了南瓜猜猜猜关卡选择界面","2024运营活动");
               ModuleManager.showAppModule("PumpkinGuessLevel");
               this.hide();
               break;
            case "btnStore":
               StatManager.sendStat2014("1101南瓜猜猜猜大挑战","打开了南瓜猜猜猜商店界面","2024运营活动");
               ModuleManager.showAppModule("PumpkinGuessStore");
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
      
      private function updateData() : void
      {
      }
      
      private function updateDisplay() : void
      {
      }
   }
}

