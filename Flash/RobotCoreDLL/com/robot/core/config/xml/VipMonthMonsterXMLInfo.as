package com.robot.core.config.xml
{
   public class VipMonthMonsterXMLInfo
   {
      
      private static var xmlClass:Class = VipMonthMonsterXMLInfo_xmlClass;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function VipMonthMonsterXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         _xml = XML(new xmlClass());
      }
      
      public static function getvipneed(param1:int = 0) : Array
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@VipNeed);
            _loc3_ = _loc2_.split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = int(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getnotvipneed(param1:int = 0) : Array
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@NotVipNeed);
            _loc3_ = _loc2_.split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = int(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getPetForever(param1:int = 0) : Array
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@GotFlagInfo);
            _loc3_ = _loc2_.split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = int(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getMonthPetIds(param1:int = 0) : Array
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@MonstersID);
            _loc3_ = _loc2_.split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = int(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getMonthNum(param1:int = 0) : int
      {
         var _loc2_:String = null;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@CurMonth);
            return int(_loc2_);
         }
         return 0;
      }
      
      public static function getPetid(param1:int = 0) : int
      {
         var _loc2_:String = null;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@MonsterID);
            return int(_loc2_);
         }
         return 0;
      }
      
      public static function getCurrentYear(param1:int = 0) : int
      {
         var _loc2_:String = null;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@CurYear);
            return int(_loc2_);
         }
         return 0;
      }
      
      public static function getMonthGiftKey(param1:int = 0) : int
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@GotFlagInfo);
            _loc3_ = _loc2_.split(" ");
            return int(_loc3_[_loc3_.length - 1]);
         }
         return 0;
      }
      
      public static function getMonthVipKey(param1:int = 0) : int
      {
         var _loc2_:String = null;
         if(_xml)
         {
            _loc2_ = String(_xml.Item[param1].@RechargeMonthInfo);
            return int(_loc2_);
         }
         return 0;
      }
      
      public static function getBackVipAssete() : String
      {
         var _loc1_:String = null;
         if(_xml)
         {
            _loc1_ = String(_xml.resourse.@ulr);
            return _loc1_ + String(_xml.resourse.backVip.@ulr);
         }
         return null;
      }
      
      public static function getSeerVipSubAssete() : String
      {
         var _loc1_:String = null;
         if(_xml)
         {
            _loc1_ = String(_xml.resourse.@url);
            return _loc1_ + String(_xml.resourse.vipSub.@url);
         }
         return null;
      }
   }
}
