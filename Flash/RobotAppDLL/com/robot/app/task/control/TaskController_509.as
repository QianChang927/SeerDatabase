package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   
   public class TaskController_509
   {
      
      public static const TASK_ID:uint = 509;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_509()
      {
         super();
      }
      
      public static function showTaskPanel() : void
      {
         if(!panel)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_509"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function showPanel() : void
      {
         showTaskPanel();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         startPro0(true);
      }
      
      public static function startPro0(param1:Boolean) : void
      {
         var b:Boolean = param1;
         if(b)
         {
            NpcDialog.show(NPC.SHIPER,["我们一致认为你和这几位赛尔是执行这次侦查敌方军情的最佳人选！但是任务相当危险！困难重重！你准备好就出发吧！"],["准备完毕！长官！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_509_1"),function():void
               {
                  startGame();
               });
            }]);
         }
         else
         {
            NpcDialog.show(NPC.SHIPER,["你已经侦察到海盗战舰战略布局以及航行路线了吗？此次行动十分危险！你一定要加倍小心！"],["遵命！长官！"],[function():void
            {
               startGame();
            }]);
         }
      }
      
      private static function startPro1() : void
      {
         TasksManager.complete(TaskController_509.TASK_ID,1);
      }
      
      private static function startGame() : void
      {
         var _loc1_:AppModel = new AppModel(ClientConfig.getGameModule("DetectPirate"),"正在加载游戏");
         _loc1_.setup();
         _loc1_.show();
         _loc1_.sharedEvents.addEventListener("DETECTPIRATE_COMPLETE",finishGame);
         _loc1_.sharedEvents.addEventListener("DETECTPIRATE_FAILED",failedGame);
      }
      
      public static function finishGame(param1:Event) : void
      {
         var e:Event = param1;
         TasksManager.complete(TaskController_509.TASK_ID,0,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_509_2"),function():void
            {
               startPro1();
            });
         });
      }
      
      public static function failedGame(param1:Event) : void
      {
         var e:Event = param1;
         NpcDialog.show(NPC.SHIPER,["快回来！你现在的一举一动都关乎到赛尔号的存亡！你一定要加倍小心！你准备好了吗？这次千万要小心！"],["我这次一定加倍小心！","报告船长，我一会儿再来！"],[function():void
         {
            startGame();
         }]);
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
