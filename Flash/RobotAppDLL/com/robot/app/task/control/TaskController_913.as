package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task913;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_913
   {
      
      public static const TASK_ID:uint = 913;
      
      private static var panel:AppModel;
       
      
      public function TaskController_913()
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
         NpcDialog.show(NPC.LANI,["谁能帮帮我啊！！到现在都没有拉琪的消息，不知道今生今世还能不能在遇到他了！呜呜呜呜…."],["还是去帮帮拉妮吧！","我现去附近逛逛！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               Task913.initForMap706(MapProcessConfig.currentProcessInstance);
            }
         });
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
