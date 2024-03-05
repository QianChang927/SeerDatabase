package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ZhuijiXmlInfo
   {
      
      private static var xmlClass:Class = ZhuijiXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      {
         setup();
      }
      
      public function ZhuijiXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("Move");
         for each(_loc1_ in xl)
         {
            _dataMap.add(int(_loc1_.@ID),_loc1_);
         }
      }
      
      public static function getMonsterID(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@monster);
         }
         return 0;
      }
      
      public static function getAnmStr(param1:int, param2:int = 0) : String
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc5_ = (_loc4_ = String(_loc3_.@skin).split(":")).indexOf(param2.toString());
            _loc6_ = String(_loc3_.@anm).split(":");
            if(_loc5_ == -1)
            {
               _loc5_ = 0;
            }
            return _loc6_[_loc5_];
         }
         return "";
      }
      
      public static function getCover(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@cover);
         }
         return 0;
      }
      
      public static function showDamage(param1:int) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@damage) == 1;
         }
         return false;
      }
      
      public static function getReportTxtStr(param1:int, param2:int = 0) : String
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:Array = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            if((_loc5_ = (_loc4_ = String(_loc3_.@skin).split(":")).indexOf(param2.toString())) < 0)
            {
               _loc5_ = 0;
            }
            _loc6_ = String(_loc3_.@reportname).split(":");
            _loc7_ = String(_loc3_.@reportskill).split(":");
            _loc8_ = String(_loc3_.@reporttxt).split(":");
         }
         return _loc6_[_loc5_] + "使用了" + _loc7_[_loc5_] + (_loc8_[_loc5_] == "" ? "" : _loc6_[_loc5_]) + _loc8_[_loc5_];
      }
      
      public static function getreportname(param1:int, param2:int = 0, param3:String = "") : String
      {
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:Array = null;
         var _loc4_:XML;
         if(_loc4_ = _dataMap.getValue(param1))
         {
            if((_loc6_ = (_loc5_ = String(_loc4_.@skin).split(":")).indexOf(param2.toString())) < 0 || param2 == 0)
            {
               return param3;
            }
            return (_loc7_ = String(_loc4_.@reportname).split(":"))[_loc6_];
         }
         return param3;
      }
      
      public static function getreportskill(param1:int, param2:int = 0) : String
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            if((_loc5_ = (_loc4_ = String(_loc3_.@skin).split(":")).indexOf(param2.toString())) < 0)
            {
               _loc5_ = 0;
            }
            _loc6_ = String(_loc3_.@reportskill).split(":");
         }
         return _loc6_[_loc5_];
      }
      
      public static function getreporttxt(param1:int, param2:int = 0) : String
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Array = null;
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            if((_loc5_ = (_loc4_ = String(_loc3_.@skin).split(":")).indexOf(param2.toString())) < 0)
            {
               _loc5_ = 0;
            }
            _loc6_ = String(_loc3_.@reporttxt).split(":");
         }
         return _loc6_[_loc5_];
      }
   }
}
