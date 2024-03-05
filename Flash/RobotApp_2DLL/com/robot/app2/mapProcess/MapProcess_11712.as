package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.mapProcess.control.PlotTask;
   import com.robot.app2.mapProcess.control.StonyEyesSub1Task;
   import com.robot.app2.mapProcess.control.StonyEyesSub4Task;
   import com.robot.app2.mapProcess.control.StonyEyesSub5Task;
   import com.robot.app2.mapProcess.control.StonyEyesSub6Task;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11712 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task:PlotTask;
      
      public function MapProcess_11712()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11712;
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
            if(_loc2_ == 1)
            {
               depthLevel["mc"]["mc_1"].visible = true;
               depthLevel["mc"]["mc_2"].visible = false;
               depthLevel["mc"]["mc_1"].gotoAndStop(2);
               task = new StonyEyesSub1Task(depthLevel["mc"]);
            }
            else if(_loc2_ == 4)
            {
               depthLevel["mc"]["mc_1"].visible = true;
               depthLevel["mc"]["mc_2"].visible = true;
               depthLevel["mc"]["ani_1"].visible = false;
               depthLevel["mc"]["mc_1"].gotoAndStop(1);
               depthLevel["mc"]["mc_2"].gotoAndStop(2);
               task = new StonyEyesSub4Task(depthLevel["mc"]);
            }
            else if(_loc2_ == 5)
            {
               depthLevel["mc"]["mc_1"].visible = true;
               depthLevel["mc"]["mc_2"].visible = true;
               depthLevel["mc"]["ani_1"].visible = false;
               depthLevel["mc"]["mc_1"].gotoAndStop(1);
               depthLevel["mc"]["mc_2"].gotoAndStop(2);
               task = new StonyEyesSub5Task(depthLevel["mc"]);
            }
            else if(_loc2_ == 6)
            {
               depthLevel["mc"]["mc_1"].visible = true;
               depthLevel["mc"]["mc_2"].visible = true;
               depthLevel["mc"]["ani_1"].visible = false;
               depthLevel["mc"]["mc_1"].gotoAndStop(2);
               depthLevel["mc"]["mc_2"].gotoAndStop(1);
               task = new StonyEyesSub6Task(depthLevel["mc"]);
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
