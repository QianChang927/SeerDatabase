package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   
   public class NewYearsDaySpiritPageantMainPanel extends ActivityModel
   {
      public function NewYearsDaySpiritPageantMainPanel()
      {
         super();
         resUrl = "2018/1229/NewYearsDaySpiritPageantMainPanel";
         configUrl = "2018/1229/NewYearsDaySpiritPageant";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1229元旦节精灵庆典","打开活动主面板","2018运营活动");
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
            case "go":
               hide();
               ModuleManager.showAppModule("NewYearsDaySpiritPageantS1Panel");
               break;
            case "goto":
               hide();
               ModuleManager.showAppModule("NewYearsDaySpiritPageantS4Panel");
               break;
            case "info":
               KTool.showPetInfoPanel(4457);
         }
      }
   }
}

