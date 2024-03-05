package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class MasterOfDayAndNightController
   {
       
      
      public function MasterOfDayAndNightController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetTime);
      }
      
      private static function onGetTime(param1:SocketEvent) : void
      {
         var _loc3_:BroadcastInfo = null;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.minutesUTC == 2 || _loc2_.minutesUTC == 32)
         {
            _loc3_ = new BroadcastInfo();
            _loc3_.isLocal = true;
            _loc3_.map = 103;
            _loc3_.txt = "梦幻扭蛋机新年特别版来啦！梦幻扭蛋机，蛋蛋有惊喜，多只精灵给你拜大年哟！";
            BroadcastController.addBroadcast(_loc3_);
         }
      }
   }
}
