package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task707;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_707
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 707;
       
      
      public function TaskController_707()
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
         NpcDialog.show(NPC.SHUKE,[MainManager.actorInfo.nick + "，你来的正好！我们刚刚收到怀特星的求救信息！奶油湾遭到了不明物质的污染！"],["嗯！我现在就去。","我等会再来找你！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task707.acceptedTask();
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
