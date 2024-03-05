package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_605
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 605;
       
      
      public function TaskController_605()
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
         NpcDialog.show(NPC.IRIS,["它终于脱壳而出了！根据博士所说的，它已经开始聚集能量了！" + MainManager.actorInfo.nick + "，我们真的没时间了！"],["咤克斯一决上下吧！","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task605.initTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2]) && Boolean(arr[3]) && !arr[4])
            {
               NpcDialog.show(NPC.IRIS,["没理由啊！消灭了咤克斯的分身为什么它还可以存活呢？我要翻阅一下祖母留下的资料！一定有办法！"],["无论什么办法！我都一定会将它铲除！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_5"),function():void
                  {
                     NpcDialog.show(NPC.IRIS,[MainManager.actorInfo.formatNick + "不得不说！在这场与咤克斯的对抗中你成长不少！好好休息吧！最后的胜利一定属于光明！"],["（这是给你的奖励）"],[function():void
                     {
                        TasksManager.complete(TASK_ID,4);
                     }]);
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
