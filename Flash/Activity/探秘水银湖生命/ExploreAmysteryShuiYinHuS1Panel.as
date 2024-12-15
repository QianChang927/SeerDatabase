package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class ExploreAmysteryShuiYinHuS1Panel extends ActivityModel
   {
      public function ExploreAmysteryShuiYinHuS1Panel()
      {
         super();
         resUrl = "2024/1213/ExploreAmysteryShuiYinHuS1Panel";
         configUrl = "2024/1213/ExploreAmysteryShuiYinHu";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1213探秘水银湖生命","打开互动指南弹窗","2024运营活动");
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
            case "okayBtn":
               hide();
               ModuleManager.showAppModule("ExploreAmysteryShuiYinHuMainPanel");
         }
      }
   }
}

