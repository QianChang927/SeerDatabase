package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class LowLineGamesXMLInfo
   {
      
      private static var xmlClass:Class = LowLineGamesXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function LowLineGamesXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc6_:Boolean = false;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).descendants("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = uint(_loc2_.@id);
            _loc4_ = _loc2_.@name;
            _loc5_ = _loc2_.@ename;
            _loc6_ = Boolean(_loc2_.@isApp);
            _dataMap.add(_loc3_,_loc2_);
         }
      }
      
      public static function getEname(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return _loc2_.@ename;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return _loc2_.@name;
      }
      
      public static function getIsApp(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return _loc2_.@isApp;
      }
   }
}
