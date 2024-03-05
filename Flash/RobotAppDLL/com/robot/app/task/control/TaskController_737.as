package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task737;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_737
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 737;
       
      
      public function TaskController_737()
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
         NpcDialog.show(NPC.IRIS,["小赛尔，你去哪里啦！博士正找你呢？好像说有什么重大的发现，你快去实验室看看吧！"],["真的吗？我现在就去！","好的，我稍后就会去！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task737.acceptTask();
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
