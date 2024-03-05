package com.robot.core.config.xml
{
   public class DailyTaskXMLInfo
   {
      
      private static var xmlClass:Class = DailyTaskXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function DailyTaskXMLInfo()
      {
         super();
      }
      
      public static function getTypeXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("type");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@id == param1.toString())
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public static function getTaskXML(param1:uint, param2:uint) : XML
      {
         var _loc5_:XML = null;
         var _loc3_:XML = getTypeXML(param1);
         var _loc4_:XMLList;
         if((_loc4_ = _loc3_.descendants("task")) == null)
         {
            return null;
         }
         for each(_loc5_ in _loc4_)
         {
            if(_loc5_.@id == param2.toString())
            {
               return _loc5_;
            }
         }
         return null;
      }
   }
}
