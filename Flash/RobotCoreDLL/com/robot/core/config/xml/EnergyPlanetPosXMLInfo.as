package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class EnergyPlanetPosXMLInfo
   {
      
      private static var xmlClass:Class = EnergyPlanetPosXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function EnergyPlanetPosXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _hashMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.elements("item");
         for each(_loc1_ in _xmllist)
         {
            _hashMap.add(uint(_loc1_.@mapid),_loc1_);
         }
      }
      
      public static function getPosArrByMapID(param1:uint) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:XML = _hashMap.getValue(param1);
         for each(_loc4_ in _loc3_.children())
         {
            (_loc5_ = new Object()).xpos = uint(_loc4_.@xpos);
            _loc5_.ypos = uint(_loc4_.@ypos);
            _loc5_.id = uint(_loc4_.@id);
            _loc2_.push(_loc5_);
         }
         return _loc2_;
      }
   }
}
