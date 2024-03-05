package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_StageConfigInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_StageConfig
   {
      
      private static var xmlClass:Class = Pvp_StageConfig_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_StageConfig()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_StageConfigInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_StageConfigInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.index = int(_loc2_.@index);
            _loc3_.order = int(_loc2_.@order);
            _loc3_.StageType = int(_loc2_.@StageType);
            _loc3_.monsterId = int(_loc2_.@monsterId);
            _loc3_.monsterName = String(_loc2_.@monsterName);
            _loc3_.bossIntro = String(_loc2_.@bossIntro);
            _loc3_.equip = int(_loc2_.@equip);
            _loc3_.title = int(_loc2_.@title);
            _loc3_.NeedMonNum = int(_loc2_.@NeedMonNum);
            _loc3_.fightBossIndexes = String(_loc2_.@fightBossIndexes);
            _loc3_.fightMonsterIndexs = String(_loc2_.@fightMonsterIndexs);
            _loc3_.firstReward = String(_loc2_.@firstReward);
            _loc3_.reward = String(_loc2_.@reward);
            _loc3_.UserInfoID = int(_loc2_.@UserInfoID);
            _loc3_.UserInfoPos = int(_loc2_.@UserInfoPos);
            _loc3_.NewMsglogId = int(_loc2_.@NewMsglogId);
            _loc3_.NewMsglogId2 = int(_loc2_.@NewMsglogId2);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_StageConfigInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
