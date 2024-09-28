package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class ShangYeJieZhanZhengMainPanel extends ActivityModel
   {
      private var score:int;
      
      public function ShangYeJieZhanZhengMainPanel()
      {
         super();
         resUrl = "2024/0927/ShangYeJieZhanZhengMainPanel";
         configUrl = "2024/0927/ShangYeJieZhanZheng";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("0927商业街的战争","进入【商业街的战争】活动主界面","2024运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.score = getValue("scoreCf");
         this.score = this.score >> 16 & 0xFFFF;
         _ui["txt"].text = this.score.toString();
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
               ModuleManager.showAppModule("NationalDayActivityGoToMapPanel");
               break;
            case "go":
               this.hide();
               ModuleManager.showAppModule("ShangYeJieZhanZhengShilianPanel");
               break;
            case "reward":
               this.hide();
               ModuleManager.showAppModule("ShangYeJieZhanZhengRewardPanel");
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

