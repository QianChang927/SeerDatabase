package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_11632 extends BaseMapProcess
   {
       
      
      public function MapProcess_11632()
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
               var playAnimate2:* = undefined;
               playAnimate.destroy();
               playAnimate2 = new PlayAnimationComponent("JiShengGanRanMainMapMv",function():void
               {
                  playAnimate2.destroy();
                  SocketConnection.sendByQueue(46320,[99,1],function():void
                  {
                     MapManager.changeMapWithCallback(1287,function():void
                     {
                        ModuleManager.showAppModule("JiShengGanRanSub3Panel");
                     });
                  });
               },3);
            });
         },2);
      }
      
      private function get dialogArr() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["拉贾克斯将军！"],[" "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["哦？是卡杉德拉啊。如此匆忙使用石板召唤，遇到了什么急事啊？"],[" "]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["刚才有一只螳螂进攻虫巢，我不知道该怎么处置他，特来请求将军的指示。"],[" "]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["螳螂？是你的族人嘛，你可将他抓住了？"],[" "]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["没有，他被同伴救走了。"],[" "]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["废物！你身为虫族大将也有不少时日了，怎么连放走敌人这种蠢事也能做的出来？不要说他同伴很强，进入我们的虫巢，我不信他能杀出去！"],[" "]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["可是将军，他跟我是同族，难道不也是虫族的一员吗？"],[" "]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["你让我非常失望，卡杉德拉。我觉得，是时候让你休息一下了，你可能已经在连续的征战中迷失了自我。"],[" "]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["不！将军，我……"],[" "]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["只要是反抗我们的生物，就应该统统杀死！虫族必须万众一心，我们不需要听到第二种声音！"],[" "]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["难道面对自己人，也要痛下杀手吗？"],[" "]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["自己人？哼，他算什么自己人？卡杉德拉，是我将你提拔到了这个位子，我丑话说在前面，如果哪天你做了什么不可饶恕的事情，届时，你也算不上什么“自己人”了！"],[" "]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["……是，将军，我一定为虫族赴汤蹈火。"],[" "]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["我手头的事情已经忙完了，你说的这只螳螂我很有兴趣，我会尽快赶回虫巢。卡杉德拉，我需要更多的凝胶，这可以加快我的速度！"],[" "]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2873,["明白！"],[" "]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2876,["让我亲自来了解他们吧，虫族的威严，不容他人侵犯！"],[" "]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_];
      }
   }
}
