package com.robot.app.control
{
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.net.SharedObject;
   import org.taomee.manager.EventManager;
   
   public class ChaoNoSpriteTeamController
   {
       
      
      public function ChaoNoSpriteTeamController()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,function(param1:SysTimeEvent):void
         {
            var _loc3_:SharedObject = null;
            var _loc4_:String = null;
            EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,arguments.callee);
            if(new CronTimeVo("*","*","5-12","12","*","2013").checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               _loc3_ = SOManager.getUserSO(SOManager.SHAKER_FULL_SCREEN);
               if(MainManager.actorInfo.isVip == false)
               {
                  _loc4_ = "2013_12_" + SystemTimerManager.sysBJDate.date.toString();
                  if(_loc3_.data[_loc4_] == undefined)
                  {
                     _loc3_.data[_loc4_] = {};
                     MessageManager.addModuleMsg("ChaoNoSpriteTeamMsg");
                  }
               }
            }
         });
      }
   }
}
