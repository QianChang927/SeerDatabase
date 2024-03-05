package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class Task772
   {
      
      private static const TASK_ID:uint = 772;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static var timerID:uint;
      
      private static var _isActivity:Boolean;
      
      private static var _posList:Array = [new Point(342,186),new Point(435,185),new Point(294,273),new Point(413,261),new Point(496,327),new Point(696,359),new Point(50,251),new Point(218,355),new Point(767,385),new Point(267,380)];
      
      private static var _posTemp1:Array = [];
      
      private static var _posTemp2:Array = [];
      
      private static var activeTime:Array = [new CronTimeVo("*","18-20","30","9","*","2015")];
      
      private static var activeTime2:Array = [new CronTimeVo("*","18-20","1-8","10","*","2015")];
       
      
      public function Task772()
      {
         super();
      }
      
      public static function initTaskFor314(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               TasksManager.accept(TASK_ID,acceptTask);
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor314);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      private static function checkStepFor314(param1:Array) : void
      {
         if(!param1[0])
         {
            acceptTask();
         }
         if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
      }
      
      private static function acceptTask(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         _map.conLevel["pet4"].visible = true;
         _map.conLevel["pet0"].visible = false;
         _map.conLevel["pet1"].visible = false;
         _map.conLevel["pet2"].visible = false;
         _map.conLevel["pet3"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["pet4"],1,"mc1",function():void
         {
            _map.conLevel["pet0"].visible = true;
            _map.conLevel["pet1"].visible = true;
            _map.conLevel["pet2"].visible = true;
            _map.conLevel["pet3"].visible = true;
            _map.conLevel["pet4"].gotoAndStop(2);
            NpcDialog.show(NPC.SEER,["咦，那不是消失很久的0xff0000暗影精灵扎克0xffffff吗？怎么会在这个时候出现。"],null,null,false,function():void
            {
               TasksManager.complete(TASK_ID,0,startStep0);
            });
         });
      }
      
      private static function startStep0(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         _map.conLevel["pet0"].visible = true;
         _map.conLevel["pet1"].visible = true;
         _map.conLevel["pet2"].visible = true;
         _map.conLevel["pet3"].visible = true;
         _map.conLevel["pet4"].visible = true;
         _map.conLevel["pet4"].gotoAndStop(2);
         _map.conLevel["guide_mc"].visible = true;
         _map.conLevel["guard"].buttonMode = true;
         _map.conLevel["guard"].addEventListener(MouseEvent.CLICK,onClickGuardTask);
      }
      
      private static function onClickGuardTask(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["guide_mc"].visible = false;
         _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardTask);
         NpcDialog.show(NPC.SOLIDMAN,["你好，" + MainManager.actorInfo.formatNick + "。我奉罗杰船长的命令，在此监测拜伦号上的暗影能量。"],["最近拜伦号上发生了什么？"],[function():void
         {
            NpcDialog.show(NPC.SOLIDMAN,["近来，暗影能量变得越来越活跃。拜伦号上出现了许多神秘的0xff0000迷之黑影0xffffff。每到暗影能量最为活跃的时候，它们就会出现。"],["迷之黑影？那是什么？"],[function():void
            {
               NpcDialog.show(NPC.SOLIDMAN,["根据我的观察，0xff0000每一个迷之黑影中都藏着一只暗影精灵0xffffff。刚才出现的扎克，也会在那个时候出现在迷之黑影中。"],["哇！那暗影能量到底什么时候最为活跃呢？"],[function():void
               {
                  NpcDialog.show(NPC.SOLIDMAN,["根据博士的分析，0xff0000 18:00-20:000xffffff，应该是暗影能量最为活跃的时候。"],["好的，到时候我一定会过来看看的。"],[function():void
                  {
                     TasksManager.complete(TASK_ID,1,taskComplete);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function taskComplete(param1:Boolean) : void
      {
         if(!param1)
         {
            return;
         }
         if(_isActivity)
         {
            _map.conLevel["guard"].buttonMode = true;
            _map.conLevel["guard"].addEventListener(MouseEvent.CLICK,onClickGuardInTime);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardOutOfTime);
         }
         else
         {
            _map.conLevel["guard"].buttonMode = true;
            _map.conLevel["guard"].addEventListener(MouseEvent.CLICK,onClickGuardOutOfTime);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardInTime);
         }
      }
      
      public static function onSystemTime() : void
      {
         if(Boolean(SystemTimerManager.isActive(activeTime)) || Boolean(SystemTimerManager.isActive(activeTime2)))
         {
            inTime();
         }
         else
         {
            outOfTime();
         }
      }
      
      private static function inTime() : void
      {
         if(_isActivity)
         {
            return;
         }
         _isActivity = true;
         if(TasksManager.getTaskStatus(772) == TasksManager.COMPLETE)
         {
            _map.conLevel["guard"].buttonMode = true;
            _map.conLevel["guard"].addEventListener(MouseEvent.CLICK,onClickGuardInTime);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardOutOfTime);
         }
         timerID = setTimeout(function():void
         {
            var _loc1_:* = undefined;
            clearTimeout(timerID);
            _loc1_ = 0;
            while(_loc1_ < 5)
            {
               _map.conLevel["shadow" + _loc1_].gotoAndStop(2);
               _map.conLevel["shadow" + _loc1_].visible = true;
               _loc1_++;
            }
         },3000);
         _map.topLevel["fog"].visible = true;
      }
      
      private static function outOfTime() : void
      {
         _posTemp1.length = 0;
         _isActivity = false;
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            _map.conLevel["shadow" + _loc1_].visible = false;
            _loc1_++;
         }
         if(TasksManager.getTaskStatus(772) == TasksManager.COMPLETE)
         {
            _map.conLevel["guard"].buttonMode = true;
            _map.conLevel["guard"].addEventListener(MouseEvent.CLICK,onClickGuardOutOfTime);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardInTime);
         }
         _map.topLevel["fog"].visible = false;
      }
      
      private static function onClickGuardInTime(param1:Event) : void
      {
         NpcDialog.show(NPC.SOLIDMAN,["0xff0000迷之黑影0xffffff已经出现，快去揭开它们的真面目吧！"],["恩，我现在就去。"],[]);
      }
      
      private static function onClickGuardOutOfTime(param1:Event) : void
      {
         NpcDialog.show(NPC.SOLIDMAN,["0xff0000 18:00-20:000xffffff，是暗影能量最为活跃的时候。到时候0xff0000迷之黑影0xffffff也将出现，一定要过来看看哦。"],["好的，我知道了。"],[]);
      }
      
      public static function setShadowPos(param1:BaseMapProcess) : void
      {
         var _loc3_:int = 0;
         _map = param1;
         _posTemp1 = _posList.concat();
         _posTemp2.length = 0;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            _loc3_ = getRandom(10 - _loc2_);
            _posTemp2.push(_posTemp1[_loc3_]);
            _posTemp1.splice(_loc3_,1);
            _map.conLevel["shadow" + _loc2_].x = _posTemp2[_loc2_].x;
            _map.conLevel["shadow" + _loc2_].y = _posTemp2[_loc2_].y;
            _loc2_++;
         }
      }
      
      private static function getRandom(param1:int) : int
      {
         return Math.floor(Math.random() * param1);
      }
      
      public static function destroy() : void
      {
         clearTimeout(timerID);
         if(Boolean(_map) && Boolean(_map.conLevel["guard"]))
         {
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardTask);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardInTime);
            _map.conLevel["guard"].removeEventListener(MouseEvent.CLICK,onClickGuardOutOfTime);
         }
         _posTemp1.length = 0;
         _isActivity = false;
         _map = null;
      }
   }
}
