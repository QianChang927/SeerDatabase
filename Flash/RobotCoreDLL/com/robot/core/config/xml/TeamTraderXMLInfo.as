package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.TeamTraderInfo;
   import org.taomee.ds.HashMap;
   
   public class TeamTraderXMLInfo
   {
      
      private static var xmlClass:Class = TeamTraderXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _dataMap:HashMap;
      
      private static var xml:XML;
      
      {
         setup();
      }
      
      public function TeamTraderXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:TeamTraderInfo = null;
         _dataMap = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new TeamTraderInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.item_id = int(_loc2_.@item_id);
            _loc3_.item_name = String(_loc2_.@item_name);
            _loc3_.tip_name = String(_loc2_.@tip_name);
            _loc3_.item_type = int(_loc2_.@item_type);
            _loc3_.output = int(_loc2_.@output);
            _loc3_.price = int(_loc2_.@price);
            _loc3_.limit_num = int(_loc2_.@limit_num);
            _loc3_.limit_type = int(_loc2_.@limit_type);
            _loc3_.visible = int(_loc2_.@visible);
            _loc3_.sorting = int(_loc2_.@sorting);
            _loc3_.UserInfoId = int(_loc2_.@UserInfoId);
            _loc3_.UserInfoPos = int(_loc2_.@UserInfoPos);
            _loc3_.NewMsglogId = int(_loc2_.@UserInfoPos);
            _dataMap.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getInfos() : Array
      {
         return _dataMap.getValues().sortOn("sorting",Array.NUMERIC);
      }
      
      public static function getInfoById(param1:int) : TeamTraderInfo
      {
         return _dataMap.getValue(param1);
      }
   }
}
