package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_11272 extends BaseMapProcess
   {
       
      
      public function MapProcess_11272()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         getDefinitionByName("com.robot.app2.control.DaysEvilDragonSuperEvolutionController1").initMap(this);
      }
      
      override public function destroy() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         getDefinitionByName("com.robot.app2.control.DaysEvilDragonSuperEvolutionController1").destroy();
         super.destroy();
      }
   }
}