package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MarketLimitedReturnXmlInfo
   {
      
      private static var xmlClass:Class = MarketLimitedReturnXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHashMap:HashMap;
      
      {
         setup();
      }
      
      public function MarketLimitedReturnXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _xml = XML(new xmlClass());
         _itemHashMap = new HashMap();
         var _loc1_:XMLList = _xml.elements("Actmintmarkback");
         for each(_loc2_ in _loc1_)
         {
            _itemHashMap.add(uint(_loc2_.@ID),_loc2_);
         }
      }
      
      public static function getItemsByIndex(param1:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:Array = _itemHashMap.getValues();
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            if((_loc5_ = _loc2_[_loc4_] as XML).@Page == param1)
            {
               (_loc6_ = new Object()).ID = _loc5_.@ID;
               _loc6_.MintmarkID = _loc5_.@MintmarkID;
               _loc6_.ItemID = _loc5_.@ItemID;
               _loc6_.ItemNum = _loc5_.@ItemNum;
               _loc6_.RewardID = _loc5_.@RewardID;
               _loc6_.RewardNum = _loc5_.@RewardNum;
               _loc6_.Page = _loc5_.@Page;
               _loc6_.PageNum = _loc5_.@PageNum;
               _loc3_.push(_loc6_);
            }
            _loc4_++;
         }
         return _loc3_;
      }
   }
}
