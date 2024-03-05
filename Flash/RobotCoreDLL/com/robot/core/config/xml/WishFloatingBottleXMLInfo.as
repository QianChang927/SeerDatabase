package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class WishFloatingBottleXMLInfo
   {
      
      private static var xmlClass:Class = WishFloatingBottleXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _wishrealid:Array = [];
      
      private static var _wishoutput:Array = [];
      
      {
         setup();
      }
      
      public function WishFloatingBottleXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("item");
         for each(_loc1_ in xl)
         {
            if(int(_loc1_.@type) == 2)
            {
               _wishrealid.push(String(_loc1_.@wishrealid));
               _wishoutput.push(String(_loc1_.@wishoutput));
            }
         }
      }
      
      public static function get wishrealid() : Array
      {
         return _wishrealid;
      }
      
      public static function get wishoutput() : Array
      {
         return _wishoutput;
      }
   }
}
