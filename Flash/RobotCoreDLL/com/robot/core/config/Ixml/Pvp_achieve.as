package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_achieveInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_achieve
   {
      
      private static var xmlClass:Class = Pvp_achieve_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_achieve()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_achieveInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_achieveInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.title = String(_loc2_.@title);
            _loc3_.describe = String(_loc2_.@describe);
            _loc3_.rewardinfo = String(_loc2_.@rewardinfo);
            _loc3_.foreverType = int(_loc2_.@foreverType);
            _loc3_.value = int(_loc2_.@value);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_achieveInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
