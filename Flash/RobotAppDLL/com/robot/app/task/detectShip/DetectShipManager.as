package com.robot.app.task.detectShip
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class DetectShipManager
   {
      
      private static var _shipInfoFun:Function;
      
      private static var _shipSeaInfoFun:Function;
      
      private static var _shipSpriteInfoFun:Function;
      
      private static var _shipBackItemInfoFun:Function;
      
      public static var existDetectorPanel:Boolean = false;
       
      
      public function DetectShipManager()
      {
         super();
      }
      
      public static function getShipInfo(param1:Function = null) : void
      {
         _shipInfoFun = param1;
         SocketConnection.addCmdListener(CommandID.GET_SHIP_INFO,onGetShipInfo);
         SocketConnection.send(CommandID.GET_SHIP_INFO);
      }
      
      private static function onGetShipInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_SHIP_INFO,onGetShipInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:ShipInfo = new ShipInfo(_loc2_);
         if(_shipInfoFun != null)
         {
            _shipInfoFun(_loc3_);
         }
      }
      
      public static function getShipSeaInfo(param1:uint = 1, param2:uint = 1, param3:Function = null) : void
      {
         _shipSeaInfoFun = param3;
         SocketConnection.addCmdListener(CommandID.SHIP_SEA_INFO,onGetShipSeaInfo);
         SocketConnection.send(CommandID.SHIP_SEA_INFO,param1,param2);
         DebugTrace.show("当前飞船类型：" + param1 + "当前地图Id:" + param2);
      }
      
      private static function onGetShipSeaInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SHIP_SEA_INFO,onGetShipSeaInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:ShipSeaInfo = new ShipSeaInfo(_loc2_);
         if(_shipSeaInfoFun != null)
         {
            _shipSeaInfoFun(_loc3_);
         }
      }
      
      public static function getShipSpriteInfo(param1:uint = 1, param2:Function = null) : void
      {
         _shipSpriteInfoFun = param2;
         SocketConnection.addCmdListener(CommandID.SHIP_SPRITE_INFO,onGetShipSpriteInfo);
         SocketConnection.send(CommandID.SHIP_SPRITE_INFO,param1);
      }
      
      private static function onGetShipSpriteInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SHIP_SPRITE_INFO,onGetShipSpriteInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:ShipSpriteInfo = new ShipSpriteInfo(_loc2_);
         if(_shipSpriteInfoFun != null)
         {
            _shipSpriteInfoFun(_loc3_);
         }
      }
      
      public static function getShipBackItemInfo(param1:Function = null) : void
      {
         _shipBackItemInfoFun = param1;
         SocketConnection.addCmdListener(CommandID.SHIP_BACK_ITEM_INFO,onGetShipBackItemInfo);
         SocketConnection.send(CommandID.SHIP_BACK_ITEM_INFO);
      }
      
      private static function onGetShipBackItemInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SHIP_BACK_ITEM_INFO,onGetShipBackItemInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:ShipBackItemInfo = new ShipBackItemInfo(_loc2_);
         if(_shipBackItemInfoFun != null)
         {
            _shipBackItemInfoFun(_loc3_);
         }
      }
   }
}
