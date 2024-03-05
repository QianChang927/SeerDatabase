package com.robot.app.mapProcess
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_360 extends BaseMapProcess
   {
       
      
      public function MapProcess_360()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(false);
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").enterMap360();
      }
      
      override public function destroy() : void
      {
         MapNamePanel.showExp();
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").leaveMap360();
      }
   }
}
