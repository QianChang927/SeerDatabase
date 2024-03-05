package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PveElvenKingTrialXmlInfo
   {
      
      private static var xmlClass:Class = PveElvenKingTrialXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _rewardshashMap:HashMap;
      
      private static var _swapshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmllist1:XMLList;
      
      private static var _xmllist2:XMLList;
      
      {
         setup();
      }
      
      public function PveElvenKingTrialXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         var _loc1_:XML = _xml.elements("items")[0];
         _xmllist = _loc1_.elements("item");
         for each(_loc2_ in _xmllist)
         {
            _itemshashMap.add(uint(_loc2_.@id),_loc2_);
         }
         _rewardshashMap = new HashMap();
         _loc3_ = _xml.elements("rewards")[0];
         _xmllist1 = _loc3_.elements("reward");
         for each(_loc4_ in _xmllist1)
         {
            _rewardshashMap.add(uint(_loc4_.@id),_loc4_);
         }
         _swapshashMap = new HashMap();
         _loc5_ = _xml.elements("swaps")[0];
         _xmllist2 = _loc5_.elements("swap");
         for each(_loc6_ in _xmllist2)
         {
            _swapshashMap.add(uint(_loc6_.@id),_loc6_);
         }
      }
      
      public static function getMonIdlength() : Array
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc1_:Array = new Array();
         for each(_loc2_ in _xmllist)
         {
            _loc3_ = int(_loc2_.@mon);
            if(_loc1_.indexOf(_loc3_) == -1)
            {
               _loc1_.push(_loc3_);
            }
         }
         return _loc1_;
      }
      
      public static function getMonInfoByMonId(param1:int, param2:int) : Object
      {
         var _loc3_:int = param1 * 3 - 2 + param2 - 1;
         var _loc4_:XML = _itemshashMap.getValue(_loc3_);
         var _loc5_:Object;
         (_loc5_ = new Object()).id = int(_loc4_.@id);
         _loc5_.mon = int(_loc4_.@mon);
         _loc5_.difficulty = int(_loc4_.@difficulty);
         _loc5_.bsreward = int(_loc4_.@bsreward);
         _loc5_.exreward = String(_loc4_.@exreward);
         _loc5_.bosslist = int(_loc4_.@bosslist);
         _loc5_.unlimite = int(_loc4_.@unlimite);
         return _loc5_;
      }
      
      public static function getRewardInfoByBsrewardId(param1:int) : Object
      {
         var _loc2_:XML = _rewardshashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@id);
         _loc3_.type = int(_loc2_.@type);
         _loc3_.realid = int(_loc2_.@realid);
         _loc3_.realcnt = int(_loc2_.@realcnt);
         return _loc3_;
      }
      
      public static function getAllMarkList() : Array
      {
         var _loc3_:XML = null;
         var _loc4_:Object = null;
         var _loc1_:Array = new Array();
         var _loc2_:int = 58;
         while(_loc2_ < 71)
         {
            _loc3_ = _rewardshashMap.getValue(_loc2_);
            (_loc4_ = new Object()).rewardid = int(_loc3_.@id);
            _loc4_.type = int(_loc3_.@type);
            _loc4_.realid = int(_loc3_.@realid);
            _loc4_.realcnt = int(_loc3_.@realcnt);
            _loc1_.push(_loc4_);
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function getSwapInfoById(param1:int) : Object
      {
         var _loc2_:XML = _swapshashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.needitem = int(_loc2_.@needitem);
         _loc3_.needcnt = int(_loc2_.@needcnt);
         if(_loc2_.@mon != null)
         {
            _loc3_.mon = _loc2_.@mon;
         }
         else
         {
            _loc3_.mon = "";
         }
         _loc3_.realcnt = _loc2_.@realcnt;
         return _loc3_;
      }
      
      public static function getSwapInfoByRewardsId(param1:int) : Object
      {
         var _loc4_:XML = null;
         var _loc2_:Object = new Object();
         var _loc3_:int = 19;
         while(_loc3_ < 32)
         {
            if((_loc4_ = _swapshashMap.getValue(_loc3_)).@rewards == param1)
            {
               _loc2_.needitem = int(_loc4_.@needitem);
               _loc2_.needcnt = int(_loc4_.@needcnt);
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
