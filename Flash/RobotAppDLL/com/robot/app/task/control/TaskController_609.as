package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task609;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_609
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 609;
       
      
      public function TaskController_609()
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
      
      public static function start() : void
      {
         NpcDialog.show(NPC.IRIS,[MainManager.actorInfo.nick + "，我……我刚才在博士那里得到了咤克斯的第一手资料了！我们先来看下纽斯报道！"],["有对抗它的办法了吗？","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task609.initTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && !arr[2])
            {
               NpcDialog.show(NPC.SHIPER,["这绝对是一场历史性的对决！" + MainManager.actorInfo.formatNick + "今天你所经历的一切我们都将写入赛尔档案！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SHIPER,["咤克斯是消失了！但是另外的黑色的能量我们一定要尽快找到！另外寻找迪恩的任务就交给你了！"],["遵命！长官！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                     {
                     });
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
