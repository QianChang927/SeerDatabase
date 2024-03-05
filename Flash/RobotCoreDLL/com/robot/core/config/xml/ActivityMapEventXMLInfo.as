package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ActivityMapEventXMLInfo
   {
      
      private static var xmlClass:Class = ActivityMapEventXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _eventMap_1:Array = [];
      
      private static var _eventID_1:Array = [];
      
      private static var _eventType_1:Array = [];
      
      private static var _eventTitle_1:Array = [];
      
      private static var _eventContent_1:Array = [];
      
      private static var _eventChooseA_1:Array = [];
      
      private static var _eventChooseB_1:Array = [];
      
      private static var _eventAffectA_1:Array = [];
      
      private static var _eventAffectB_1:Array = [];
      
      private static var _eventInfluenceA_1:Array = [];
      
      private static var _eventInfluenceB_1:Array = [];
      
      private static var _eventBossID_1:Array = [];
      
      private static var _eventBossSeq_1:Array = [];
      
      private static var _eventMap_2:Array = [];
      
      private static var _eventID_2:Array = [];
      
      private static var _eventType_2:Array = [];
      
      private static var _eventTitle_2:Array = [];
      
      private static var _eventContent_2:Array = [];
      
      private static var _eventChooseA_2:Array = [];
      
      private static var _eventChooseB_2:Array = [];
      
      private static var _eventAffectA_2:Array = [];
      
      private static var _eventAffectB_2:Array = [];
      
      private static var _eventInfluenceA_2:Array = [];
      
      private static var _eventInfluenceB_2:Array = [];
      
      private static var _eventBossID_2:Array = [];
      
      private static var _eventBossSeq_2:Array = [];
      
      private static var _eventMap_3:Array = [];
      
      private static var _eventID_3:Array = [];
      
      private static var _eventType_3:Array = [];
      
      private static var _eventTitle_3:Array = [];
      
      private static var _eventContent_3:Array = [];
      
      private static var _eventChooseA_3:Array = [];
      
      private static var _eventChooseB_3:Array = [];
      
      private static var _eventAffectA_3:Array = [];
      
      private static var _eventAffectB_3:Array = [];
      
      private static var _eventInfluenceA_3:Array = [];
      
      private static var _eventInfluenceB_3:Array = [];
      
      private static var _eventBossID_3:Array = [];
      
      private static var _eventBossSeq_3:Array = [];
      
      {
         setup();
      }
      
      public function ActivityMapEventXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("ActivityMapEventInfo");
         for each(_loc1_ in xl)
         {
            if(int(_loc1_.@MapID) == 1)
            {
               _eventMap_1.push(int(_loc1_.@MapID));
               _eventID_1.push(int(_loc1_.@EventID));
               _eventType_1.push(int(_loc1_.@EventType));
               _eventTitle_1.push(String(_loc1_.@EventTitle));
               _eventContent_1.push(String(_loc1_.@EventContent));
               _eventChooseA_1.push(String(_loc1_.@EventChooseA));
               _eventChooseB_1.push(String(_loc1_.@EventChooseB));
               _eventAffectA_1.push(String(_loc1_.@EventAffectA));
               _eventAffectB_1.push(String(_loc1_.@EventAffectB));
               _eventInfluenceA_1.push(String(_loc1_.@EventInfluenceA));
               _eventInfluenceB_1.push(String(_loc1_.@EventInfluenceB));
               _eventBossID_1.push(int(_loc1_.@BossID));
               _eventBossSeq_1.push(int(_loc1_.@BossSeq));
            }
            else if(int(_loc1_.@MapID) == 2)
            {
               _eventMap_2.push(int(_loc1_.@MapID));
               _eventID_2.push(int(_loc1_.@EventID));
               _eventType_2.push(int(_loc1_.@EventType));
               _eventTitle_2.push(String(_loc1_.@EventTitle));
               _eventContent_2.push(String(_loc1_.@EventContent));
               _eventChooseA_2.push(String(_loc1_.@EventChooseA));
               _eventChooseB_2.push(String(_loc1_.@EventChooseB));
               _eventAffectA_2.push(String(_loc1_.@EventAffectA));
               _eventAffectB_2.push(String(_loc1_.@EventAffectB));
               _eventInfluenceA_2.push(String(_loc1_.@EventInfluenceA));
               _eventInfluenceB_2.push(String(_loc1_.@EventInfluenceB));
               _eventBossID_2.push(int(_loc1_.@BossID));
               _eventBossSeq_2.push(int(_loc1_.@BossSeq));
            }
            else if(int(_loc1_.@MapID) == 3)
            {
               _eventMap_3.push(int(_loc1_.@MapID));
               _eventID_3.push(int(_loc1_.@EventID));
               _eventType_3.push(int(_loc1_.@EventType));
               _eventTitle_3.push(String(_loc1_.@EventTitle));
               _eventContent_3.push(String(_loc1_.@EventContent));
               _eventChooseA_3.push(String(_loc1_.@EventChooseA));
               _eventChooseB_3.push(String(_loc1_.@EventChooseB));
               _eventAffectA_3.push(String(_loc1_.@EventAffectA));
               _eventAffectB_3.push(String(_loc1_.@EventAffectB));
               _eventInfluenceA_3.push(String(_loc1_.@EventInfluenceA));
               _eventInfluenceB_3.push(String(_loc1_.@EventInfluenceB));
               _eventBossID_3.push(int(_loc1_.@BossID));
               _eventBossSeq_3.push(int(_loc1_.@BossSeq));
            }
            _dataMap.add(uint(_loc1_.@MapID),_loc1_);
         }
      }
      
      public static function getEventTitle(param1:int) : String
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _dataMap.getValues())
         {
            if(_loc3_.@EventID == param1)
            {
               return _loc3_.@EventTitle;
            }
         }
         return "1";
      }
      
      public static function get EventMap_1() : Array
      {
         return _eventMap_1;
      }
      
      public static function get EventID_1() : Array
      {
         return _eventID_1;
      }
      
      public static function get EventType_1() : Array
      {
         return _eventType_1;
      }
      
      public static function get EventTitle_1() : Array
      {
         return _eventTitle_1;
      }
      
      public static function get EventContent_1() : Array
      {
         return _eventContent_1;
      }
      
      public static function get EventChooseA_1() : Array
      {
         return _eventChooseA_1;
      }
      
      public static function get EventChooseB_1() : Array
      {
         return _eventChooseB_1;
      }
      
      public static function get EventAffectA_1() : Array
      {
         return _eventAffectA_1;
      }
      
      public static function get EventAffectB_1() : Array
      {
         return _eventAffectB_1;
      }
      
      public static function get EventInfluenceA_1() : Array
      {
         return _eventInfluenceA_1;
      }
      
      public static function get EventInfluenceB_1() : Array
      {
         return _eventInfluenceB_1;
      }
      
      public static function get EventBossID_1() : Array
      {
         return _eventBossID_1;
      }
      
      public static function get EventBossSeq_1() : Array
      {
         return _eventBossSeq_1;
      }
      
      public static function get EventMap_2() : Array
      {
         return _eventMap_2;
      }
      
      public static function get EventID_2() : Array
      {
         return _eventID_2;
      }
      
      public static function get EventType_2() : Array
      {
         return _eventType_2;
      }
      
      public static function get EventTitle_2() : Array
      {
         return _eventTitle_2;
      }
      
      public static function get EventContent_2() : Array
      {
         return _eventContent_2;
      }
      
      public static function get EventChooseA_2() : Array
      {
         return _eventChooseA_2;
      }
      
      public static function get EventChooseB_2() : Array
      {
         return _eventChooseB_2;
      }
      
      public static function get EventAffectA_2() : Array
      {
         return _eventAffectA_2;
      }
      
      public static function get EventAffectB_2() : Array
      {
         return _eventAffectB_2;
      }
      
      public static function get EventInfluenceA_2() : Array
      {
         return _eventInfluenceA_2;
      }
      
      public static function get EventInfluenceB_2() : Array
      {
         return _eventInfluenceB_2;
      }
      
      public static function get EventBossID_2() : Array
      {
         return _eventBossID_2;
      }
      
      public static function get EventBossSeq_2() : Array
      {
         return _eventBossSeq_2;
      }
      
      public static function get EventMap_3() : Array
      {
         return _eventMap_3;
      }
      
      public static function get EventID_3() : Array
      {
         return _eventID_3;
      }
      
      public static function get EventType_3() : Array
      {
         return _eventType_3;
      }
      
      public static function get EventTitle_3() : Array
      {
         return _eventTitle_3;
      }
      
      public static function get EventContent_3() : Array
      {
         return _eventContent_3;
      }
      
      public static function get EventChooseA_3() : Array
      {
         return _eventChooseA_3;
      }
      
      public static function get EventChooseB_3() : Array
      {
         return _eventChooseB_3;
      }
      
      public static function get EventAffectA_3() : Array
      {
         return _eventAffectA_3;
      }
      
      public static function get EventAffectB_3() : Array
      {
         return _eventAffectB_3;
      }
      
      public static function get EventInfluenceA_3() : Array
      {
         return _eventInfluenceA_3;
      }
      
      public static function get EventInfluenceB_3() : Array
      {
         return _eventInfluenceB_3;
      }
      
      public static function get EventBossID_3() : Array
      {
         return _eventBossID_3;
      }
      
      public static function get EventBossSeq_3() : Array
      {
         return _eventBossSeq_3;
      }
   }
}
