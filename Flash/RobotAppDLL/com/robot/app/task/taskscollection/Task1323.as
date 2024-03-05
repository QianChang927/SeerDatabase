package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class Task1323
   {
      
      private static const TASKID:int = 1323;
       
      
      public function Task1323()
      {
         super();
      }
      
      public static function init(param1:MovieClip) : void
      {
         MapListenerManager.add(param1,onClicked,"雪啦啦");
         if(TasksManager.getTaskStatus(TASKID) == TasksManager.COMPLETE)
         {
            param1.gotoAndStop(7);
         }
         else
         {
            param1.gotoAndStop(1);
         }
      }
      
      private static function onClicked(param1:Event) : void
      {
         var mc:MovieClip = null;
         var e:Event = param1;
         mc = e.target as MovieClip;
         if(mc.currentFrame == 1)
         {
            MapManager.currentMap.controlLevel["boss"].visible = false;
            MapManager.currentMap.depthLevel["oldman"].visible = false;
            AnimateManager.playMcAnimate(mc,2,"mc",function():void
            {
               NpcDialog.show(NPC.NIKELA,["圣诞快乐啊小朋友！我看你头角峥嵘、骨骼精奇，有没有兴趣做我的接班人啊？"],["接班人？你是谁？"],[function():void
               {
                  NpcDialog.show(NPC.NIKELA,["我是谁？呵呵呵，你来猜一猜吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(mc,3,"mc",function():void
                     {
                        NpcDialog.show(NPC.NIKELA,["我已经对你施法了，只要你去收集足够多的正能量，你就可以成为我的接班人，做一个优秀的圣诞老人啦！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(mc,4,"mc",function():void
                           {
                              NpcDialog.show(NPC.LAKENI,["哈哈哈，做圣诞老人有什么意思！一本正经的太无趣了！小家伙！不如跟我做捣蛋老人啊！"],["捣蛋老人？"],[function():void
                              {
                                 NpcDialog.show(NPC.LAKENI,["对呀！我是尼克拉的老对手了，老是那么严肃有什么乐趣！偶尔制造点小麻烦才能让生活多姿多彩嘛！"],["哈？那样，不太好吧……"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(mc,5,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.LAKENI,["我也对你施法了，只要你去收集足够多的负能量，你就可以成为我的接班人，做一个优秀的捣蛋老人啦！"],["这，让我再想想吧！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(mc,6,"mc",function():void
                                          {
                                             mc.gotoAndStop(7);
                                             MapManager.currentMap.depthLevel["oldman"].visible = true;
                                             MapManager.currentMap.controlLevel["boss"].visible = true;
                                             TasksManager.accept(TASKID,function():void
                                             {
                                                TasksManager.complete(TASKID,0);
                                             });
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        });
                     });
                  });
               }]);
            });
         }
         else
         {
            SocketConnection.send(1022,86053391);
            ModuleManager.showModule(ClientConfig.getFestivalModule("Christmas2012SantaPetPanel"));
         }
      }
   }
}
