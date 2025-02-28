package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11234 extends BaseMapProcess
   {
       
      
      public function MapProcess_11234()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
      }
   }
}
