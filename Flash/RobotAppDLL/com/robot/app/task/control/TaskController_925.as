package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task925;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   
   public class TaskController_925
   {
      
      public static const TASK_ID:uint = 925;
      
      private static var panel:AppModel;
       
      
      public function TaskController_925()
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
         NpcDialog.show(NPC.SHIPER,["这次对巨石星的救援可一定要慎重才行，否则很可能会被海盗乘虚而入！"],["船长，巨石星现在可谓是危机重重啊！","我还是先去招募队友再说吧！！"],[function():void
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
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SHIPER,["咦！" + MainManager.actorInfo.formatNick + "你终于回来了！听说你在巨石星上竟然找到了沉睡多年的七星天珠，并且还击败了星辰之柱的守护者！"],["呵呵！其实这是大家的努力啦！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["不过，这次我听赛小息他们的汇报，巨石灵王阿洛比斯好像很不好对付，我一定要想办法才行！"],null,null,false,function():void
                  {
                     var app:* = undefined;
                     app = ModuleManager.getModule(ClientConfig.getTaskModule("TaskIntro_925"));
                     app.setup();
                     app.show();
                     app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                     {
                        var evt:Event = param1;
                        app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                        app.destroy();
                        app = null;
                        NpcDialog.show(NPC.SHIPER,["事情比我想象的要严重许多，我要立刻召开飞船全体会议，不能再这样等待下去，赛尔号该是时候出手了！"],["哇！好激动哦！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["罗杰船长，让我成为先遣部队的一员吧！我一定会圆满完成任务的！"],["恩..让我好好想想！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,0,function():void
                              {
                                 Task925.initForMap4();
                              });
                           }]);
                        }]);
                     });
                  });
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               Task925.initForMap4();
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
