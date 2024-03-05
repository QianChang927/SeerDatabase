package com.robot.core.config.xml
{
   public class NewSeerTask2013XMLInfo
   {
      
      private static var _xmlClass:Class = NewSeerTask2013XMLInfo__xmlClass;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function NewSeerTask2013XMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new _xmlClass());
      }
      
      public static function getBonusList(param1:uint, param2:uint) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:Array = null;
         var _loc8_:uint = 0;
         var _loc3_:String = getChild(param1,param2).@bonus;
         var _loc4_:Array = [];
         _loc5_ = 0;
         while(_loc5_ < 3)
         {
            _loc7_ = [];
            _loc6_ = 0;
            while(_loc6_ < 2)
            {
               _loc8_ = uint((_loc3_.split("|")[_loc5_] as String).split("*")[_loc6_]);
               _loc7_.push(_loc8_);
               _loc6_++;
            }
            _loc4_.push(_loc7_);
            _loc5_++;
         }
         return _loc4_;
      }
      
      public static function getRootLength(param1:uint) : uint
      {
         return uint(_xml.Root[param1].Child.length());
      }
      
      public static function getChild(param1:uint, param2:uint) : XML
      {
         return _xml.Root[param1].Child[param2];
      }
      
      public static function getDes(param1:uint, param2:uint) : String
      {
         return getChild(param1,param2).@Des;
      }
      
      public static function getName(param1:uint, param2:uint) : String
      {
         return getChild(param1,param2).@Name;
      }
   }
}
