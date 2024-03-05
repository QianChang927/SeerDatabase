package com.robot.core.config.xml
{
   public class ItemFilterXMLInfo
   {
      
      private static var xmlClass:Class = ItemFilterXMLInfo_xmlClass;
      
      public static var xml:XML = XML(new xmlClass());
      
      private static var _allIdList:Array = [];
      
      private static var _bloodIdList:Array = [];
      
      private static var _catchIdList:Array = [];
      
      private static var _statusIdList:Array = [];
      
      private static var _topLevelBloodIdList:Array = [];
      
      private static var _spCatchIdList:Array = [];
      
      private static var _superIdCatchIdList:Array = [];
      
      private static var _bonusList:Array = [];
      
      private static var _hpList:Array = [];
      
      private static var _ppList:Array = [];
      
      private static var _removeStatList:Array = [];
      
      private static var _peakJihadList:Array = [];
      
      private static var _goblinkingList:Array = [];
      
      private static var _sortList:Array = [];
      
      {
         setup();
      }
      
      public function ItemFilterXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XMLList = null;
         var _loc5_:XMLList = null;
         var _loc6_:XMLList = null;
         var _loc7_:XMLList = null;
         var _loc8_:XMLList = null;
         var _loc9_:XMLList = null;
         var _loc1_:XMLList = xml.Blood[0].Item;
         for each(_loc2_ in _loc1_)
         {
            _bloodIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _hpList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@HP);
            _ppList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@PP);
            _sortList[parseInt(_loc2_.@sort)] = parseInt(_loc2_.@sort);
         }
         _loc3_ = xml.Catch[0].Item;
         for each(_loc2_ in _loc3_)
         {
            _catchIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _bonusList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@Bonus);
         }
         _loc4_ = xml.Blood[0].Status[0].Item;
         for each(_loc2_ in _loc4_)
         {
            _bloodIdList.push(parseInt(_loc2_.@ID));
            _statusIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _removeStatList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@RemoveMonStat);
            _sortList[parseInt(_loc2_.@sort)] = parseInt(_loc2_.@sort);
         }
         _loc5_ = xml.Blood[0].TopLevel[0].Item;
         for each(_loc2_ in _loc5_)
         {
            _bloodIdList.push(parseInt(_loc2_.@ID));
            _topLevelBloodIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _hpList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@HP);
            _ppList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@PP);
         }
         _loc6_ = xml.Catch[0].SP[0].Item;
         for each(_loc2_ in _loc6_)
         {
            _catchIdList.push(parseInt(_loc2_.@ID));
            _spCatchIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
         }
         _loc7_ = xml.Catch[0].SUPER_ID[0].Item;
         for each(_loc2_ in _loc7_)
         {
            _catchIdList.push(parseInt(_loc2_.@ID));
            _superIdCatchIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
         }
         _loc8_ = xml.Blood[0].PeakJihad[0].Item;
         for each(_loc2_ in _loc8_)
         {
            _peakJihadList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _hpList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@HP);
            _ppList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@PP);
         }
         _loc9_ = xml.Blood[0].GoblinKing[0].Item;
         for each(_loc2_ in _loc9_)
         {
            _goblinkingList.push(parseInt(_loc2_.@ID));
            _statusIdList.push(parseInt(_loc2_.@ID));
            _allIdList.push(parseInt(_loc2_.@ID));
            _removeStatList[parseInt(_loc2_.@ID)] = parseInt(_loc2_.@RemoveMonStat);
         }
      }
      
      public static function isSPCatch(param1:uint) : Boolean
      {
         return _spCatchIdList.indexOf(param1) >= 0;
      }
      
      public static function isSuperIDCatch(param1:uint) : Boolean
      {
         return _superIdCatchIdList.indexOf(param1) >= 0;
      }
      
      public static function isCatch(param1:uint) : Boolean
      {
         return _catchIdList.indexOf(param1) >= 0;
      }
      
      public static function isBlood(param1:uint) : Boolean
      {
         return _bloodIdList.indexOf(param1) >= 0;
      }
      
      public static function pporblood(param1:uint) : int
      {
         if(_hpList[param1] > 0)
         {
            return 1;
         }
         if(_ppList[param1] > 0)
         {
            return 2;
         }
         if(_removeStatList[param1] >= 0)
         {
            return 3;
         }
         return 0;
      }
      
      public static function catchRate(param1:uint) : int
      {
         if(_bonusList[param1] == 256)
         {
            return 1;
         }
         if(_bonusList[param1])
         {
            return 2;
         }
         return 0;
      }
      
      public static function isStatusRemove(param1:uint) : Boolean
      {
         return _statusIdList.indexOf(param1) >= 0;
      }
      
      public static function isTopLevelBlood(param1:uint) : Boolean
      {
         return _topLevelBloodIdList.indexOf(param1) >= 0;
      }
      
      public static function isPeakJihadBlood(param1:uint) : Boolean
      {
         return _peakJihadList.indexOf(param1) >= 0;
      }
      
      public static function isGoblinKingBattleStatusItem(param1:uint) : Boolean
      {
         return _goblinkingList.indexOf(param1) >= 0;
      }
      
      public static function isHave(param1:uint) : Boolean
      {
         return _allIdList.indexOf(param1) >= 0;
      }
      
      public static function getSort(param1:int) : int
      {
         return _sortList[param1];
      }
      
      public static function getSecSortValue(param1:int) : int
      {
         if(_hpList[param1] > 0)
         {
            return _hpList[param1];
         }
         if(_ppList[param1] > 0)
         {
            return _ppList[param1];
         }
         if(_removeStatList[param1] >= 0)
         {
            return _removeStatList[param1];
         }
         return 0;
      }
   }
}
