package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.info.Broadcast2016Info;
   import com.robot.core.manager.SystemTimerManager;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class OpenSchoole1809Controller
   {
      
      public static var timeOut:uint;
       
      
      public function OpenSchoole1809Controller()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(SystemTimerManager.sysDate > new Date("2021/9/9"))
         {
            return;
         }
         var _loc1_:int = 3600 - SystemTimerManager.sysDate.minutes * 60 - SystemTimerManager.sysDate.seconds;
         timeOut = setTimeout(showBoard,_loc1_ * 1000);
      }
      
      public static function leftEnemys() : Promise
      {
         var der:Deferred = null;
         der = new Deferred();
         var curHours:int = int(SystemTimerManager.sysDate.hours);
         KTool.getGlobalValues(10016,[curHours + 1],function(param1:Array):void
         {
            param1[0] = 20000 - param1[0];
            if(param1[0] < 0)
            {
               param1[0] = 0;
            }
            der.resolve(param1[0]);
         });
         return der.promise;
      }
      
      public static function showBoard() : void
      {
         var _loc1_:Broadcast2016Info = new Broadcast2016Info();
         _loc1_.id = 10;
         _loc1_.type = 7;
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(0);
         _loc2_.writeInt(0);
         _loc2_.position = 0;
         _loc1_.msg = _loc2_;
         Broadcast2016Controller.addBroadcast(_loc1_);
         clearTimeout(timeOut);
         if(!ActivityTimeControl.getIsinTime(102))
         {
            return;
         }
         var _loc3_:int = 3600 - SystemTimerManager.sysDate.minutes * 60 - SystemTimerManager.sysDate.seconds;
         timeOut = setTimeout(showBoard,_loc3_ * 1000);
      }
      
      public static function destroy() : void
      {
         clearTimeout(timeOut);
      }
   }
}
