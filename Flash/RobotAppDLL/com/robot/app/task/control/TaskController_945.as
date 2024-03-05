package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_945
   {
      
      public static const TASK_ID:uint = 945;
      
      private static var panel:AppModel;
       
      
      public function TaskController_945()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.IRIS,["资料室里有很多丰富的飞船资料和一些神奇的礼物哦！小赛尔如果有时间的话就多来这里逛逛吧！"],["！怪异的哈莫雷特！","恩恩，我有时间一定会来的！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.IRIS,["哎呀！" + MainManager.actorInfo.formatNick + "，我正想找你呢！有一个坏消息和一个好消息，你想先听哪个呢？"],["哎呀！头疼死了，发生什么事啦！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["快说是什么坏消息吧！难道是飞船又出了什么故障，还是第五星系又出现什么怪事了？"],["不对不对！你听我说！"],[function():void
                  {
                     NpcDialog.show(NPC.IRIS,["在你来之前，0xff0000赛小息0xffffff他们来找过我，说是为了让你好好休息！所以他们先前往艾伦星了！！！"],["什么！这些家伙居然！！！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_945_dialogue"),function():void
                        {
                           NpcDialog.show(NPC.IRIS,["事情就是这样！我当时没有阻止他们，因为我知道就算再怎么说也是无用功的！所以…"],["恩恩！我这就去找他们！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["不能让小息他们独自冒险，我们都是经历过出生入死的好伙伴！再说0xff0000帕罗狄亚诡计多端，我必须立刻赶过去0xffffff！"],["恩恩，赛尔你可要小心啊！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["恩，希望我现在出发还能赶上他们！我有预感不好的事情就要发生了！"],["立刻前往艾伦星！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_945_1"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,0,function():void
                                       {
                                          MapManager.changeMap(710);
                                       });
                                    });
                                 }]);
                              }]);
                           }]);
                        },false);
                     }]);
                  }]);
               }]);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
