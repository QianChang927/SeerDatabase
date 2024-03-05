package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task659;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_659
   {
      
      public static const TASK_ID:uint = 659;
       
      
      public function TaskController_659()
      {
         super();
      }
      
      public static function destroy() : void
      {
      }
      
      public static function setup() : void
      {
      }
      
      public static function showPanel() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["传说原来是真的！草系之王已经复苏了……"],["博士！是不是要发生什么事情啦！","我一会再来找你！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task659.initTask_5(null);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         Task659.initTask_5(null);
      }
   }
}
