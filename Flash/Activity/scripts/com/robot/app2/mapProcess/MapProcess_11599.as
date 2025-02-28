package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11599 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11599()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         super.init();
         if(BitBuffSetClass.getState(23564) == 0)
         {
            playAnimate = new PlayAnimationComponent("FeilianSecretPlanMainMapMv",function():void
            {
               BitBuffSetClass.setState(23564,1);
               playAnimate.destroy();
               TaskDiaLogManager.single.playStory(dialogArr,function():void
               {
                  ModuleManager.showAppModule("FeilianSecretPlanSubPanel");
               });
            },1);
         }
      }
      
      private function get dialogArr() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1512,["只是…."],["……"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1512,["敌人在暗，我们在明！况且保卫团人数有限！我们没有明确的情报得知大暗黑天下一步的进攻方向！现在只能分散去保护五大神兽了！"],["这确实是个问题！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,20,["不过，船长放心吧！我也会去帮忙的！拼尽全力我也要保卫神兽们的安全！"],["好！"]);
         return [_loc1_,_loc2_,_loc3_];
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
