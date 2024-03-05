package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TravelBookXMLInfo
   {
      
      private static var xmlClass:Class = TravelBookXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _nameDesc:Array = [];
      
      private static var _realidID:Array = [];
      
      private static var _type:Array = [];
      
      private static var _num:Array = [];
      
      private static var _args:Array = [];
      
      {
         setup();
      }
      
      public function TravelBookXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("Shop").elements("item");
         for each(_loc1_ in xl)
         {
            _nameDesc.push(String(_loc1_.@name));
            _realidID.push(int(_loc1_.@realid));
            _type.push(String(_loc1_.@type));
            _num.push(String(_loc1_.@num));
            _args.push(String(_loc1_.@Args));
         }
      }
      
      public static function get NameDesc() : Array
      {
         return _nameDesc;
      }
      
      public static function get RealidID() : Array
      {
         return _realidID;
      }
      
      public static function get Type() : Array
      {
         return _type;
      }
      
      public static function get Num() : Array
      {
         return _num;
      }
      
      public static function get Args() : Array
      {
         return _args;
      }
   }
}
