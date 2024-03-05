package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class UnbindmintXMLInfo
   {
      
      private static var xmlClass:Class = UnbindmintXMLInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var unlockmintList:HashMap;
      
      private static var unlockmintIDs:Array;
      
      private static var firstFreeFlag:int;
      
      private static var activityId:int;
      
      {
         setup();
      }
      
      public function UnbindmintXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xl = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc1_:XMLList = xl.UnbindActivity.elements("Unbindmintinfo");
         firstFreeFlag = int(xl.UnbindActivity.@FirstFreeFlag);
         activityId = int(xl.UnbindActivity.@CurStage);
         unlockmintIDs = [];
         unlockmintList = new HashMap();
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = int(_loc2_.@MintmarkID);
            _loc4_ = int(_loc2_.@NeedConsumeID);
            _loc5_ = int(_loc2_.@NeedConsumeNum);
            unlockmintList.add(_loc3_,[_loc4_,_loc5_]);
            unlockmintIDs.push(_loc3_);
         }
      }
      
      public static function checkAvailableMint(param1:int) : Boolean
      {
         return unlockmintIDs.indexOf(param1) != -1;
      }
      
      public static function getPay(param1:int) : Array
      {
         return unlockmintList.getValue(param1);
      }
      
      public static function getFreeFlagCMD() : int
      {
         return firstFreeFlag;
      }
      
      public static function getActivityId() : int
      {
         return activityId;
      }
   }
}
