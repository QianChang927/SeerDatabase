package com.robot.core.config.xml
{
   import com.robot.core.info.item.PetFavorItemInfo;
   import com.robot.core.info.pet.PetFavorInfo;
   import org.taomee.ds.HashMap;
   
   public class FavorabilityXmlInfo
   {
      
      private static var xmlClass:Class;
      
      private static var xl:XML;
      
      private static var FavorLevelInfos:Array;
      
      private static var FavorItemInfos:HashMap;
      
      {
         setup();
      }
      
      public function FavorabilityXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      public static function parseXml() : void
      {
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc5_:PetFavorInfo = null;
         var _loc6_:int = 0;
         var _loc7_:XML = null;
         var _loc8_:PetFavorInfo = null;
         var _loc9_:PetFavorItemInfo = null;
         var _loc1_:XMLList = xl.Likability.elements("Level");
         var _loc2_:Array = [];
         for each(_loc3_ in _loc1_)
         {
            _loc2_.push(_loc3_);
         }
         FavorLevelInfos = new Array(_loc2_.length);
         _loc4_ = int(FavorLevelInfos.length - 1);
         _loc5_ = new PetFavorInfo(_loc2_[_loc2_.length - 1]);
         FavorLevelInfos[_loc4_] = _loc5_;
         _loc6_ = _loc4_ - 1;
         while(_loc6_ >= 0)
         {
            _loc8_ = new PetFavorInfo(_loc2_[_loc6_],_loc5_);
            FavorLevelInfos[_loc6_] = _loc8_;
            _loc5_ = _loc8_;
            _loc6_--;
         }
         FavorLevelInfos[_loc4_].needConsume = FavorLevelInfos[_loc4_ - 1].needConsume;
         FavorItemInfos = new HashMap();
         _loc1_ = xl.Gifts.elements("Gift");
         for each(_loc7_ in _loc1_)
         {
            _loc9_ = new PetFavorItemInfo(_loc7_);
            FavorItemInfos.add(_loc9_.id,_loc9_);
         }
      }
      
      public static function getFavorLevel() : Array
      {
         return FavorLevelInfos;
      }
      
      public static function getLevelInfo(param1:int, param2:Boolean) : PetFavorInfo
      {
         var _loc4_:PetFavorInfo = null;
         if(param1 == 0)
         {
            return FavorLevelInfos[0];
         }
         var _loc3_:int = 0;
         while(_loc3_ < FavorLevelInfos.length)
         {
            _loc4_ = FavorLevelInfos[_loc3_];
            if(param1 == _loc4_.nextFavorInfo.totalConsume)
            {
               if(param2)
               {
                  return _loc4_;
               }
               return _loc4_.nextFavorInfo;
            }
            if(param1 > _loc4_.totalConsume && param1 < _loc4_.nextFavorInfo.totalConsume)
            {
               return _loc4_;
            }
            _loc3_++;
         }
         return null;
      }
      
      public static function getAllItemID() : Array
      {
         return FavorItemInfos.getKeys();
      }
      
      public static function getAllSuitableItemID(param1:int, param2:int) : Array
      {
         var _loc6_:PetFavorItemInfo = null;
         var _loc3_:Array = [];
         var _loc4_:* = "_" + param1.toString() + "_";
         var _loc5_:* = "_" + param2.toString() + "_";
         for each(_loc6_ in FavorItemInfos.getValues())
         {
            switch(_loc6_.limitType)
            {
               case 1:
                  _loc3_.push(_loc6_.id);
                  break;
               case 2:
                  if(_loc6_.limitArgs.indexOf(_loc4_) != -1)
                  {
                     _loc3_.push(_loc6_.id);
                  }
                  break;
               case 3:
                  if(_loc6_.limitPetClass.indexOf(_loc5_) != -1)
                  {
                     _loc3_.push(_loc6_.id);
                  }
                  break;
            }
         }
         return _loc3_;
      }
      
      public static function getAllItemInfo() : Array
      {
         return FavorItemInfos.getValues();
      }
      
      public static function getItemInfo(param1:int) : PetFavorItemInfo
      {
         return FavorItemInfos.getValue(param1);
      }
   }
}
