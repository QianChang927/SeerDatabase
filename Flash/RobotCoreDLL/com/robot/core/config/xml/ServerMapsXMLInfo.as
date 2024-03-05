package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class ServerMapsXMLInfo
   {
      
      private static var xmlClass:Class = ServerMapsXMLInfo_xmlClass;
      
      private static var xmlClass1:Class = ServerMapsXMLInfo_xmlClass1;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmllist:XMLList;
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function ServerMapsXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc3_:XML = null;
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            xml = XML(new xmlClass1());
         }
         else
         {
            xml = XML(new xmlClass());
         }
         var _loc1_:XML = xml.elements("DefaultMaps")[0];
         var _loc2_:XMLList = _loc1_.elements("DefaultMap");
         for each(_loc3_ in _loc2_)
         {
            _itemHash.add(uint(_loc3_.@ID),_loc3_);
         }
      }
      
      public static function getLoginMapId(param1:int) : int
      {
         var _loc2_:XML = _itemHash.getValue(param1);
         if(_loc2_ != null)
         {
            return _loc2_.@RandMaps;
         }
         return 0;
      }
   }
}
