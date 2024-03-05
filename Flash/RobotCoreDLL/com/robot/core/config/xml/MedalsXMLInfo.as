package com.robot.core.config.xml
{
   public class MedalsXMLInfo
   {
      
      private static var xmlClass:Class = MedalsXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function MedalsXMLInfo()
      {
         super();
      }
      
      public static function getMedalByIndex(param1:uint) : XML
      {
         var _loc2_:XMLList = xml.descendants("medal");
         return _loc2_[param1];
      }
      
      public static function getTitleList() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:XMLList = xml.descendants("medal");
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_.length())
         {
            _loc1_.push(_loc2_[_loc3_].@title);
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function getMedalIcon(param1:Number) : Array
      {
         var _loc2_:XMLList = xml.descendants("medal");
         var _loc3_:Array = [];
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_.length())
         {
            if(Number(_loc2_[_loc4_].@achievepoint) <= param1 && Number(_loc2_[_loc4_ + 1].@achievepoint) > param1)
            {
               _loc3_.push({
                  "icon":_loc2_[_loc4_].@medalicon,
                  "achievePoint":_loc2_[_loc4_].@achievepoint,
                  "title":_loc2_[_loc4_].@title,
                  "id":int(_loc2_[_loc4_].@id)
               });
               _loc3_.push({
                  "icon":_loc2_[_loc4_ + 1].@medalicon,
                  "achievePoint":_loc2_[_loc4_ + 1].@achievepoint,
                  "title":_loc2_[_loc4_ + 1].@title,
                  "id":int(_loc2_[_loc4_ + 1].@id)
               });
            }
            _loc4_++;
         }
         return _loc3_;
      }
   }
}
