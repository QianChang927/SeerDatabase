package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_11640 extends BaseMapProcess
   {
       
      
      public function MapProcess_11640()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         super.init();
         playAnimate = new PlayAnimationComponent("TimeOpenAgainMainMapMv",function():void
         {
            playAnimate.destroy();
            TaskDiaLogManager.single.playStory(dialogArr,function():void
            {
               var playAnimate:* = undefined;
               conLevel["mc"].gotoAndStop(2);
               playAnimate = new PlayAnimationComponent("TimeOpenAgainMainMapMv",function():void
               {
                  playAnimate.destroy();
                  TaskDiaLogManager.single.playStory(dialogArr2,function():void
                  {
                     SocketConnection.sendByQueue(42364,[15,1],function():void
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           ModuleManager.showAppModule("TimeOpenAgainSubPanel");
                        });
                     });
                  });
               },2);
            });
         },1);
      }
      
      private function get dialogArr() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2716,["多亏了茉蕊儿，我还以为这次死定了。"],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2742,["你没事真是太好了。在白虎和玄武之后，我们无法再承受另一位伙伴的离去了。"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2716,["现在局势怎么样？他们如此气势汹汹……我们还有机会吗？"],[" "]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2742,["大家相互救援，最危急的时刻已经过去了。"],[" "]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2746,["多亏了英卡洛斯和卡修斯，他们俩是我们扭转输赢的决定性力量！现在，英卡洛斯甚至跟着贾斯汀一起，主动袭击大暗黑天去了！"],[" "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2716,["真是了不起的精灵啊。这个世界，需要更多的英雄！"],[" "]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["什么？英卡洛斯居然在主动袭击？他们不要命了吗？"],[" "]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["这……不行，我也要跟他们一起。他们一定缺少一个治疗，我必须立刻过去！"],[" "]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["朱雀，我要怎么才能追上他们？"],[" "]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2746,["你可以去问问普雷空间站的几米。可是，这太危险了！"],[" "]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["放心，不会有事的。我可是草系精灵王，只要那里有植物，我就有办法生存下来！"],[" "]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["青龙已经恢复的差不多了，只需再静养一段时间，就能强大如初。这段时间就拜托你们了！"],[" "]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2742,["好……一路小心啊！"],["我们一定会凯旋归来的！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_];
      }
      
      private function get dialogArr2() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,521,["欢迎您，精灵王殿下。"],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["你好，几米。听说英卡洛斯等人曾经来过这里？"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,521,["是的，他们借助这里的时空枢纽，想要前往大暗黑天的老巢进行突袭。"],[" "]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["难道他们已经知道大暗黑天长老们的藏身之处了？"],[" "]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,521,["是迪恩带回的消息。可惜，只是一个大致的方位，时空的定位非常模糊。"],[" "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2745,["我想要跟他们一起！守护者，能帮忙再开启一次时空枢纽吗？"],[" "]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,521,["开启枢纽所需要的能量已经在上次开启时消耗殆尽了，必须重新注入能量，才能再次开启！"],["快告诉我该如何注入能量吧！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_];
      }
   }
}
