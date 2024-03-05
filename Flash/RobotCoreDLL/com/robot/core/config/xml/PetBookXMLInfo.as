package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class PetBookXMLInfo
   {
      
      private static var xmlClass:Class = PetBookXMLInfo_xmlClass;
      
      private static var xmlClass1:Class = PetBookXMLInfo_xmlClass1;
      
      private static var _dataMap:HashMap;
      
      public static var maxID:uint = 0;
      
      private static var _hotpets:Array;
      
      private static var _hotpetsWeekly:Array;
      
      private static var hotpetWeek:XML;
      
      private static var _recMintmark:HashMap;
      
      private static var _petCollect:HashMap;
      
      private static var _hotPetMap:HashMap;
      
      private static var _hotSkinsWeekly:Array;
      
      private static var _hotClothsWeekly:Array;
      
      private static var _hotMarksWeekly:Array;
      
      {
         setup();
      }
      
      public function PetBookXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc9_:XML = null;
         var _loc10_:XMLList = null;
         var _loc11_:XML = null;
         var _loc12_:XML = null;
         var _loc13_:XMLList = null;
         var _loc14_:XML = null;
         var _loc15_:uint = 0;
         var _loc16_:Object = null;
         var _loc17_:XML = null;
         var _loc18_:XMLList = null;
         var _loc19_:XML = null;
         _dataMap = new HashMap();
         _hotpets = [];
         _hotpetsWeekly = [];
         _hotSkinsWeekly = [];
         _hotClothsWeekly = [];
         _hotMarksWeekly = [];
         _recMintmark = new HashMap();
         _petCollect = new HashMap();
         _loc1_ = XML(new xmlClass());
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            _loc1_ = XML(new xmlClass1());
         }
         var _loc2_:XMLList = _loc1_.elements("Monster");
         for each(_loc3_ in _loc2_)
         {
            _loc15_ = uint(_loc3_.@ID);
            _dataMap.add(_loc15_,_loc3_);
            if(_loc15_ > maxID)
            {
               maxID = _loc15_;
            }
         }
         _loc5_ = (_loc4_ = _loc1_.HotPet[0]).PetData;
         _hotPetMap = new HashMap();
         for each(_loc6_ in _loc5_)
         {
            _hotpets.push(_loc6_);
         }
         hotpetWeek = _loc1_.Hotspot[0].item[0];
         _loc7_ = hotpetWeek.place;
         for each(_loc8_ in _loc7_)
         {
            switch(int(_loc8_.@type))
            {
               case 0:
                  _hotpetsWeekly.push(_loc8_);
                  break;
               case 1:
                  _hotSkinsWeekly.push(_loc8_);
                  break;
               case 2:
                  _hotClothsWeekly.push(_loc8_);
                  break;
               case 3:
                  _hotMarksWeekly.push(_loc8_);
                  break;
            }
         }
         _loc10_ = (_loc9_ = _loc1_.RecMintmark[0]).place;
         for each(_loc11_ in _loc10_)
         {
            _recMintmark.add(uint(_loc11_.@ID),_loc11_);
         }
         _loc13_ = (_loc12_ = _loc1_.PetCollect[0]).Branch;
         for each(_loc14_ in _loc13_)
         {
            (_loc16_ = {}).id = int(_loc14_.@ID);
            _loc17_ = _loc14_.Export[0];
            _loc18_ = _loc14_.Collect;
            _loc16_.pets = [];
            for each(_loc19_ in _loc18_)
            {
               _loc16_.pets.push(_loc19_);
            }
            _petCollect.add(_loc16_.id,_loc16_);
         }
      }
      
      public static function getDesByPvpPveType(param1:int, param2:int) : String
      {
         return _hotPetMap.getValue(param1 + "_" + param2).@intro;
      }
      
      public static function getPetByPvpAndPveType(param1:int, param2:int) : Array
      {
         var _loc4_:Object = null;
         var _loc3_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < _hotpets.length)
         {
            if((_loc4_ = _hotpets[_loc5_]).type == param1 && _loc4_.bid == param2)
            {
               _loc3_.push(_loc4_);
            }
            _loc5_++;
         }
         return _loc3_;
      }
      
      public static function getAllHotPet() : Array
      {
         return _hotpets;
      }
      
      public static function getWeekHotDes() : String
      {
         return hotpetWeek.@intro;
      }
      
      public static function getWeekHotPets() : Array
      {
         return _hotpetsWeekly;
      }
      
      public static function getWeekHotSkins() : Array
      {
         return _hotSkinsWeekly;
      }
      
      public static function getWeekHotCloths() : Array
      {
         return _hotClothsWeekly;
      }
      
      public static function getWeekHotMarks() : Array
      {
         return _hotMarksWeekly;
      }
      
      public static function getCollectionByNum(param1:int) : Object
      {
         return _petCollect.getValue(param1);
      }
      
      public static function getRecMinMark(param1:int) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc2_:Array = [];
         var _loc3_:Array = _recMintmark.getValues();
         var _loc6_:int = 0;
         while(_loc6_ < _loc3_.length)
         {
            _loc4_ = _loc3_[_loc6_] as XML;
            _loc5_ = String(_loc4_.@Mintmark).split(",");
            _loc2_.push(parseInt(_loc5_[param1]));
            _loc6_++;
         }
         return _loc2_;
      }
      
      public static function getRecMarkXmlByPlace(param1:int) : XML
      {
         return _recMintmark.getValue(param1);
      }
      
      public static function get dataList() : Array
      {
         return _dataMap.getValues();
      }
      
      public static function getPetXML(param1:uint) : XML
      {
         return _dataMap.getValue(param1);
      }
      
      public static function get idList() : Array
      {
         return _dataMap.getKeys();
      }
      
      public static function getRec(param1:uint) : String
      {
         if(getPetXML(param1) == null)
         {
            return "";
         }
         return String(getPetXML(param1).@Rec);
      }
      
      public static function getName(param1:uint) : String
      {
         return getPetXML(param1).@DefName.toString();
      }
      
      public static function getType(param1:uint) : String
      {
         return getPetXML(param1).@Type.toString();
      }
      
      public static function getHeight(param1:uint) : String
      {
         if(getPetXML(param1) == null)
         {
            return "";
         }
         return getPetXML(param1).@Height.toString();
      }
      
      public static function getWeight(param1:uint) : String
      {
         if(getPetXML(param1) == null)
         {
            return "";
         }
         return getPetXML(param1).@Weight.toString();
      }
      
      public static function getFoundin(param1:uint) : String
      {
         return getPetXML(param1).@Foundin.toString();
      }
      
      public static function getFeatures(param1:uint) : String
      {
         if(getPetXML(param1) == null)
         {
            return "";
         }
         return getPetXML(param1).@Features.toString();
      }
      
      public static function getLabels(param1:int) : Array
      {
         if(getPetXML(param1) == null)
         {
            return null;
         }
         if(!getPetXML(param1).hasOwnProperty("@Label"))
         {
            return null;
         }
         return String(getPetXML(param1).@Label).split(",");
      }
      
      public static function hasSound(param1:uint) : Boolean
      {
         var _loc2_:XML = getPetXML(param1) as XML;
         if(_loc2_ == null)
         {
            return false;
         }
         if(_loc2_.hasOwnProperty("@hasSound"))
         {
            return Boolean(_loc2_.@hasSound);
         }
         return false;
      }
      
      public static function food(param1:uint) : String
      {
         return getPetXML(param1).@Food.toString();
      }
      
      public static function getNature(param1:uint) : String
      {
         return getPetXML(param1).@nature.toString();
      }
      
      public static function get dataMap() : HashMap
      {
         return _dataMap;
      }
      
      public static function getMapID(param1:uint) : uint
      {
         return uint(getPetXML(param1).@mapID);
      }
   }
}
