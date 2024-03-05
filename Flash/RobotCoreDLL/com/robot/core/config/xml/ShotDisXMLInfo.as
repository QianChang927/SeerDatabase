package com.robot.core.config.xml
{
   import com.robot.core.skeleton.ClothPreview;
   import org.taomee.ds.HashMap;
   
   public class ShotDisXMLInfo
   {
      
      private static var xmlClass:Class = ShotDisXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmllist:XMLList;
      
      private static var _map:HashMap;
      
      private static var DEFAULT:uint;
      
      {
         setup();
      }
      
      public function ShotDisXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         DEFAULT = uint(xml.@defaultDis);
         _map = new HashMap();
         var _loc1_:XMLList = xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _map.add(_loc2_.@id.toString(),_loc2_);
         }
      }
      
      public static function getDistance(param1:uint) : uint
      {
         var _loc2_:XML = _map.getValue(param1.toString());
         if(_loc2_)
         {
            return uint(_loc2_.@dis);
         }
         return DEFAULT;
      }
      
      public static function getClothDistance(param1:Array) : uint
      {
         var _loc2_:uint = 0;
         for each(_loc2_ in param1)
         {
            if(ClothXMLInfo.getItemInfo(_loc2_).type == ClothPreview.FLAG_HEAD)
            {
               break;
            }
         }
         return ItemXMLInfo.getShotDis(_loc2_);
      }
   }
}
