package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class AttireconversionXMLInfo
   {
      
      private static var xmlClass:Class = AttireconversionXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _idArr:Array = [];
      
      private static var _subNum:Array = [];
      
      private static var _rewardID:Array = [];
      
      private static var _rewardNum:Array = [];
      
      private static var _exchangeNum:Array = [];
      
      private static var _userInfoArr:Array = [];
      
      private static var _platforp:Array = [];
      
      {
         setup();
      }
      
      public function AttireconversionXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("Attireconversion");
         for each(_loc1_ in xl)
         {
            if(int(_loc1_.@Platform) != 2)
            {
               _idArr.push(int(_loc1_.@ID));
               _subNum.push(int(_loc1_.@SubNum));
               _rewardID.push(int(_loc1_.@RewardID));
               _rewardNum.push(int(_loc1_.@RewardNum));
               _exchangeNum.push(int(_loc1_.@ExchangeNum));
               _platforp.push(int(_loc1_.@Platform));
               _userInfoArr.push(int(_loc1_.@UserInfo));
            }
         }
      }
      
      public static function getSubNumXML(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in xl)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return int(_loc2_.@SubNum);
            }
         }
         return 0;
      }
      
      public static function get IdArr() : Array
      {
         return _idArr;
      }
      
      public static function get SubNumArr() : Array
      {
         return _subNum;
      }
      
      public static function get RewardIDArr() : Array
      {
         return _rewardID;
      }
      
      public static function get RewardNumArr() : Array
      {
         return _rewardNum;
      }
      
      public static function get ExchangeNumArr() : Array
      {
         return _exchangeNum;
      }
      
      public static function get _Platforp() : Array
      {
         return _platforp;
      }
      
      public static function get UserInfoArr() : Array
      {
         return _userInfoArr;
      }
   }
}
