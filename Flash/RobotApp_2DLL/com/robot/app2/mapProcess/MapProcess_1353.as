package com.robot.app2.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.FinalBattleTask8Plot;
   import com.robot.app2.mapProcess.control.PlotUITask;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1353 extends BaseMapProcess
   {
       
      
      private var task:PlotUITask;
      
      public function MapProcess_1353()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this.update();
      }
      
      protected function update() : void
      {
         this.task = new FinalBattleTask8Plot();
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         if(this.task != null)
         {
            this.task.destroy();
         }
         super.destroy();
      }
   }
}
