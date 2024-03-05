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
   
   public class TaskController_1083
   {
      
      public static const TASK_ID:uint = 1083;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1083()
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
         NpcDialog.show(NPC.SHIPER,["\t莱恩那星终于恢复了往日的平静，邪恶四灵再也不能对整个星系造成任何危害了！不过，迪恩她却..."],["船长，迪恩她有下落了吗！","迪恩会一直在我们心中的！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["\t相信迪恩不会就这么离开我们，赛尔号正在全力搜索迪恩的下落，直到找到她为止！"],["那我也去附近找找吧！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["\t" + MainManager.actorInfo.formatNick + "，这次在莱恩那星，你和赛小息他们经历了严峻的考验，还是好好休整一下吧！这些事情就让卫兵他们去就行了！"],["可是..."],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1083_1"),function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["一旦幻影星出现，那么就证明传说中的迈尔斯即将复苏，想必海盗也应该发现了这个现象！可恶，竟然在这个时候出现！"],["船长，这个任务就交给我吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["好吧！那你就和赛小息他们一同前往幻影星，记住，我们这次主要的目的是保护迈尔斯，千万不能让海盗得逞！"],["恩恩，遵命！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["0xff0000幻影星、迈尔斯...0xffffff不知道这次又会遇到怎样的挑战！我已经迫不及待了！"],["幻影星，我们来了！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1083_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(736);
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     },false);
                  }]);
               }]);
            }
         });
      }
      
      public static function showOrHideNpc(param1:Boolean) : void
      {
         if(MapManager.currentMap.id == 736)
         {
            if(MapManager.currentMap.controlLevel["task1083MC"] != null)
            {
               MapManager.currentMap.controlLevel["task1083MC"].visible = param1;
            }
         }
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
