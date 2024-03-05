package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11631 extends BaseMapProcess
   {
       
      
      public function MapProcess_11631()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         super.init();
         playAnimate = new PlayAnimationComponent("JiShengGanRanMainMapMv",function():void
         {
            TaskDiaLogManager.single.playStory(dialogArr,function():void
            {
               playAnimate.destroy();
               BitBuffSetClass.setState(23585,1);
               MapManager.changeMapWithCallback(1287,function():void
               {
                  ModuleManager.showAppModule("JiShengGanRanSub1Panel");
               });
            });
         },1);
      }
      
      private function get dialogArr() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["刚才那只精灵，的确是螳螂没错。奇怪，我从来没有见过它，难道它是最近才来到这里的同族？"],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["为什么会有同族反抗我们？它身边的铁皮疙瘩又是什么东西？虽说我身为虫族的大将，但我更不想与我的族人为敌……"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["感觉这种事情还是请教一下将军大人比较好，可他最近似乎正好不在虫巢里……哦对了，据说使用他的召唤石板，可以联系到他！"],[" "]);
         return [_loc1_,_loc2_,_loc3_];
      }
   }
}
