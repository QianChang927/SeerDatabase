package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.debug.DebugTrace;
   
   public class TaskController_536
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 536;
       
      
      public function TaskController_536()
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
         NpcDialog.show(NPC.DOCTOR,["小赛尔，你终于来啦！我收到了精灵的求救信号，好像是从戴斯星发出的，那里地势非常危险，你能去看看究竟怎么回事吗？"],["我现在就去看看！","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(435);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(Boolean(array[0]) && Boolean(array[1]) && !array[2])
            {
               NpcDialog.show(NPC.SEER,["博士博士，我这次把紫炎虫从死亡星球救出来了，原来它是来找赤西西比学习舞蹈的！"],["是吗？难道这次的事情会和繁殖有关？看来这事要研究一下了！"],[function():void
               {
                  TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                  {
                     if(!param1)
                     {
                        DebugTrace.show("提交任务失败！");
                     }
                  });
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
