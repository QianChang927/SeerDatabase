package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task1254;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1254
   {
      
      public static const TASK_ID:uint = 1254;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1254()
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
         NpcDialog.show(NPC.SHIPER,["根据最新情报，赛小息他们遭遇恶灵三巨头了，不知道他们有没有什么危险！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MapManager.changeMap(784);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 784)
         {
            MapManager.changeMap(784);
         }
         else
         {
            Task1254.startStep();
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
