package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1281
   {
      
      public static const TASK_ID:uint = 1281;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1281()
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
         NpcDialog.show(NPC.SAIXIAOXI,["哎，不知道雷伊和盖亚现在在哪里，他们的战斗肯定精彩无比啊！"],["是呀，不知道它们现在怎么样了！","我还有别的事情要做！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MapManager.changeMap(796);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 796)
         {
            MapManager.changeMap(796);
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
