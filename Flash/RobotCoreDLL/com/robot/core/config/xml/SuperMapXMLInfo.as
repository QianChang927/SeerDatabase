package com.robot.core.config.xml
{
   import flash.geom.Point;
   
   public class SuperMapXMLInfo
   {
      
      private static var xmlClass:Class = SuperMapXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmllist:XMLList;
      
      {
         setup();
      }
      
      public function SuperMapXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         xmllist = xml.elements("maps");
      }
      
      public static function getWorldMapPos(param1:uint) : Point
      {
         var xml:XML = null;
         var x:Number = NaN;
         var y:Number = NaN;
         var point:Point = null;
         var id:uint = param1;
         xml = xmllist.(@id == id)[0];
         if(xml == null)
         {
            return null;
         }
         x = Number(xml.@x);
         y = Number(xml.@y);
         point = new Point(x,y);
         return point;
      }
      
      public static function getStat1(param1:uint) : uint
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = xmllist.(@id == id)[0];
         if(xml == null)
         {
            return 0;
         }
         return xml.@stat1;
      }
      
      public static function getStat2(param1:uint) : uint
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = xmllist.(@id == id)[0];
         if(xml == null)
         {
            return 0;
         }
         return xml.@stat2;
      }
      
      public static function getCurrentGalaxy(param1:uint) : uint
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = xmllist.(@id == id)[0];
         if(xml == null)
         {
            return 0;
         }
         return xml.@galaxy;
      }
      
      public static function getMapsByGalaxy(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = new Array();
         for each(_loc3_ in xmllist)
         {
            if(_loc3_.@id == param1)
            {
               _loc2_.push({
                  "id":_loc3_.@id,
                  "name":_loc3_.@name
               });
            }
         }
         return _loc2_;
      }
   }
}
