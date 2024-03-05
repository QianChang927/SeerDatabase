package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.utils.Dictionary;
   import org.taomee.ds.HashMap;
   
   public class GreenHouseXMLInfo
   {
      
      private static var xmlClass:Class = GreenHouseXMLInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var xmllist:XMLList;
      
      private static var _seedDic:Dictionary = new Dictionary();
      
      private static var _seedShowMap:Dictionary = new Dictionary();
      
      private static var _stDic:Dictionary = new Dictionary();
      
      private static var _mineralMap:HashMap = new HashMap();
      
      private static var _fruitsMap:HashMap = new HashMap();
      
      private static var _plantCareTips:HashMap = new HashMap();
      
      public static var MaxLevel:int;
      
      {
         setup();
      }
      
      public function GreenHouseXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc2_:Object = null;
         var _loc3_:Dictionary = null;
         xml = XML(new xmlClass());
         xmllist = xml.elements("SpaceSeeds").elements("Seed");
         for each(_loc1_ in xmllist)
         {
            _loc2_ = parseXmlToObject(_loc1_,"ItemID");
            _seedDic[_loc2_.id] = _loc2_;
         }
         xmllist = xml.elements("ScienceTecnology").elements("ST");
         MaxLevel = 0;
         for each(_loc1_ in xmllist)
         {
            _loc2_ = parseXmlToObject(_loc1_,"Level");
            _stDic[_loc2_.id] = _loc2_;
            ++MaxLevel;
         }
         _loc3_ = new Dictionary();
         xmllist = xml.elements("CareTips").elements("CareTip1").elements("Tip");
         for each(_loc1_ in xmllist)
         {
            _loc2_ = parseXmlToObject(_loc1_,"ID");
            _loc3_[_loc2_.id] = _loc2_;
         }
         _plantCareTips.add(1,_loc3_);
         _loc3_ = new Dictionary();
         xmllist = xml.elements("CareTips").elements("CareTip2").elements("Tip");
         for each(_loc1_ in xmllist)
         {
            _loc2_ = parseXmlToObject(_loc1_,"ID");
            _loc3_[_loc2_.id] = _loc2_;
         }
         _plantCareTips.add(2,_loc3_);
      }
      
      private static function parseXmlToObject(param1:XML, param2:String) : Object
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc3_:Object = new Object();
         var _loc4_:XMLList = param1.attributes();
         for each(_loc5_ in _loc4_)
         {
            _loc6_ = String(_loc5_.name());
            _loc7_ = String(_loc5_);
            _loc3_[_loc6_] = _loc7_;
         }
         _loc3_.id = int(_loc3_[param2]);
         return _loc3_;
      }
      
      public static function getSeedsByQuality(param1:int = 0) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         if(_seedShowMap[param1] == null)
         {
            _loc2_ = new Array();
            for each(_loc3_ in _seedDic)
            {
               if(_loc3_ != null && (int(_loc3_["Quality"]) == param1 || 0 == param1))
               {
                  _loc2_.push(_loc3_);
               }
            }
         }
         else
         {
            _loc2_ = _seedShowMap[param1];
         }
         return _loc2_.concat();
      }
      
      public static function getSeedNeedPlantingLevel(param1:uint) : uint
      {
         return _seedDic[param1]["NeedPlantingLv"];
      }
      
      public static function getSeedMatureTime(param1:uint) : int
      {
         var _loc2_:int = int(_seedDic[param1]["MatureTime"]);
         return 60 * 60 * _loc2_;
      }
      
      public static function getSeedNote(param1:uint) : String
      {
         return _seedDic[param1]["note"];
      }
      
      public static function getSeedQuality(param1:uint) : uint
      {
         return _seedDic[param1]["Quality"];
      }
      
      public static function getSeedInfo(param1:uint) : Object
      {
         return _seedDic[param1];
      }
      
      public static function getEradicateCoins(param1:uint) : uint
      {
         return _seedDic[param1]["EradicateCoins"];
      }
      
      public static function getYiledingPlantSWFPath(param1:uint) : String
      {
         return ClientConfig.getResPath("appRes/system/greenhouse/plant/PL" + _seedDic[param1]["YiledingPlant"] + ".swf");
      }
      
      public static function getScienceAndTecnology(param1:uint) : Object
      {
         return _stDic[param1];
      }
      
      public static function getSTPoint(param1:uint) : uint
      {
         if(param1 >= MaxLevel)
         {
            param1 = uint(MaxLevel - 1);
         }
         return _stDic[param1]["STPoint"];
      }
      
      public static function getSTUpgradeCost(param1:uint) : uint
      {
         return _stDic[param1]["UpgradeCost"];
      }
      
      public static function getLandQuantity(param1:uint) : uint
      {
         return _stDic[param1]["LandQuantity"];
      }
      
      public static function getMaxFertilizer(param1:uint) : uint
      {
         return _stDic[param1]["MaxFertilizer"];
      }
      
      public static function getMaxWater(param1:uint) : uint
      {
         return _stDic[param1]["MaxWater"];
      }
      
      public static function getWaterCost(param1:uint) : uint
      {
         return _stDic[param1]["WaterCost"];
      }
      
      public static function get mineralMap() : HashMap
      {
         var _loc1_:Dictionary = null;
         var _loc2_:Object = null;
         if(_mineralMap == null || 0 == _mineralMap.length)
         {
            _loc1_ = ItemXMLInfo.itemDict;
            for each(_loc2_ in _loc1_)
            {
               if(10 == int(_loc2_["Sort"]) && Boolean(_loc2_["Fertilizer"]))
               {
                  _mineralMap.add(uint(_loc2_.ID),_loc2_);
               }
            }
         }
         return _mineralMap;
      }
      
      public static function getMineralMap() : Array
      {
         return mineralMap.getKeys();
      }
      
      public static function getMineral(param1:uint) : Object
      {
         return mineralMap.getValue(param1);
      }
      
      public static function getMineralFertilizer(param1:uint) : uint
      {
         return mineralMap.getValue(param1)["Fertilizer"];
      }
      
      public static function getMineralRule(param1:uint) : String
      {
         return mineralMap.getValue(param1)["Rule"];
      }
      
      public static function get fruitsMap() : HashMap
      {
         var _loc1_:Dictionary = null;
         var _loc2_:Object = null;
         if(_fruitsMap == null || 0 == _fruitsMap.length)
         {
            _loc1_ = ItemXMLInfo.itemDict;
            for each(_loc2_ in _loc1_)
            {
               if(15 == int(_loc2_["Sort"]))
               {
                  _fruitsMap.add(uint(_loc2_.ID),_loc2_);
               }
            }
         }
         return _fruitsMap;
      }
      
      public static function getFruitsMap() : Array
      {
         return fruitsMap.getKeys();
      }
      
      public static function getPlantCareTip(param1:uint, param2:uint) : String
      {
         return _plantCareTips.getValue(param1)[param2].tip;
      }
   }
}
