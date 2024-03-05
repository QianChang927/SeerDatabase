package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.AbilityPowerRiotTask1Plot;
   import com.robot.app2.mapProcess.control.AbilityPowerRiotTask2Plot;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class MapProcess_11793 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11793()
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
         KTool.getMultiValue([104686],function(param1:Array):void
         {
            if(KTool.getByte(param1[0],0) >= 8)
            {
               task = new AbilityPowerRiotTask2Plot(topLevel as MovieClip);
            }
            else
            {
               task = new AbilityPowerRiotTask1Plot(topLevel as MovieClip);
            }
         });
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
