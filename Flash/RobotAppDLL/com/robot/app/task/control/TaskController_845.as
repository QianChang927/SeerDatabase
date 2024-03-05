package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task845;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_845
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 845;
       
      
      public function TaskController_845()
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
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SEER,["报告船长！1个月前，吒克斯向赛尔发起宣战，约定本周前往天境回廊，这个事情你知道了吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SHIPER,["是的，我已经从其他赛尔口中得知！这个大魔王始终阴魂不散，这次必定要做个了结！"],["嘿嘿嘿！这个机会我等很久了！","好可怕，事不关己最好啦！"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     Task845.acceptTask();
                  }
               });
            }]);
         });
      }
      
      public static function startPro() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  Task845.initTaskForMap4();
               }
            });
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
