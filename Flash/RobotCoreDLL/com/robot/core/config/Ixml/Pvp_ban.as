package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_banInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_ban
   {
      
      private static var xmlClass:Class = Pvp_ban_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_ban()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_banInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_banInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.quantity = int(_loc2_.@quantity);
            _loc3_.name = String(_loc2_.@name);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_banInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
