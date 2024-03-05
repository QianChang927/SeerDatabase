package com.robot.core.config.xml
{
   public class MedaltaskXMLInfo
   {
      
      private static var TaskXMLClass:Class = MedaltaskXMLInfo_TaskXMLClass;
      
      private static var TaskXML:XML = XML(new TaskXMLClass());
       
      
      public function MedaltaskXMLInfo()
      {
         super();
      }
      
      public static function getMedalTaskXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = TaskXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
   }
}
