package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task816;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_816
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 816;
       
      
      public function TaskController_816()
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
         NpcDialog.show(NPC.SHIPER,["最近关于珀伽索斯的传闻越来越频繁了，再这样下去可不行，看来该和博士好好研究一下对策了！"],["罗杰船长，发生什么事啦！","我现在有事，等会再来找你！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task816.acceptTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  Task816.initTaskForMap4();
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
