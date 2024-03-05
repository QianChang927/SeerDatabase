package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task572;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_572
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 572;
       
      
      public function TaskController_572()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.nick + "，我在这里已经等你很久了！让我们先来看一下纽斯最新报道吧！看来情况不容乐观……"],["是的，长官！","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task572.initTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2]) && Boolean(arr[3]) && Boolean(arr[4]) && !arr[5])
            {
               NpcDialog.show(NPC.SHIPER,["你的任务完成的很不错！哦，对了……这是卡兔让我交给你的！"],["卡兔给我的？"],[function():void
               {
                  TasksManager.complete(572,5,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        TasksManager.complete(572,6);
                     }
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
