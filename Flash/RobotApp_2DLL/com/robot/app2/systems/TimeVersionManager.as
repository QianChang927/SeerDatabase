package com.robot.app2.systems
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   
   public class TimeVersionManager
   {
      
      private static const TIME_ARR:Array = ["1004"];
       
      
      public function TimeVersionManager()
      {
         super();
      }
      
      public static function get versionNum() : String
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc1_:int = int(SystemTimerManager.time);
         var _loc2_:int = int(TIME_ARR.length - 1);
         while(_loc2_ >= 0)
         {
            _loc3_ = int(TIME_ARR[_loc2_].substr(0,2));
            _loc4_ = int(TIME_ARR[_loc2_].substr(2,2));
            _loc5_ = int(SystemTimerManager.getTimeByDate(2017,_loc3_,_loc4_,0));
            if(_loc1_ >= _loc5_)
            {
               return TIME_ARR[_loc2_];
            }
            _loc2_--;
         }
         return "";
      }
      
      public static function getVersionNum(param1:Function = null) : void
      {
         var func:Function = param1;
         var now:int = int(SystemTimerManager.time);
         if(now != 0)
         {
            if(func != null)
            {
               func(versionNum);
            }
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,function(param1:*):void
            {
               SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,arguments.callee);
               if(func != null)
               {
                  func(versionNum);
               }
            });
         }
      }
   }
}
