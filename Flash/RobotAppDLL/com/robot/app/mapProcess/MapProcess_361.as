package com.robot.app.mapProcess
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_361 extends BaseMapProcess
   {
       
      
      public function MapProcess_361()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.y = 660;
         MapNamePanel.hideExp();
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.y = 0;
         MapNamePanel.showExp();
      }
   }
}
