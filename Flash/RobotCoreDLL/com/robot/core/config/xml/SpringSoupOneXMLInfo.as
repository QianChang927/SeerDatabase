package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SpringSoupOneXMLInfo
   {
      
      private static var xmlClass:Class = SpringSoupOneXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _soupName:Array = [];
      
      private static var _soupDes:Array = [];
      
      private static var _soupBase:Array = [];
      
      private static var _askDes1:Array = [];
      
      private static var _askDes2:Array = [];
      
      private static var _askDes3:Array = [];
      
      {
         setup();
      }
      
      public function SpringSoupOneXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("SoupTruth");
         for each(_loc1_ in xl)
         {
            _soupName.push(String(_loc1_.@soupName));
            _soupDes.push(String(_loc1_.@soupDes));
            _soupBase.push(String(_loc1_.@soupBase));
            _askDes1.push(String(_loc1_.@askDes1));
            _askDes2.push(String(_loc1_.@askDes2));
            _askDes3.push(String(_loc1_.@askDes3));
         }
      }
      
      public static function get SoupName() : Array
      {
         return _soupName;
      }
      
      public static function get SoupDes() : Array
      {
         return _soupDes;
      }
      
      public static function get SoupBase() : Array
      {
         return _soupBase;
      }
      
      public static function get AskDes1() : Array
      {
         return _askDes1;
      }
      
      public static function get AskDes2() : Array
      {
         return _askDes2;
      }
      
      public static function get AskDes3() : Array
      {
         return _askDes3;
      }
   }
}
