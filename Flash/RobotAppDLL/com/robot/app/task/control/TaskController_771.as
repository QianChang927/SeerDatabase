package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task771;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_771
   {
      
      public static const TASK_ID:uint = 771;
      
      private static var _panel:AppModel;
       
      
      public function TaskController_771()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["赫尔卡星上的能量蛋里竟然会出现一只如此古怪的精灵，真是难以捉摸！"],["博士，它竟然还自称神灵兽！","随便逛逛..."],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task771.startPro_0();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               Task771.startPro_0();
            }
         });
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(_panel == null)
         {
            _panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            _panel.setup();
         }
         _panel.show();
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
