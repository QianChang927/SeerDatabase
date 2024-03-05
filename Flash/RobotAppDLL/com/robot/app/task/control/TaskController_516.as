package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_516
   {
      
      public static const TASK_ID:int = 516;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_516()
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
         TasksManager.getProStatusList(TaskController_516.TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(!array[0])
            {
               NpcDialog.show(NPC.SHIPER,["犀牛号上守卫森严！我们必须在确保人质安全的情况下才可以进攻控制室！哦，对了！肖恩那里似乎有秘密武器，对你们行动可能有帮助！"],["遵命！我这就前往发明室！"],[function():void
               {
                  MapManager.changeMap(107);
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
