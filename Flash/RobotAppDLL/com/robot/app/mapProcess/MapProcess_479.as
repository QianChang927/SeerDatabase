package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_768;
   import com.robot.app.task.control.TaskController_795;
   import com.robot.app.task.taskscollection.Task743;
   import com.robot.app.task.taskscollection.Task768;
   import com.robot.app.task.taskscollection.Task795;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_479 extends BaseMapProcess
   {
       
      
      public function MapProcess_479()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["kaluosiMC"].visible = false;
         topLevel["blackMC"].buttonMode = true;
         topLevel["blackMC"].addEventListener(MouseEvent.CLICK,this.blackMCHandler);
         topLevel.mouseChildren = true;
         topLevel.mouseEnabled = false;
         if(TasksManager.getTaskStatus(641) != TasksManager.ALR_ACCEPT)
         {
            if(TasksManager.getTaskStatus(743) == TasksManager.ALR_ACCEPT)
            {
               Task743.initTaskForMap479(this);
            }
            else if(TasksManager.getTaskStatus(TaskController_768.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               Task768.initTaskForMap479(this);
            }
         }
      }
      
      private function blackMCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var nFrame:uint = uint(topLevel["blackMC"].currentFrame);
         if(nFrame == 1)
         {
            AnimateManager.playMcAnimate(topLevel["blackMC"],1,"mc1",function():void
            {
               topLevel["blackMC"].gotoAndStop(2);
            });
         }
         else if(nFrame == 2)
         {
            AnimateManager.playMcAnimate(topLevel["blackMC"],2,"mc2",function():void
            {
               topLevel["blackMC"].gotoAndStop(3);
            });
         }
         else if(nFrame == 3)
         {
            NpcDialog.show(NPC.MINUOSI,["我会让你见识真正的黑暗力量！"],["哼！来一决高下吧！","额……我只是来看风景的！"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightBossController.fightBoss("米诺斯",1);
            },Task768.checkTasks]);
         }
      }
      
      private function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         topLevel["blackMC"].gotoAndStop(3);
         if(TasksManager.getTaskStatus(TaskController_795.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_795.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  Task795.initTaskForMap479();
               }
               else
               {
                  Task768.checkTasks();
               }
            });
         }
         else
         {
            Task768.checkTasks();
         }
      }
      
      override public function destroy() : void
      {
         topLevel["blackMC"].removeEventListener(MouseEvent.CLICK,this.blackMCHandler);
         Task768.destroy();
         Task743.destroy();
      }
   }
}
