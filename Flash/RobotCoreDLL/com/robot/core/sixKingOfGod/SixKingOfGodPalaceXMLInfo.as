package com.robot.core.sixKingOfGod
{
   public class SixKingOfGodPalaceXMLInfo
   {
      
      private static var xmlClass:Class = SixKingOfGodPalaceXMLInfo_xmlClass;
      
      private static var xmlInfo:XML = XML(new xmlClass());
      
      private static var _taskInfo:Array;
      
      private static var _taskRuleList:Array;
      
      {
         setup();
      }
      
      public function SixKingOfGodPalaceXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc3_:SixKingOfGodPalaceTaskInfo = null;
         _taskInfo = new Array();
         _taskRuleList = new Array();
         var _loc2_:XMLList = xmlInfo.elements("Task").elements("Module");
         for each(_loc1_ in _loc2_)
         {
            _loc3_ = new SixKingOfGodPalaceTaskInfo();
            _loc3_.difficult = _loc1_.@difficult;
            _loc3_.difficultName = _loc1_.@difficultName;
            _loc3_.reward = int(_loc1_.@reward);
            _loc3_.extraRwd = int(_loc1_.@extraReward);
            _loc3_.rewardDes = _loc1_.@rewardDes;
            _loc3_.userRecommend = _loc1_.@userRecommend;
            _taskInfo.push(_loc3_);
         }
         _loc2_ = xmlInfo.elements("Rule").elements("Module");
         for each(_loc1_ in _loc2_)
         {
            _taskRuleList.push(String(_loc1_.@des));
         }
      }
      
      public static function get taskInfo() : Array
      {
         return _taskInfo;
      }
      
      public static function get taskRuleList() : Array
      {
         return _taskRuleList;
      }
   }
}
