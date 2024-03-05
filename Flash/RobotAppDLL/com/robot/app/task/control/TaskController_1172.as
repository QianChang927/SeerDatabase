package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1172
   {
      
      public static const TASK_ID:uint = 1172;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1172()
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
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，雷伊在和神秘的邪恶黑影的战斗中竟然用雷神天鸣闪击中了自己，好担心它的伤势啊！ "],["是呀！我也很担心雷伊！","雷伊不会有事的，我先去忙别的了！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["那个神秘的家伙好狡猾，要不是雷伊勇敢果断，后果真是不敢想象！"],["是呀是呀！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1172_1"),function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["这是我见过的最强的一次雷神天鸣闪了！雷伊把这样强大的力量打在自己身上，肯定伤的很重啊！"],["是呀！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["队长，我也很担心，我们去看望雷伊一下吧！"],["嗯，我也正有此意！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["恩， 雷伊正在赫尔卡星的雷神秘境休养伤势，相信已经有很多人去看望它啦！我们也赶紧出发吧！"],["好的！队长！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1172_2"),function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(767);
                                    }
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
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
