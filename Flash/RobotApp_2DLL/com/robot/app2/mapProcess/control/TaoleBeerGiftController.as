package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   
   public class TaoleBeerGiftController
   {
      
      private static var _timecountdown:TimeCountdownComponent;
      
      private static var _timeToOut:Boolean;
       
      
      public function TaoleBeerGiftController()
      {
         super();
      }
      
      public static function init() : void
      {
      }
      
      private static function contdown() : void
      {
         _timeToOut = false;
         var _loc1_:Date = SystemTimerManager.sysDate;
         _timecountdown = new TimeCountdownComponent(null,3);
         _timecountdown.initialSeconds = SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,_loc1_.hours,10) - SystemTimerManager.time;
         _timecountdown.start(outMap);
      }
      
      private static function outMap() : void
      {
         if(MainManager.isFighting)
         {
            _timeToOut = true;
         }
         else
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               Alarm.show("活动时间结束了，请下个整点之前再来挑战精灵获得礼包，现在快去找淘乐熊开启礼包吧！");
            });
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         KTool.getMultiValue([100309],function(param1:Array):void
         {
            if(FightManager.isWin)
            {
               switch(param1[0])
               {
                  case 0:
                     Alarm.show("你已经获得了足够的礼包，请下个整点之前再来挑战精灵获得礼包，现在快去找淘乐熊开启礼包吧！");
                     break;
                  case 1:
                     showAlarm("小礼包");
                     break;
                  case 2:
                     showAlarm("大礼包");
                     break;
                  case 3:
                     showAlarm("超级大礼包");
               }
            }
            if(_timeToOut)
            {
               outMap();
            }
         });
      }
      
      private static function showAlarm(param1:String) : void
      {
         Alarm.show("恭喜你获得了一个" + param1 + "！");
      }
      
      public static function destroy() : void
      {
         _timecountdown.destroy();
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
   }
}
