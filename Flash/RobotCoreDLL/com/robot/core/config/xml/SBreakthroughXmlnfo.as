package com.robot.core.config.xml
{
   import com.robot.core.info.sBreakthrouthInfo.PetBreakthrouthInfo;
   import com.robot.core.info.sBreakthrouthInfo.UniversalEggBreakthrouthInfo;
   import org.taomee.ds.HashMap;
   
   public class SBreakthroughXmlnfo
   {
      
      private static var xmlClass:Class = SBreakthroughXmlnfo_xmlClass;
      
      private static var _petInfos:Array = [];
      
      private static var _eggInfos:HashMap = new HashMap();
      
      private static var _engeyIds:Array = [];
      
      private static var _dnaIds:Array = [];
      
      private static var _eggItemIds:Array = [];
      
      {
         setUp();
      }
      
      public function SBreakthroughXmlnfo()
      {
         super();
      }
      
      public static function setUp() : void
      {
         var _loc3_:XML = null;
         var _loc4_:PetBreakthrouthInfo = null;
         var _loc5_:UniversalEggBreakthrouthInfo = null;
         var _loc6_:Object = null;
         var _loc7_:Array = null;
         var _loc8_:XMLList = null;
         var _loc9_:XML = null;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:XMLList = null;
         var _loc13_:XML = null;
         var _loc1_:XML = XML(new xmlClass());
         var _loc2_:XMLList = _loc1_.descendants("Reward");
         for each(_loc3_ in _loc2_)
         {
            (_loc4_ = new PetBreakthrouthInfo()).pid = int(_loc3_.@MonID);
            _loc4_.star = int(_loc3_.@Star);
            _loc4_.cardId = parseInt(String(_loc3_.@Card).split("/")[1]);
            _loc4_.cardNum = parseInt(String(_loc3_.@Card).split("/")[0]);
            _loc4_.middleItem = parseInt(String(_loc3_.@MiddleItem).split("/")[1]);
            _petInfos.push(_loc4_);
         }
         _loc2_ = _loc1_.elements("BreakThrough");
         for each(_loc3_ in _loc2_)
         {
            (_loc5_ = new UniversalEggBreakthrouthInfo()).itemId = int(_loc3_.@ID);
            _eggItemIds.push(_eggItemIds);
            _loc6_ = ItemXMLInfo.getItemInfo(_loc5_.itemId);
            _loc5_.type = parseInt(_loc6_["Type"]);
            _loc5_.level = parseInt(_loc6_["Lv"]);
            _loc7_ = [];
            _loc8_ = _loc3_.descendants("Mon");
            for each(_loc9_ in _loc8_)
            {
               _loc7_.push(int(_loc9_.@MonID));
            }
            _loc5_.outPutIds = _loc7_;
            _loc10_ = [];
            _loc11_ = [];
            _loc12_ = (_loc3_.elements("In")[0] as XML).elements("Item");
            for each(_loc13_ in _loc12_)
            {
               _loc10_.push(int(_loc13_.@ItemID));
               _loc11_.push(int(_loc13_.@Count));
            }
            _loc5_.needEnergyIds = _loc10_;
            _loc5_.needEnergyNums = _loc11_;
            _loc5_.rewardChance = int((_loc3_.elements("FailOut")[0] as XML).@Prob);
            _loc5_.outputCardId = int(((_loc3_.elements("FailOut")[0] as XML).elements("Item")[0] as XML).@ID);
            _loc5_.outputCardNum = int(((_loc3_.elements("FailOut")[0] as XML).elements("Item")[0] as XML).@Count);
            _eggInfos.add(_loc5_.itemId,_loc5_);
         }
         initItemsInfo();
      }
      
      public static function initItemsInfo() : void
      {
         var _loc1_:Object = null;
         for each(_loc1_ in ItemXMLInfo.itemDict)
         {
            if(_loc1_["CatID"] == 21)
            {
               if(_loc1_["Lv"] == "0")
               {
                  _dnaIds.push(parseInt(_loc1_["ID"]));
               }
               else
               {
                  _engeyIds.push(parseInt(_loc1_["ID"]));
               }
            }
         }
      }
      
      public static function getPids(param1:int, param2:int) : Array
      {
         var _loc4_:PetBreakthrouthInfo = null;
         var _loc3_:Array = [];
         for each(_loc4_ in _petInfos)
         {
            if(_loc4_.type == param1 && _loc4_.star == param2)
            {
               _loc3_.push(_loc4_.pid);
            }
         }
         return _loc3_;
      }
      
      public static function getPetBreakthrouthInfo(param1:int) : PetBreakthrouthInfo
      {
         var _loc2_:PetBreakthrouthInfo = null;
         for each(_loc2_ in _petInfos)
         {
            if(_loc2_.pid == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getEggBreakthrouthInfoByItemId(param1:int) : UniversalEggBreakthrouthInfo
      {
         return _eggInfos.getValue(param1);
      }
      
      public static function getEggBreakthrouthInfoByTypeLeve(param1:int, param2:int) : UniversalEggBreakthrouthInfo
      {
         var _loc3_:UniversalEggBreakthrouthInfo = null;
         for each(_loc3_ in _eggInfos.getValues())
         {
            if(_loc3_.level == param2 && _loc3_.type == param1)
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getEngeyId(param1:int, param2:int) : int
      {
         var _loc4_:int = 0;
         var _loc5_:Object = null;
         var _loc3_:int = 0;
         while(_loc3_ < _engeyIds.length)
         {
            _loc4_ = int(_engeyIds[_loc3_]);
            if((_loc5_ = ItemXMLInfo.getItemInfo(_loc4_))["Lv"] == param2 + "" && _loc5_["Type"] == param1 + "")
            {
               return _loc4_;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public static function getEngeyTypeByID(param1:int) : int
      {
         var _loc2_:Object = ItemXMLInfo.getItemInfo(param1);
         return parseInt(_loc2_["Type"]);
      }
      
      public static function getEngeyLevelByID(param1:int) : int
      {
         var _loc2_:Object = ItemXMLInfo.getItemInfo(param1);
         return parseInt(_loc2_["Lv"]);
      }
      
      public static function getDnaId(param1:int) : int
      {
         var _loc3_:int = 0;
         var _loc4_:Object = null;
         var _loc2_:int = 0;
         while(_loc2_ < dnaIds.length)
         {
            _loc3_ = int(_engeyIds[_loc2_]);
            if((_loc4_ = ItemXMLInfo.getItemInfo(_loc3_))["Type"] == param1 + "")
            {
               return _loc3_;
            }
            _loc2_++;
         }
         return 0;
      }
      
      public static function get engeyIds() : Array
      {
         return _engeyIds;
      }
      
      public static function get dnaIds() : Array
      {
         return _dnaIds;
      }
   }
}
