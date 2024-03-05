package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_358 extends BaseMapProcess
   {
       
      
      public function MapProcess_358()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(false);
         conLevel["leiyiTask"].visible = false;
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").enterMap358();
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").leaveMap358();
      }
   }
}
