package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.mapProcess.control.StonyEyesSub3Task;
   import com.robot.app2.mapProcess.control.StonyEyesSub5Task;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11711 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11711()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11711;
         KTool.hideMapPlayerAndMonster();
         this.update();
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([104512],function(param1:Array):void
         {
            var _loc2_:int = param1[0] + 1;
            if(task != null)
            {
               task.destroy();
            }
            if(_loc2_ == 3)
            {
               task = new StonyEyesSub3Task(depthLevel["mc"]);
            }
            else if(_loc2_ == 5)
            {
               task = new StonyEyesSub5Task(depthLevel["mc"]);
            }
         });
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
