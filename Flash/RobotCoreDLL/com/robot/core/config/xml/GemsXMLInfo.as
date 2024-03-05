package com.robot.core.config.xml
{
   import com.robot.core.info.skillEffectInfo.EffectInfoManager;
   import org.taomee.ds.HashMap;
   
   public class GemsXMLInfo
   {
      
      private static var xmlClass:Class = GemsXMLInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var xmllist:XMLList;
      
      private static var _gemsMap:HashMap;
      
      private static var _lv1Map:HashMap;
      
      private static var _getAllGems:Array = [];
      
      {
         setup();
      }
      
      public function GemsXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc2_:XMLList = null;
         var _loc3_:Object = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:Array = null;
         var _loc7_:XML = null;
         var _loc8_:String = null;
         var _loc9_:String = null;
         var _loc10_:XMLList = null;
         var _loc11_:Object = null;
         var _loc12_:XML = null;
         xml = XML(new xmlClass());
         xmllist = xml.elements("Gem");
         _gemsMap = new HashMap();
         _lv1Map = new HashMap();
         for each(_loc1_ in xmllist)
         {
            _loc2_ = _loc1_.attributes();
            _loc3_ = {};
            for each(_loc4_ in _loc2_)
            {
               _loc8_ = String(_loc4_.name());
               _loc9_ = String(_loc4_);
               _loc3_[_loc8_] = _loc9_;
            }
            _loc5_ = _loc1_.elements("SkillEffects").elements("Effect");
            _loc6_ = [];
            for each(_loc7_ in _loc5_)
            {
               _loc10_ = _loc7_.attributes();
               _loc11_ = {};
               for each(_loc12_ in _loc10_)
               {
                  _loc8_ = String(_loc12_.name());
                  _loc9_ = String(_loc12_);
                  _loc11_[_loc8_] = _loc9_;
               }
               _loc6_.push(_loc11_);
            }
            _loc3_["SkillEffects"] = _loc6_;
            _gemsMap.add(uint(_loc1_.@ID),_loc3_);
            _getAllGems.push(int(_loc1_.@ID));
            if(_loc1_.@Lv == 1)
            {
               _lv1Map.add(uint(_loc1_.@Category),_loc3_);
            }
         }
      }
      
      public static function get GetAllGems() : Array
      {
         return _getAllGems;
      }
      
      public static function get gemsMap() : HashMap
      {
         return _gemsMap;
      }
      
      public static function get lv1Map() : HashMap
      {
         return _lv1Map;
      }
      
      public static function getEffect(param1:uint) : String
      {
         var _loc4_:Object = null;
         var _loc5_:uint = 0;
         var _loc6_:Array = null;
         var _loc7_:String = null;
         if(gemsMap.getValue(param1) == null)
         {
            return "";
         }
         var _loc2_:Array = gemsMap.getValue(param1)["SkillEffects"] as Array;
         var _loc3_:String = "";
         for each(_loc4_ in _loc2_)
         {
            _loc5_ = uint(_loc4_["EffectId"]);
            _loc6_ = String(_loc4_["Param"]).split(" ");
            if(_loc5_ != 0)
            {
               _loc7_ = EffectInfoManager.getInfo(_loc5_,_loc6_);
               if(_loc3_ == "")
               {
                  _loc3_ += _loc7_;
               }
               else
               {
                  _loc3_ += "\r" + _loc7_;
               }
            }
         }
         return _loc3_;
      }
      
      public static function getDes(param1:uint) : String
      {
         if(gemsMap.getValue(param1))
         {
            return gemsMap.getValue(param1)["Des"];
         }
         return "";
      }
      
      public static function getName(param1:uint) : String
      {
         if(gemsMap.getValue(param1))
         {
            return gemsMap.getValue(param1)["Name"];
         }
         return "";
      }
      
      public static function getCategory(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["Category"]);
         }
         return 0;
      }
      
      public static function getLv(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["Lv"]);
         }
         return 0;
      }
      
      public static function getEquitLv1Cnt1(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["EquitLv1Cnt1"]);
         }
         return 0;
      }
      
      public static function getPromoteItemId(param1:uint) : uint
      {
         if(gemsMap.getValue(param1))
         {
            return uint(gemsMap.getValue(param1)["PromoteItemId"]);
         }
         return 0;
      }
      
      public static function getItemProb(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["ItemProb"]);
         }
         return 0;
      }
      
      public static function getUpgradeGemId(param1:uint) : uint
      {
         if(gemsMap.getValue(param1))
         {
            return uint(gemsMap.getValue(param1)["UpgradeGemId"]);
         }
         return 0;
      }
      
      public static function getUpgradeFailCompensanteProb(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["UpgradeFailCompensanteProb"]);
         }
         return 0;
      }
      
      public static function getInlayProb(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["InlayProb"]);
         }
         return 0;
      }
      
      public static function getFailCompensateStart(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["FailCompensateStart"]);
         }
         return 0;
      }
      
      public static function getFailCompensateEnd(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["FailCompensateEnd"]);
         }
         return 0;
      }
      
      public static function getInlayPromoteItem(param1:uint) : uint
      {
         if(gemsMap.getValue(param1))
         {
            return uint(gemsMap.getValue(param1)["InlayPromoteItem"]);
         }
         return 0;
      }
      
      public static function getInlayPromoteProb(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["InlayPromoteProb"]);
         }
         return 0;
      }
      
      public static function getDecomposeProb(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["DecomposeProb"]);
         }
         return 0;
      }
      
      public static function getLv1ItemID(param1:uint) : uint
      {
         var _loc2_:int = getCategory(param1);
         if(_loc2_ != 0)
         {
            if(lv1Map.getValue(_loc2_))
            {
               return uint(lv1Map.getValue(_loc2_)["ID"]);
            }
            return 0;
         }
         return 0;
      }
      
      public static function getFightPower(param1:uint) : int
      {
         if(gemsMap.getValue(param1))
         {
            return int(gemsMap.getValue(param1)["cap_lv"]);
         }
         return 0;
      }
   }
}
