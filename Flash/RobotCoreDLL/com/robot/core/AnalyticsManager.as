package com.robot.core
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.VersionManager;
   import com.robot.core.net.SocketConnection;
   import com.taomee.analytics.Analytics;
   import com.taomee.analytics.info.ErrorInfoBox;
   import com.taomee.analytics.item.ErrorItem;
   import flash.display.Stage;
   
   public class AnalyticsManager
   {
      
      public static var productID:int = 2;
      
      public static var ADDR_ERROR_RELEASE:String = "http://114.80.98.167";
       
      
      public function AnalyticsManager()
      {
         super();
      }
      
      public static function setup(param1:Stage) : void
      {
         Analytics.init(productID,ADDR_ERROR_RELEASE,param1,getInfo);
      }
      
      public static function reportError(param1:ErrorItem) : void
      {
         Analytics.submitErrorInfo(param1);
      }
      
      private static function getInfo(param1:Object = null) : ErrorInfoBox
      {
         var _loc2_:Date = new Date(SystemTimerManager.time * 1000);
         if(_loc2_.getHours() >= 0 && _loc2_.getHours() <= 5)
         {
            return null;
         }
         var _loc3_:String = "";
         if(SocketConnection.mainSocket)
         {
            _loc3_ = String(SocketConnection.mainSocket.ip + SocketConnection.mainSocket.port.toString());
         }
         var _loc4_:uint = MapManager.currentMap == null ? 0 : MapManager.currentMap.id;
         return new ErrorInfoBox(MainManager.actorID,_loc4_,VersionManager.versionTime,MainManager.serverID,_loc3_,MainManager.cdnIP,MainManager.cdnSpeed);
      }
   }
}
