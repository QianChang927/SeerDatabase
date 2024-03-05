package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_520
   {
      
      public static const TASK_ID:int = 520;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_520()
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
         TasksManager.getProStatusList(TaskController_520.TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(!array[0])
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_520_1"),function():void
               {
                  NpcDialog.show(NPC.SHIPER,["幽灵号已经赶赴犀牛号所在位置，我们可以进行半路拦截！冲锋小队1号和2号已经进入舱内，你的责任是冲入控制室！缉拿海盗老大！"],["报告！准备完毕！"],[function():void
                  {
                     MapManager.changeMap(420);
                  }]);
               });
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
