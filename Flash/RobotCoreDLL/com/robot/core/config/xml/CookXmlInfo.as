package com.robot.core.config.xml
{
   import com.robot.core.manager.MainManager;
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   
   public class CookXmlInfo
   {
      
      private static var xmlClass:Class = CookXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function CookXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.map;
         for each(_loc1_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc1_.@id.toString()) == false)
            {
               if(_loc1_.@id == 600001)
               {
                  _dataMap.add(MainManager.actorID,_loc1_);
               }
               else
               {
                  _dataMap.add(uint(_loc1_.@id),_loc1_);
               }
            }
         }
      }
      
      public static function getPos(param1:uint) : Point
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return new Point(int(_loc2_.@x),int(_loc2_.@y));
         }
         return null;
      }
   }
}
