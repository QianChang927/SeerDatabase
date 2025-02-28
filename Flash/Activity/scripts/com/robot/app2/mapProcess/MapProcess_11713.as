package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.mapProcess.control.StonyEyesSub2Task;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11713 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11713()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11713;
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
            depthLevel["mc"]["ani_1"].visible = false;
            if(_loc2_ == 2)
            {
               depthLevel["mc"]["arrow_1"].visible = false;
               depthLevel["mc"]["npc_1"].visible = false;
               depthLevel["mc"]["mc"].gotoAndStop(1);
               task = new StonyEyesSub2Task(depthLevel["mc"]);
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
