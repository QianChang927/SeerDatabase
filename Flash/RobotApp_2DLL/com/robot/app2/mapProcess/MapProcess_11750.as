package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.mapProcess.control.HalloweenRevelPartyTask1Plot;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11750 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11750()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11750;
         KTool.hideMapPlayerAndMonster();
         this.update();
      }
      
      protected function update() : void
      {
         this.task = new HalloweenRevelPartyTask1Plot(depthLevel["mc"]);
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         KTool.showMapPlayerAndMonster();
         if(this.task != null)
         {
            this.task.destroy();
         }
         super.destroy();
      }
   }
}
