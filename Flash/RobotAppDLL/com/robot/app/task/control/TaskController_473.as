package com.robot.app.task.control
{
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_473
   {
      
      public static const TASK_ID:uint = 473;
       
      
      public function TaskController_473()
      {
         super();
      }
      
      public static function start() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.DOCTOR,["你今天已经领过了，明天再来吧！"],["我知道了！"]);
         }
         else
         {
            NpcDialog.show(NPC.DOCTOR,["这是今天送你的欢乐券，快去克洛斯星抽奖吧！"],["谢谢！"],[function():void
            {
               TasksManager.accept(TASK_ID,function():void
               {
                  startPro();
               });
            }]);
         }
      }
      
      public static function startPro() : void
      {
         TasksManager.complete(TASK_ID,0);
      }
   }
}
