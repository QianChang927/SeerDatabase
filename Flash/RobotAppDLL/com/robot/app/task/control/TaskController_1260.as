package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1260
   {
      
      public static const TASK_ID:uint = 1260;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1260()
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
         NpcDialog.show(NPC.SHIPER,["赛尔！赛小息已经和我报告过南瓜山谷发现密室的事情了！我觉得里面肯定有什么古怪，赛小息准备进去探查一下！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MapManager.changeMap(786);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 786)
         {
            MapManager.changeMap(786);
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
