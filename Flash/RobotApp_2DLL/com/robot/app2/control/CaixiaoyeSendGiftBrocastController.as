package com.robot.app2.control
{
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.Broadcast2016Info;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   
   public class CaixiaoyeSendGiftBrocastController
   {
      
      private static var _timeVo:CronTimeVo = new CronTimeVo("0-9","*","26-29","*","*");
      
      private static var _comdownComp:TimeCountdownComponent;
       
      
      public function CaixiaoyeSendGiftBrocastController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var date:Date;
         var restart:Function = null;
         restart = function():void
         {
            _comdownComp.destroy();
            _comdownComp = null;
            setup();
         };
         if(_timeVo.isActive(SystemTimerManager.sysBJDate))
         {
            if(MainManager.actorState != UserState.MAP)
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
               {
                  sendBroadcast();
               });
            }
            else
            {
               sendBroadcast();
            }
         }
         date = SystemTimerManager.sysBJDate;
         date = new Date(date.fullYear,date.month,date.date,date.hours,0,0,0);
         date.time += 3600000;
         _comdownComp = new TimeCountdownComponent(null);
         _comdownComp.initialSeconds = SystemTimerManager.getTimeByDate(date.fullYear,date.month + 1,date.date,date.hours) - SystemTimerManager.time;
         _comdownComp.start(restart);
      }
      
      public static function iconController(param1:MovieClip) : void
      {
         if(SystemTimerManager.time >= SystemTimerManager.getTimeByDate(2017,1,30,0))
         {
            IconController.hideIcon("CaixiaoyeSendGift_icon");
         }
      }
      
      private static function sendBroadcast() : void
      {
         var _loc1_:Broadcast2016Info = null;
         var _loc2_:ByteArray = null;
         if(_timeVo.isActive(SystemTimerManager.sysBJDate))
         {
            _loc1_ = new Broadcast2016Info();
            _loc1_.id = 6;
            _loc1_.type = 7;
            _loc1_.nick = MainManager.actorInfo.nick;
            _loc1_.userId = MainManager.actorID;
            _loc2_ = new ByteArray();
            _loc2_.writeUnsignedInt(1);
            _loc2_.writeUnsignedInt(1);
            _loc2_.position = 0;
            _loc1_.msg = _loc2_;
            Broadcast2016Controller.addBroadcast(_loc1_);
         }
      }
   }
}
