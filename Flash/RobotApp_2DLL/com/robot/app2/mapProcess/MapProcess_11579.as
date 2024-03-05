package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_11579 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11579()
      {
         super();
      }
      
      override protected function init() : void
      {
         var cmd:int = 0;
         var playAnimate:PlayAnimationComponent = null;
         var playAnimate1:PlayAnimationComponent = null;
         super.init();
         if(StaticObjectControll.containKey("YearVip2018PreSub1MainKey"))
         {
            this._index = StaticObjectControll.getObjectByKey("YearVip2018PreSub1MainKey");
         }
         cmd = this._index > 10 ? 2 : 1;
         if(this._index % 10 == 1)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("YearVip2018PreSub1MainFullMv1"),function():void
            {
               var playAnimate:PlayAnimationComponent = null;
               playAnimate = new PlayAnimationComponent("YearVip2018PreSub1MainMapMv",function():void
               {
                  TaskDiaLogManager.single.playStory(dialogArr1,function():void
                  {
                     SocketConnection.sendByQueue(43748,[1,cmd],function():void
                     {
                        ModuleManager.showAppModule("YearVip2018PreSub1MainPanel");
                     });
                     playAnimate.destroy();
                  });
               },1);
            });
         }
         else if(this._index % 10 == 2)
         {
            playAnimate = new PlayAnimationComponent("YearVip2018PreSub1MainMapMv",function():void
            {
               playAnimate.destroy();
               TaskDiaLogManager.single.playStory(dialogArr2,function():void
               {
                  SocketConnection.sendByQueue(43748,[1,cmd],function():void
                  {
                     ModuleManager.showAppModule("YearVip2018PreSub1MainPanel");
                  });
               });
            },2);
         }
         else if(this._index % 10 == 3)
         {
            playAnimate1 = new PlayAnimationComponent("YearVip2018PreSub1MainMapMv",function():void
            {
               playAnimate1.destroy();
               TaskDiaLogManager.single.playStory(dialogArr3,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("YearVip2018PreSub1MainFullMv2"),function():void
                  {
                     SocketConnection.sendByQueue(43748,[1,cmd],function():void
                     {
                        ModuleManager.showAppModule("YearVip2018PreSub1MainPanel");
                     });
                  });
               });
            },3);
         }
      }
      
      private function get dialogArr1() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["这个问题我之前就已经想过，可是英雄圣殿的宗旨，我们不得违抗。"],["此时此刻，我们若不出手，难道英雄殿真这么迂腐吗？"]);
         _loc1_.isNewDialog_1 = true;
         return [_loc1_];
      }
      
      private function get dialogArr2() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2842,["尽管索伦森之祸未平，魔灵王又东山再起，但我还是相信圣光联军，相信着谱尼！"],["可你没看见圣光联军在节节败退吗？"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2842,["圣光的力量，并不是你我所能完全臆测的，况且就算我们现在出手，那么以后呢？每一次出现这样的情况，我们都要带着这股力量横扫一切吗？"],["那么你认为？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2842,["我还是坚信，只有靠自己的力量战胜这场灾难，真正的光明才会到来。"],["……"]);
         _loc1_.isNewDialog_1 = true;
         _loc2_.isNewDialog_1 = true;
         _loc3_.isNewDialog_1 = true;
         return [_loc1_,_loc2_,_loc3_];
      }
      
      private function get dialogArr3() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["“他”怎么会在这个时候回来？"],["已经很久，很久，没有见到过他了。"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["“他”不会不知道，我们能察觉他曾经来过的气息。"],["可“他”还是这么做了，而且还未让我们一见。"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["“他”从以前开始就是这样，飘忽不定，内心难测。"],["还很喜欢无视圣殿的规矩。"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["到了现在，我相信，按照“他”的性格，一定不会坐视不管，并且已经开始行动了"],["这的确像“他”才会做出来的事情。"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2696,["看来这次，圣光联军已无需我们出手相助了。"],["因为“他”已再临。"]);
         _loc1_.isNewDialog_1 = true;
         _loc2_.isNewDialog_1 = true;
         _loc3_.isNewDialog_1 = true;
         _loc4_.isNewDialog_1 = true;
         _loc5_.isNewDialog_1 = true;
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_];
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
