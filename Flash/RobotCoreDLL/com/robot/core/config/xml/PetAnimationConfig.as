package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.PetAnimationInfo;
   
   public class PetAnimationConfig
   {
      
      private static var xmlClass:Class = PetAnimationConfig_xmlClass;
      
      private static var _allInfoA:Array;
      
      {
         setup();
      }
      
      public function PetAnimationConfig()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:PetAnimationInfo = null;
         _allInfoA = new Array();
         var _loc1_:XMLList = XML(new xmlClass()).elements("animation");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new PetAnimationInfo();
            _loc3_.id = uint(_loc2_.@id);
            _loc3_.title = _loc2_.@title;
            _loc3_.onlineDate = uint(_loc2_.@onlineDate);
            _allInfoA.push(_loc3_);
         }
      }
      
      public static function get allInfoA() : Array
      {
         if(!_allInfoA)
         {
            _allInfoA = new Array();
         }
         return _allInfoA;
      }
   }
}
