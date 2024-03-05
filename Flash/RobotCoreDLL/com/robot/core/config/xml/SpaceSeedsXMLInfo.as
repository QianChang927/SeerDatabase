package com.robot.core.config.xml
{
   public class SpaceSeedsXMLInfo
   {
      
      private static var xmlClass:Class = SpaceSeedsXMLInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var xmllist:XMLList;
      
      private static var _seedShowList:Array;
      
      {
         setup();
      }
      
      public function SpaceSeedsXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _seedShowList = [];
         xml = XML(new xmlClass());
         xmllist = xml.elements("Seed");
         for each(_loc1_ in xmllist)
         {
            _seedShowList.push(_loc1_);
         }
      }
      
      public static function getSeeds() : Array
      {
         return _seedShowList.concat();
      }
      
      public static function getNeedPlantingLevel(param1:uint) : uint
      {
         var _loc2_:XML = getSeed(param1);
         if(_loc2_)
         {
            return _loc2_.@NeedPlantingLv;
         }
         return 0;
      }
      
      public static function getMatureTime(param1:uint) : uint
      {
         var _loc2_:XML = getSeed(param1);
         if(_loc2_)
         {
            return _loc2_.@MatureTime;
         }
         return 0;
      }
      
      public static function getNote(param1:uint) : String
      {
         var _loc2_:XML = getSeed(param1);
         if(_loc2_)
         {
            return _loc2_.@note;
         }
         return "";
      }
      
      private static function getSeed(param1:uint) : XML
      {
         var _loc2_:XML = null;
         var _loc3_:uint = _seedShowList.length;
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            if(_seedShowList[_loc4_].@ItemID == param1)
            {
               _loc2_ = _seedShowList[_loc4_];
               break;
            }
            _loc4_++;
         }
         return _loc2_;
      }
   }
}
