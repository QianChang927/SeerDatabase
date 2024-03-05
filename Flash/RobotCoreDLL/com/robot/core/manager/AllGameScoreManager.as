package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class AllGameScoreManager
   {
      
      private static var hashMap:HashMap;
       
      
      public function AllGameScoreManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         hashMap = new HashMap();
         SocketConnection.addCmdListener(CommandID.ALL_GAME_SCORE,onGameScore);
         SocketConnection.send(CommandID.ALL_GAME_SCORE);
      }
      
      private static function onGameScore(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            hashMap.add(_loc4_,_loc2_.readUnsignedInt());
            _loc4_++;
         }
      }
      
      public static function getGameScore(param1:uint) : uint
      {
         return hashMap.getValue(param1);
      }
      
      public static function resetGameScore(param1:uint, param2:uint) : void
      {
         hashMap.add(param1,param2);
      }
   }
}
