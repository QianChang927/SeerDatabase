package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.AbilityPowerRiotTask3Plot;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class MapProcess_11794 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11794()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapPlayerAndMonster();
         this.update();
      }
      
      protected function update() : void
      {
         this.task = new AbilityPowerRiotTask3Plot(topLevel as MovieClip);
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         KTool.showMapPlayerAndMonster();
         if(this.task != null)
         {
            this.task.destroy();
         }
         super.destroy();
      }
   }
}
