package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_BossConfigInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_BossConfig
   {
      
      private static var xmlClass:Class = Pvp_BossConfig_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_BossConfig()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_BossConfigInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_BossConfigInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.monsterId = int(_loc2_.@monsterId);
            _loc3_.monsterName = String(_loc2_.@monsterName);
            _loc3_.monsterLv = int(_loc2_.@monsterLv);
            _loc3_.baseData = String(_loc2_.@baseData);
            _loc3_.mintmarkData = String(_loc2_.@mintmarkData);
            _loc3_.extraData = String(_loc2_.@extraData);
            _loc3_.monsterMove = String(_loc2_.@monsterMove);
            _loc3_.monsterNewse = String(_loc2_.@monsterNewse);
            _loc3_.monsterEffect_id = int(_loc2_.@monsterEffect_id);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_BossConfigInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}