package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class HatchTaskXMLInfo
   {
      
      private static const PRO:String = "pro";
      
      private static var xmlClass:Class = HatchTaskXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function HatchTaskXMLInfo()
      {
         super();
      }
      
      public static function get dataMap() : HashMap
      {
         return _dataMap;
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("task");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = uint(_loc2_.@ID);
            _dataMap.add(_loc3_,_loc2_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@name.toString();
         }
         return "";
      }
      
      public static function getTaskProCount(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.elements(PRO).length();
         }
         return 0;
      }
      
      public static function getTaskMapList(param1:uint) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:uint = 0;
         while(_loc3_ < getTaskProCount(param1))
         {
            _loc2_.push(getProMap(param1,_loc3_));
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function isDir(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Boolean(int(_loc2_.@isDir));
         }
         return false;
      }
      
      public static function isMat(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Boolean(int(_loc2_.@isMat));
         }
         return false;
      }
      
      public static function getProName(param1:uint, param2:uint) : String
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@name.toString();
         }
         return "";
      }
      
      public static function getProMCName(param1:uint, param2:uint) : String
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@mc.toString();
         }
         return "";
      }
      
      public static function getProMap(param1:uint, param2:uint) : uint
      {
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return _loc3_.elements(PRO)[param2].@map;
         }
         return 0;
      }
      
      public static function getMapPro(param1:uint, param2:uint) : Array
      {
         var _loc5_:XMLList = null;
         var _loc6_:uint = 0;
         var _loc3_:Array = [];
         var _loc4_:XML;
         if(_loc4_ = _dataMap.getValue(param1))
         {
            _loc5_ = _loc4_.elements(PRO);
            _loc6_ = 0;
            while(_loc6_ < _loc5_.length())
            {
               if(_loc5_[_loc6_].@map == param2)
               {
                  _loc3_.push(_loc6_);
               }
               _loc6_++;
            }
         }
         return _loc3_;
      }
      
      public static function getProParent(param1:uint, param2:uint) : Boolean
      {
         var _loc4_:Boolean = false;
         if(param2 == 0)
         {
            return true;
         }
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return Boolean(_loc3_.elements(PRO)[param2 - 1].@isMat);
         }
         return false;
      }
      
      public static function getMapSoulBeadList(param1:uint) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:uint = 0;
         var _loc2_:Array = [];
         var _loc3_:XML = XML(new xmlClass());
         var _loc4_:XMLList = _loc3_..pro;
         for each(_loc5_ in _loc4_)
         {
            if(_loc5_.@map == param1)
            {
               _loc6_ = uint(_loc5_.parent().@ID);
               _loc2_.push(_loc6_);
            }
         }
         return _loc2_;
      }
      
      public static function getProDes(param1:uint, param2:uint) : String
      {
         var _loc4_:String = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            return String(_loc3_.elements(PRO)[param2].@des);
         }
         return "";
      }
      
      public static function getItemColor(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@color);
         }
         return 0;
      }
   }
}
