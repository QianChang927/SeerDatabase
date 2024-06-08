package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ExcavateXMLInfo
   {
      
      private static var excXMLClass:Class = ExcavateXMLInfo_excXMLClass;
      
      private static var excXML:XML;
      
      private static var evobossXMLClass:Class = ExcavateXMLInfo_evobossXMLClass;
      
      private static var evobossXML:XML;
      
      private static var Boss2MonsterID:Array = [];
      
      private static var LevelArr:Array = [];
      
      private static var huashiArr:Array = [];
      
      private static var bossid2PetID:HashMap;
      
      {
         setup();
      }
      
      public function ExcavateXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         excXML = XML(new excXMLClass());
         evobossXML = XML(new evobossXMLClass());
         Boss2MonsterID = [];
         var _loc1_:XMLList = excXML.elements("excavate_boss");
         for each(_loc2_ in _loc1_)
         {
            Boss2MonsterID.push(int(_loc2_.@monsterId));
         }
         LevelArr = [];
         _loc1_ = excXML.elements("excavate");
         for each(_loc3_ in _loc1_)
         {
            LevelArr.push(_loc3_);
            if(int(_loc3_.@type) == 3)
            {
               huashiArr.push(int(_loc3_.@ID));
            }
         }
         bossid2PetID = new HashMap();
         _loc1_ = evobossXML.elements("excavate_boss");
         for each(_loc4_ in _loc1_)
         {
            bossid2PetID.add(int(_loc4_.@ID),int(_loc4_.@monsterId));
         }
      }
      
      public static function getMonsterID(param1:int) : int
      {
         if(param1 == 0)
         {
            return 0;
         }
         return bossid2PetID.getValue(param1);
      }
      
      public static function getRewardCoinCnt(param1:int) : int
      {
         var _loc4_:XML = null;
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:String = null;
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         while(_loc3_ < param1)
         {
            _loc6_ = (_loc5_ = (_loc4_ = LevelArr[_loc3_]).@reward).split(";");
            for each(_loc7_ in _loc6_)
            {
               if(_loc7_.indexOf("1_1725939") == 0)
               {
                  _loc2_ += int(_loc7_.split("_")[2]);
               }
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getLevelInfo(param1:int) : Object
      {
         if(param1 == 0)
         {
            return {
               "bg":1,
               "event":1,
               "depth":0,
               "rewardArr":null,
               "rewardCntArr":null,
               "huashi":0
            };
         }
         if(param1 > LevelArr.length)
         {
            return null;
         }
         var _loc2_:XML = LevelArr[param1 - 1];
         var _loc3_:int = int(_loc2_.@state);
         var _loc4_:int = int(_loc2_.@type);
         var _loc5_:int = int(_loc2_.@depth);
         var _loc6_:Array = String(_loc2_.@reward).split(";");
         var _loc7_:Array = [];
         var _loc8_:Array = [];
         var _loc9_:int = 0;
         while(_loc9_ < _loc6_.length)
         {
            _loc7_.push(_loc6_[_loc9_].split("_")[1]);
            _loc8_.push(_loc6_[_loc9_].split("_")[2]);
            _loc9_++;
         }
         var _loc10_:int = huashiArr.indexOf(param1) + 1;
         return {
            "bg":_loc3_,
            "event":_loc4_,
            "depth":_loc5_,
            "rewardArr":_loc7_,
            "rewardCntArr":_loc8_,
            "huashi":_loc10_
         };
      }
   }
}
