package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   
   public class SignUpSendVipController
   {
      
      private static var _isVipLeft:Boolean;
      
      private static var _isVip5Left:Boolean;
      
      private static const LIMIT:int = 3;
      
      private static const MIN_LIMIT:int = 2;
      
      private static const FOREVER_STATE:int = 2815;
      
      private static const FOREVER_VIP5_START_TIME:int = 2816;
       
      
      public function SignUpSendVipController()
      {
         super();
      }
      
      public static function showVipAd() : void
      {
         var actTime:CronTimeVo = new CronTimeVo("*","*","8-16","6","*","2016");
         if(!actTime.isTimeActive())
         {
            return;
         }
         initData(function(param1:int):void
         {
            if(_isVipLeft && param1 > 0)
            {
               ModuleManager.showAppModule("SignUpSendVipLeftPanel");
            }
            if(_isVip5Left && param1 > 0)
            {
               ModuleManager.showAppModule("SignUpSendVip5LeftPanel");
            }
         });
      }
      
      public static function initData(param1:Function) : void
      {
         var now:Date = null;
         var fun:Function = param1;
         now = SystemTimerManager.sysBJDate;
         KTool.getMultiValue([FOREVER_STATE,FOREVER_VIP5_START_TIME],function(param1:Array):void
         {
            var _loc2_:Boolean = Boolean(MainManager.actorInfo.isVip);
            var _loc3_:* = MainManager.actorInfo.vipLevel == 5;
            var _loc4_:* = param1[0] > 1;
            var _loc5_:int = LIMIT - Math.floor((now.time - param1[1] * 1000) / (1000 * 3600 * 24));
            _isVipLeft = param1[0] == 1 && _loc2_ && _loc5_ <= 1;
            _isVip5Left = _loc3_ && _loc4_ && _loc5_ <= 1;
            fun(_loc5_);
         });
      }
      
      private static function getLeftDay() : int
      {
         var _loc1_:Number = VipController201408.vipEndTime - SystemTimerManager.time;
         return int(Math.floor(_loc1_ / (60 * 60 * 24) >= 0 ? _loc1_ / (60 * 60 * 24) : 0));
      }
   }
}
