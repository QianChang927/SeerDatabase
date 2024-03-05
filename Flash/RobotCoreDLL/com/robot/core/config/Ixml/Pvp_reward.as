package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_rewardInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_reward
   {
      
      private static var xmlClass:Class = Pvp_reward_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_reward()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_rewardInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_rewardInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.group = int(_loc2_.@group);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.reward = String(_loc2_.@reward);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_rewardInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
