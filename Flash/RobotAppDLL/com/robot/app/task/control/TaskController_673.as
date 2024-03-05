package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task673;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_673
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 673;
       
      
      public function TaskController_673()
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
         NpcDialog.show(NPC.CICI,["瞧你回来伤痕累累的样子，再看看现在，简直是天壤之别啊，哈哈！快去找船长吧，他有任务交给你。"],["哈哈！要多谢你高超的修复技术呀！嗯，我立刻去船长室！","我还想休息一会！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task673.gotoStep1();
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
