package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task568;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_568
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 568;
       
      
      public function TaskController_568()
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
         NpcDialog.show(NPC.IRIS,["糟糕了！空间大门已经打……打开了……！"],["空间大门？这又意味着什么？","我一会再来找你哟！"],[function():void
         {
            NpcDialog.show(NPC.IRIS,["空间大门的打开，可能会让很多未知的星球以及生物出现……咦，纽斯这里似乎有最新消息！"],null,null,false,function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     Task568.initTask();
                  }
               });
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
               NpcDialog.show(NPC.IRIS,["什么BTV卡酷动画春晚？我有听曾祖父说起过！这是卡酷星上最隆重的仪式，每年也只有明星级的人物才能参加，相当神圣！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_568_4"),function():void
                  {
                     NpcDialog.show(NPC.IRIS,["雷伊什么时候会出现？卡兔能否得救！这真的是急死人了！哦对了！你记得去问问乌鸦，他可能会知道雷伊什么时候出现吧！"],["这是给你的奖励"],[function():void
                     {
                        TasksManager.complete(TASK_ID,4);
                     }]);
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
