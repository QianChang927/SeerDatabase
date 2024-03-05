package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.AdventureChapterInfo;
   import com.robot.core.config.xmlInfo.AdventureStoryInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   import org.taomee.ds.HashMap;
   
   public class AdventureStoryXMLInfo
   {
      
      private static var storyXMLClass:Class = AdventureStoryXMLInfo_storyXMLClass;
      
      private static var storyXMLClassV:Class = AdventureStoryXMLInfo_storyXMLClassV;
      
      private static var storyXML:XML;
      
      private static var chapterXMLClass:Class = AdventureStoryXMLInfo_chapterXMLClass;
      
      private static var chapterXMLClassV:Class = AdventureStoryXMLInfo_chapterXMLClassV;
      
      private static var chapterXML:XML;
      
      private static var storyHash:HashMap = new HashMap();
      
      private static var chapterHash:HashMap = new HashMap();
      
      public static var _latestChapterId:int = 0;
      
      {
         setup();
      }
      
      public function AdventureStoryXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:XML = null;
         var _loc5_:QName = null;
         var _loc6_:XML = null;
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            storyXML = XML(new storyXMLClassV());
            chapterXML = XML(new chapterXMLClassV());
         }
         else
         {
            storyXML = XML(new storyXMLClass());
            chapterXML = XML(new chapterXMLClass());
         }
         var _loc1_:XMLList = storyXML.elements("Story");
         for each(_loc4_ in _loc1_)
         {
            _loc2_ = int(_loc4_.@ID);
            _loc3_ = int(_loc4_.@chapterID);
            storyHash.add(_loc3_ + "-" + _loc2_,_loc4_);
         }
         _loc5_ = new QName(null,"new");
         _latestChapterId = chapterXML.attribute(_loc5_);
         _loc1_ = chapterXML.elements("Chapter");
         for each(_loc6_ in _loc1_)
         {
            chapterHash.add(int(_loc6_.@ID),_loc6_);
         }
      }
      
      public static function getStoryDesc(param1:int, param2:int) : Object
      {
         var _loc3_:XML = storyHash.getValue(param1 + "-" + param2);
         if(_loc3_ == null)
         {
            Alarm.show("缺少配置 Chapter Story ID：" + param1 + "  " + param2);
            return null;
         }
         return {
            "chapterID":int(_loc3_.@chapterID),
            "title":_loc3_.@Title,
            "bgm":_loc3_.@BGM,
            "des":_loc3_.@Des,
            "isFuture":_loc3_.@isFuture.toString()
         };
      }
      
      public static function getStoryDialog(param1:int, param2:int) : Array
      {
         var _loc6_:XML = null;
         var _loc7_:AdventureStoryInfo = null;
         var _loc3_:XML = storyHash.getValue(param1 + "-" + param2);
         if(_loc3_ == null)
         {
            Alarm.show("缺少配置 Story ID：" + param2 + "  " + param1);
            return null;
         }
         var _loc4_:XMLList = _loc3_.elements("dialog");
         var _loc5_:Array = [];
         for each(_loc6_ in _loc4_)
         {
            _loc7_ = new AdventureStoryInfo(_loc6_);
            _loc5_.push(_loc7_);
         }
         return _loc5_;
      }
      
      public static function getStoryRes(param1:int, param2:int) : Array
      {
         var _loc6_:XML = null;
         var _loc7_:String = null;
         var _loc8_:Array = null;
         var _loc9_:String = null;
         var _loc10_:String = null;
         var _loc3_:XML = storyHash.getValue(param1 + "-" + param2);
         var _loc4_:XMLList = _loc3_.elements("dialog");
         var _loc5_:Array = [];
         for each(_loc6_ in _loc4_)
         {
            if((_loc7_ = String(_loc6_.@param)) != "")
            {
               _loc8_ = _loc7_.split("|");
               for each(_loc9_ in _loc8_)
               {
                  if((_loc10_ = String(_loc9_.split(",")[0])).indexOf("amh") < 0)
                  {
                     if(_loc5_.indexOf(_loc10_) < 0)
                     {
                        _loc5_.push(_loc10_);
                     }
                  }
               }
            }
         }
         return _loc5_;
      }
      
      public static function getChapterInfo(param1:int) : AdventureChapterInfo
      {
         var _loc2_:XML = chapterHash.getValue(param1);
         if(_loc2_ == null)
         {
            return null;
         }
         return new AdventureChapterInfo(_loc2_);
      }
      
      public static function get latestChapterId() : int
      {
         return _latestChapterId;
      }
      
      public static function getAllChapterIds() : Array
      {
         var isLimited:Function = null;
         isLimited = function(param1:*, param2:int, param3:Array):Boolean
         {
            if(param1 == 1)
            {
               return true;
            }
            return true;
         };
         var result:Array = chapterHash.getKeys();
         result = result.filter(isLimited);
         result = result.sort(function(param1:Object, param2:Object):int
         {
            var _loc3_:* = int(chapterHash.getValue(param1).@Sort);
            var _loc4_:* = int(chapterHash.getValue(param2).@Sort);
            return _loc3_ < _loc4_ ? -1 : 1;
         });
         return result;
      }
   }
}
