package com.robot.app.task.control
{
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_846
   {
      
      public static const TASK_ID:uint = 846;
      
      private static var panel:AppModel;
       
      
      public function TaskController_846()
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
         TasksManager.accept(TASK_ID,function():void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你和我一起去推特星找丹迪，商量接下来的计划。"],["卡璐璐和阿铁打不去吗？"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["我和阿铁打要准备战斗物资，稍后就赶过去与你们汇合。"],["哦，好吧！"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["赛小息，你和" + MainManager.actorInfo.formatNick + "可别给咱们推特星战队丢脸！一定要找到其他的元素之星。"],["这个是必须的，我有信心。"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["切！阿铁打，你少瞧不起人，等着瞧吧！"],["好了，好了，咱们出发咯。"],[function():void
                        {
                           TasksManager.complete(TASK_ID,0,function():void
                           {
                              MapManager.changeMap(690);
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.SEER,["丹迪，杰西的伤势怎么样了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["好点了，但还需要休息一段时间。"],["嗯，希望他早日康复。"],[function():void
                  {
                     NpcDialog.show(NPC.DANDI,["杰西告诉了我有关土元素之星的事情！"],["（开始讲述……）"],[function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_846_4"),function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["嗯，原来如此，咱们赶紧去迷雾森林寻找土元素之星吧！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.DANDI,["出发前，我必须仔细向你们介绍迷雾森林的情况，让大家做好充分的准备。"],["（丹迪开始讲述……）"],[function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("task_846_3"),function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["哇哦！那种迷糊糊，找不到路径的感觉好恐怖哦！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["是呀！这次的挑战可大了，但无论如何，我们都要勇往直前！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.DANDI,["迷雾森林就在新泽部落的东面！准备好了吗？"],["额……出……出……出发！"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,1,function():void
                                             {
                                                MapManager.changeMap(697);
                                             });
                                          }]);
                                       });
                                    });
                                 });
                              }]);
                           });
                        });
                     }]);
                  }]);
               });
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
