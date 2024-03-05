package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NatureXMLInfo
   {
      
      private static var xmlClass:Class = NatureXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function NatureXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("item");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(uint(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@name);
         }
         return "";
      }
      
      public static function getDes(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return String(_loc2_.@des);
      }
      
      public static function getDes2(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return String(_loc2_.@des2);
      }
      
      public static function getAttack(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@m_attack);
         }
         return -1;
      }
      
      public static function getDefence(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@m_defence);
         }
         return -1;
      }
      
      public static function getSpAttack(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@m_SA);
         }
         return -1;
      }
      
      public static function getSpDefence(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@m_SD);
         }
         return -1;
      }
      
      public static function getSpeed(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@m_speed);
         }
         return -1;
      }
   }
}
