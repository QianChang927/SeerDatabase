package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PlayerStatusInfo
   {
      
      private static var xmlClass:Class = PlayerStatusInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function PlayerStatusInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.play;
         for each(_loc1_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc1_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc1_.@id),_loc1_);
            }
         }
      }
      
      public static function getPlayName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return String(_loc2_.@name);
         }
         return null;
      }
      
      public static function getMapId(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return uint(_loc2_.@mapId);
         }
         return null;
      }
      
      public static function getArrowPosX(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return int(_loc2_.@arrow_x);
         }
         return 0;
      }
      
      public static function getArrowPosY(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return int(_loc2_.@arrow_y);
         }
         return 0;
      }
      
      public static function getArrowAngle(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return Number(_loc2_.@arrow_angle);
         }
         return 0;
      }
      
      public static function getArrowVisible(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(Boolean(_loc2_) && _loc2_.@arrow_visible != null)
         {
            if(uint(_loc2_.@arrow_visible) == 1)
            {
               return true;
            }
            return false;
         }
         return false;
      }
   }
}
