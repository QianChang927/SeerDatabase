package com.robot.core.config.xml
{
   public class SpaceGuardXMLInfo
   {
      
      private static var xmlClass:Class = SpaceGuardXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function SpaceGuardXMLInfo()
      {
         super();
      }
      
      public static function getDialog() : String
      {
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc1_:Array = [];
         var _loc2_:XMLList = xml.descendants("Dialog");
         for each(_loc3_ in _loc2_)
         {
            _loc1_.push(_loc3_.@String);
         }
         _loc4_ = Math.random() * _loc1_.length;
         return _loc1_[_loc4_];
      }
      
      public static function getPosi(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("Guard");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@Map == param1.toString())
            {
               return [_loc3_.@PosiX,_loc3_.@PosiY];
            }
         }
         return null;
      }
   }
}
