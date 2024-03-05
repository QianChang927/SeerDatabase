package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class VipWeekMonthXMLInfo
   {
      
      private static var xmlClass:Class = VipWeekMonthXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist1:XMLList;
      
      private static var _xmllist2:XMLList;
      
      private static var _soupDes1:Array = [];
      
      private static var _soupDes2:Array = [];
      
      private static var _soupDes3:Array = [];
      
      private static var _soupDes4:Array = [];
      
      private static var _soupDes5:Array = [];
      
      private static var _soupDes6:Array = [];
      
      private static var _monthDes1:Array = [];
      
      private static var _monthDes2:Array = [];
      
      private static var _monthDes3:Array = [];
      
      private static var _monthDes4:Array = [];
      
      private static var _monthDes5:Array = [];
      
      private static var _monthDes6:Array = [];
      
      private static var _monthDes7:Array = [];
      
      {
         setup();
      }
      
      public function VipWeekMonthXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _xmllist1 = _xml.elements("WeekDes");
         for each(_loc1_ in _xmllist1)
         {
            _soupDes1.push(String(_loc1_.@soupDes1));
            _soupDes2.push(String(_loc1_.@soupDes2));
            _soupDes3.push(String(_loc1_.@soupDes3));
            _soupDes4.push(String(_loc1_.@soupDes4));
            _soupDes5.push(String(_loc1_.@soupDes5));
            _soupDes6.push(String(_loc1_.@soupDes6));
         }
         _xmllist2 = _xml.elements("MonthDes");
         for each(_loc1_ in _xmllist2)
         {
            _monthDes1.push(String(_loc1_.@soupDes1));
            _monthDes2.push(String(_loc1_.@soupDes2));
            _monthDes3.push(String(_loc1_.@soupDes3));
            _monthDes4.push(String(_loc1_.@soupDes4));
            _monthDes5.push(String(_loc1_.@soupDes5));
            _monthDes6.push(String(_loc1_.@soupDes6));
            _monthDes7.push(String(_loc1_.@soupDes7));
         }
      }
      
      public static function get SoupDes1() : Array
      {
         return _soupDes1;
      }
      
      public static function get SoupDes2() : Array
      {
         return _soupDes2;
      }
      
      public static function get SoupDes3() : Array
      {
         return _soupDes3;
      }
      
      public static function get SoupDes4() : Array
      {
         return _soupDes4;
      }
      
      public static function get SoupDes5() : Array
      {
         return _soupDes5;
      }
      
      public static function get SoupDes6() : Array
      {
         return _soupDes6;
      }
      
      public static function get MonthDes1() : Array
      {
         return _monthDes1;
      }
      
      public static function get MonthDes2() : Array
      {
         return _monthDes2;
      }
      
      public static function get MonthDes3() : Array
      {
         return _monthDes3;
      }
      
      public static function get MonthDes4() : Array
      {
         return _monthDes4;
      }
      
      public static function get MonthDes5() : Array
      {
         return _monthDes5;
      }
      
      public static function get MonthDes6() : Array
      {
         return _monthDes6;
      }
      
      public static function get MonthDes7() : Array
      {
         return _monthDes7;
      }
   }
}
