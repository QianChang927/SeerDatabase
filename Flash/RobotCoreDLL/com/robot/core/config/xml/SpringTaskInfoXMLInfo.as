package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SpringTaskInfoXMLInfo
   {
      
      private static var xmlClass:Class = SpringTaskInfoXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function SpringTaskInfoXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.SpringTaskInfo;
      }
      
      public static function getTaskSubStep(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@TaskID) == param1)
            {
               return int(_loc2_.@TaskSubStep);
            }
         }
         return 0;
      }
      
      public static function getTaskRewardCnt(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@TaskID) == param1)
            {
               return int(_loc2_.@TaskRewardCnt);
            }
         }
         return 0;
      }
      
      public static function getTaskRewardCntTwo(param1:int, param2:int, param3:int) : int
      {
         var _loc4_:XML = null;
         for each(_loc4_ in _xmllist)
         {
            if(int(_loc4_.@Taskkind) == param1 && int(_loc4_.@Tasktype) == param2 && int(_loc4_.@TaskSubStep) == param3)
            {
               return int(_loc4_.@TaskRewardCnt);
            }
         }
         return 0;
      }
      
      public static function getTaskTaskIDTwo(param1:int, param2:int, param3:int) : int
      {
         var _loc4_:XML = null;
         for each(_loc4_ in _xmllist)
         {
            if(int(_loc4_.@Taskkind) == param1 && int(_loc4_.@Tasktype) == param2 && int(_loc4_.@TaskSubStep) == param3)
            {
               return int(_loc4_.@TaskID);
            }
         }
         return 0;
      }
      
      public static function getTaskTasktarget(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@TaskID) == param1)
            {
               return int(_loc2_.@Tasktarget);
            }
         }
         return 0;
      }
   }
}
