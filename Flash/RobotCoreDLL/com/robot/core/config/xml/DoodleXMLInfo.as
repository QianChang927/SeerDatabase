package com.robot.core.config.xml
{
   import flash.utils.Dictionary;
   
   public class DoodleXMLInfo
   {
      
      private static var _dataLen:uint = 0;
      
      private static var _dataList:Dictionary = new Dictionary();
       
      
      public function DoodleXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Dictionary) : void
      {
         var _loc2_:Object = null;
         for each(_loc2_ in param1)
         {
            if(_loc2_["CatID"] == 2)
            {
               _dataList[_loc2_["ID"]] = _loc2_;
               ++_dataLen;
            }
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:Object = _dataList[param1];
         return _loc2_["name"];
      }
      
      public static function getPrice(param1:uint) : uint
      {
         var _loc2_:Object = _dataList[param1];
         return uint(_loc2_["Price"]);
      }
      
      public static function getColor(param1:uint) : uint
      {
         var _loc2_:Object = _dataList[param1];
         return uint(_loc2_["Color"]);
      }
      
      public static function getTexture(param1:uint) : uint
      {
         var _loc2_:Object = _dataList[param1];
         return uint(_loc2_["Texture"]);
      }
      
      public static function getList() : Dictionary
      {
         return _dataList;
      }
   }
}
