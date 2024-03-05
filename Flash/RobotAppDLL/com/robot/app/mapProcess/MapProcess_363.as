package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_363 extends BaseMapProcess
   {
       
      
      public function MapProcess_363()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.y = 660;
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.y = 0;
      }
   }
}
