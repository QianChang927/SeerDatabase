package com.robot.core.config.xml
{
   public class FreeMonsterListXMLInfo
   {
      
      private static var xmlClass:Class = FreeMonsterListXMLInfo_xmlClass;
      
      private static var xmlInfo:XML = XML(new xmlClass());
       
      
      public function FreeMonsterListXMLInfo()
      {
         super();
      }
      
      public static function GetUpdateDes() : String
      {
         return xmlInfo.@UpdateDes;
      }
      
      public static function GetSumDes() : String
      {
         return xmlInfo.@SumDes;
      }
      
      public static function getAllLimitList() : Array
      {
         var _loc3_:XML = null;
         var _loc1_:Array = [];
         var _loc2_:XMLList = xmlInfo.descendants("Monster");
         for each(_loc3_ in _loc2_)
         {
            _loc1_.push(int(_loc3_.@petId));
         }
         return _loc1_;
      }
      
      public static function getLatestLimitList() : Array
      {
         var _loc3_:XML = null;
         var _loc1_:Array = [];
         var _loc2_:XMLList = xmlInfo.descendants("Monster");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@isNew != null)
            {
               if(_loc3_.@isNew > 0)
               {
                  _loc1_.push(int(_loc3_.@petId));
               }
            }
         }
         return _loc1_;
      }
   }
}
