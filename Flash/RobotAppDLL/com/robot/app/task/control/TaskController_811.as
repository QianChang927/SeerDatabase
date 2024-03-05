package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task811;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_811
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 811;
       
      
      public function TaskController_811()
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
         NpcDialog.show(NPC.DOCTOR,["咦？冰狐这小家伙怎么不见了，它伤势还没有痊愈又开始乱跑了！真调皮啊！"],["博士，发生什么事啦！","我还是先观望一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task811.acceptTask();
               }
            });
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
