package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_521
   {
      
      public static const TASK_ID:int = 521;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_521()
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
         TasksManager.getProStatusList(TaskController_521.TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(!array[0])
            {
               NpcDialog.show(NPC.SEER,["久违的悠闲假期！哈哈！大小星球比格星我来咯！出发……"],["我这就去比格星球上转悠！"],[function():void
               {
                  MapManager.changeMap(404);
               }]);
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
