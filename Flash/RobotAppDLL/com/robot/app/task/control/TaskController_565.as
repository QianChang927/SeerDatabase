package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task565;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_565
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 565;
       
      
      public function TaskController_565()
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
         NpcDialog.show(NPC.IRIS,["不得了了！不得了了！释放的咤克斯出现在了帕诺星系！！！露希欧星……露希欧星球……"],["怎么了？爱丽丝你别急！慢慢说！","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task565.initTask();
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
               NpcDialog.show(NPC.IRIS,["它们逃跑的身影、它们哭喊的求救！这一幕幕的场景我实在不能够忘记！我们要振作起来！！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_565_4"),function():void
                  {
                     NpcDialog.show(NPC.IRIS,["咤克斯的力量一天比一天强大！我们一定要快一点想到对付它的办法！" + MainManager.actorInfo.formatNick + "，我希望你等待我的召唤！随时准备好迎战！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.IRIS,["不得不说在这次炮火防御上，你的表现十分出色！这些奖励都是给你的！我们一定会战胜咤克斯！"],["一定！"],[function():void
                        {
                           TasksManager.complete(TASK_ID,2);
                        }]);
                     });
                  });
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
