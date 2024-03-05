package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SoundTidePlanXmlInfo
   {
      
      private static var xmlClass:Class = SoundTidePlanXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _taskHashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _curId:int = 0;
      
      public static var _randomIndex:int;
      
      {
         setup();
      }
      
      public function SoundTidePlanXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _taskHashMap = new HashMap();
         _xmllist = _xml.elements("MusicPlanTaskInfo");
         for each(_loc1_ in _xmllist)
         {
            _taskHashMap.add(uint(_loc1_.@TaskID),_loc1_);
         }
      }
      
      public static function getTaskInfoById(param1:int) : Object
      {
         var _loc2_:XML = _taskHashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.TaskID = int(_loc2_.@TaskID);
         _loc3_.TaskName = String(_loc2_.@TaskName);
         _loc3_.TaskKind = int(_loc2_.@TaskKind);
         _loc3_.TaskSetID = int(_loc2_.@TaskSetID);
         _loc3_.TaskSubStep = int(_loc2_.@TaskSubStep);
         _loc3_.TaskTarget = int(_loc2_.@TaskTarget);
         _loc3_.BaseRewardID = int(_loc2_.@BaseRewardID);
         _loc3_.BaseRewardCnt = int(_loc2_.@BaseRewardCnt);
         _loc3_.ExtraRewardID = int(_loc2_.@ExtraRewardID);
         _loc3_.ExtraRewardCnt = int(_loc2_.@ExtraRewardCnt);
         _loc3_.MainTaskStats = String(_loc2_.@MainTaskStats);
         _loc3_.GoToPath = String(_loc2_.@GoToPath);
         return _loc3_;
      }
      
      public static function getTaskInfosByTaskSetID(param1:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:Array = _taskHashMap.getValues();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_] as XML;
            if(int(_loc5_.@TaskSetID) == param1)
            {
               _loc6_ = getTaskInfoById(int(_loc5_.@TaskID));
               _loc2_.push(_loc6_);
            }
            _loc4_++;
         }
         _loc2_.sortOn("TaskSubStep",Array.NUMERIC);
         return _loc2_;
      }
   }
}
