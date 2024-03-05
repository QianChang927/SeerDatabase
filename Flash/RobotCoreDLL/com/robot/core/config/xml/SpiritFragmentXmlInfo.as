package com.robot.core.config.xml
{
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   
   public class SpiritFragmentXmlInfo
   {
      
      private static var xmlClass:Class = SpiritFragmentXmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var fragment:Array;
      
      private static var limitPets:Array;
      
      {
         setup();
      }
      
      public function SpiritFragmentXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         fragment = [];
         var _loc1_:XMLList = xml.Fragment;
         limitPets = [];
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@ID);
            _loc3_.monsterID = int(_loc2_.@MonsterID);
            _loc3_.name = String(_loc2_.@Name);
            _loc3_.rarity = int(_loc2_.@Rarity);
            _loc3_.petlimit = int(_loc2_.@PetLimit);
            _loc3_.petConsume = int(_loc2_.@PetConsume);
            _loc3_.newSeIdx = String(_loc2_.@effectId);
            _loc3_.newseConsume = String(_loc2_.@NewseConsume);
            _loc3_.moveID = String(_loc2_.@MoveID);
            _loc3_.movesConsume = String(_loc2_.@MovesConsume);
            _loc3_.needmonID = String(_loc2_.@NeedmonID);
            _loc3_.show = int(_loc2_.@show);
            fragment.push(_loc3_);
            if(_loc3_.petlimit == 1)
            {
               limitPets.push(_loc3_.monsterID);
            }
         }
      }
      
      public static function getTotalNum(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = getfragmentInfoByMonsterId(param1);
         if(_loc3_)
         {
            _loc2_ = _loc3_.petConsume + int(_loc3_.movesConsume) + int(_loc3_.newseConsume.split("_")[0]);
         }
         return _loc2_;
      }
      
      public static function getNeedPetConsume(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = getfragmentInfoByMonsterId(param1);
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.petConsume);
         }
         return _loc2_;
      }
      
      public static function getNeedmovesConsume(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = getfragmentInfoByMonsterId(param1);
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.movesConsume);
         }
         return _loc2_;
      }
      
      public static function getNeednewseConsume(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = getfragmentInfoByMonsterId(param1);
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.newseConsume.split("_")[0]);
         }
         return _loc2_;
      }
      
      public static function getfragmentInfoByMonsterId(param1:int) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in fragment)
         {
            if(_loc2_["monsterID"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getAllFragment() : Array
      {
         var _loc3_:SingleItemInfo = null;
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < fragment.length)
         {
            _loc3_ = new SingleItemInfo();
            _loc3_.itemID = fragment[_loc2_].id;
            _loc3_.itemNum = ItemManager.getNumByID(_loc3_.itemID);
            if(fragment[_loc2_].show == 1)
            {
               _loc1_.push(_loc3_);
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function getLimitPetArr() : Array
      {
         return limitPets;
      }
      
      public static function getfragmentInfoById(param1:int) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in fragment)
         {
            if(_loc2_["id"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getPetIdById(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = null;
         for each(_loc3_ in fragment)
         {
            if(_loc3_["id"] == param1)
            {
               return _loc3_.monsterID;
            }
         }
         return _loc2_;
      }
   }
}
