package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class NoticeCenterXmlInfo
   {
      
      private static var xmlClass:Class = NoticeCenterXmlInfo_xmlClass;
      
      private static var xmlClass1:Class = NoticeCenterXmlInfo_xmlClass1;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _notices:HashMap;
      
      {
         setup();
      }
      
      public function NoticeCenterXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         if(SystemTimerManager.splitVersion2022(true) == 0)
         {
            _xml = XML(new xmlClass());
         }
         else
         {
            _xml = XML(new xmlClass1());
         }
         _notices = new HashMap();
         var _loc1_:XMLList = _xml.Tips;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@ID);
            _loc3_.type = int(_loc2_.@Type);
            _loc3_.title = String(_loc2_.@title);
            _loc3_.pic = String(_loc2_.@pic);
            _loc3_.sort = int(_loc2_.@sort);
            _loc3_.tab = String(_loc2_.@Tab);
            _loc3_.des = String(_loc2_.describe).split("\r\n").join("\r");
            _notices.add(_loc3_.id,_loc3_);
         }
      }
      
      public static function getAllNotices() : Array
      {
         var _loc1_:Array = _notices.getValues();
         _loc1_.sortOn("sort",Array.NUMERIC);
         return _loc1_;
      }
   }
}
