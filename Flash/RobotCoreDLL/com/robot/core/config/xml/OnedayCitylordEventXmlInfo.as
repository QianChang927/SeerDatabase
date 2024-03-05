package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class OnedayCitylordEventXmlInfo
   {
      
      private static var xmlClass:Class = OnedayCitylordEventXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _eventHashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _curId:int = 0;
      
      public static var _randomIndex:int;
      
      {
         setup();
      }
      
      public function OnedayCitylordEventXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _eventHashMap = new HashMap();
         _xmllist = _xml.elements("OnedayCitylordEvent");
         for each(_loc1_ in _xmllist)
         {
            _eventHashMap.add(uint(_loc1_.@EventID),_loc1_);
         }
      }
      
      public static function getCurEvent(param1:int) : Object
      {
         var _loc5_:int = 0;
         var _loc2_:XML = _eventHashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.EventID = _loc2_.@EventID;
         _loc3_.FightVirtualBattleID = _loc2_.@FightVirtualBattleID;
         _loc3_.AChangeValue = _loc2_.@AChangeValue;
         _loc3_.BChangeValue = _loc2_.@BChangeValue;
         _loc3_.LoseValue = _loc2_.@LoseValue;
         _loc3_.HidenSetID = _loc2_.@HidenSetID;
         _loc3_.EventTitle = _loc2_.@EventTitle;
         _loc3_.EventDesc = _loc2_.@EventDesc;
         _loc3_.ChoiceATxt = _loc2_.@ChoiceATxt;
         _loc3_.ChoiceBTxt = _loc2_.@ChoiceBTxt;
         _loc3_.ResultATxt = _loc2_.@ResultATxt;
         _loc3_.ResultBTxt = _loc2_.@ResultBTxt;
         _loc3_.LoseTxt = _loc2_.@LoseTxt;
         var _loc4_:Array = _loc3_.EventTitle.split("_");
         if(_curId != param1)
         {
            _loc5_ = int(_loc4_.length);
            _randomIndex = int(Math.random() * _loc5_);
            _curId = param1;
         }
         _loc3_.randomIndex = _randomIndex;
         return _loc3_;
      }
   }
}
