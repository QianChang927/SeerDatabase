package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1249
   {
      
      public static const TASK_ID:uint = 1249;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1249()
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
         NpcDialog.show(NPC.SHIPER,["最近的情报显示，各大星系上开始流传一个谣言，已经引起了大面积的恐慌！这种事可不能置之不管！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SEER,["船长，什么谣言这么恐怖啊？"],["唔，看来你还不知道啊！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["在很多星系上开始流传世界末日就要来到了！"],["世界末日？！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1249_1_1"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1249_1_2"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["天哪，这是什么情况，全宇宙都笼罩在恐慌之中啊！难道又是海盗在搞什么阴谋？"],["应该不是！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["根据我们掌握的情报，最近海盗们也陷入了恐慌中，事情可能不像我们想象的那么简单！"],["船长，让我们去探查一下吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["我正有此意，赛小息、阿铁打和卡璐璐已经先行出发了，他们的第一个目的地是拜访大祭司木木，你也追上去吧！"],["好的船长！我们一定会查个水落石出的！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1249_2"),function():void
                              {
                                 TasksManager.complete(TaskController_1249.TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(730);
                                    }
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  },false);
               },false);
            }]);
         }]);
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
