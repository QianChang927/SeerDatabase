package com.robot.app2.control
{
   import com.robot.core.info.pvpMatchSysInfo.pvpArenaContend.PvpArenaContendRoundInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ArenaContendPvPDataManger
   {
      
      public static var GAME_ROUND:String = "game_round";
      
      public static var queue:Array = [];
       
      
      public function ArenaContendPvPDataManger()
      {
         super();
      }
      
      public static function initCmdListener() : void
      {
         SocketConnection.addCmdListener(41845,onGameRound);
      }
      
      public static function onGameRound(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:PvpArenaContendRoundInfo = new PvpArenaContendRoundInfo(_loc2_);
         if(queue)
         {
            queue.push(_loc3_);
         }
         else
         {
            queue = [];
            queue.push(_loc3_);
         }
         EventManager.dispatchEvent(new DynamicEvent("game_round"));
      }
      
      public static function removeCmdListener() : void
      {
         SocketConnection.removeCmdListener(41845,onGameRound);
      }
      
      public static function destroy() : void
      {
         removeCmdListener();
         queue = null;
      }
   }
}
