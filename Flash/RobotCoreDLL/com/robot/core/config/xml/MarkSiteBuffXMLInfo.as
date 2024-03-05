package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MarkSiteBuffXMLInfo
   {
      
      private static var xmlClass:Class = MarkSiteBuffXMLInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var markBuffMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function MarkSiteBuffXMLInfo()
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
         var _loc1_:XMLList = xl.Buff;
         for each(_loc2_ in _loc1_)
         {
            markBuffMap.add(int(_loc2_.@ID),{
               "Name":String(_loc2_.@Name),
               "Type":int(_loc2_.@Type),
               "IconID":int(_loc2_.@IconID),
               "ImageID":int(_loc2_.@ImageID),
               "Kind":int(_loc2_.@Kind),
               "Range":int(_loc2_.@Range),
               "Round":int(_loc2_.@Round),
               "Remove":int(_loc2_.@Remove),
               "Desc":String(_loc2_.@Desc)
            });
         }
      }
      
      public static function getMarkSiteBuffInfo(param1:int) : Object
      {
         if(markBuffMap.containsKey(param1))
         {
            return markBuffMap.getValue(param1);
         }
         return null;
      }
   }
}
