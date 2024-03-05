package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class PetJackpotXmlInfo
   {
      
      private static var xmlClass:Class = PetJackpotXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _poolHash:HashMap;
      
      private static var _petHashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmllist1:XMLList;
      
      private static var _sortOnArr:Array;
      
      private static var _shopPetHashMap:HashMap;
      
      private static var _shopItemHashMap:HashMap;
      
      {
         setup();
      }
      
      public function PetJackpotXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc9_:XMLList = null;
         var _loc10_:int = 0;
         var _loc11_:XML = null;
         var _loc12_:XMLList = null;
         var _loc13_:int = 0;
         var _loc14_:XML = null;
         var _loc15_:int = 0;
         _xml = XML(new xmlClass());
         _poolHash = new HashMap();
         _petHashMap = new HashMap();
         var _loc1_:XMLList = _xml.elements("Pool");
         for each(_loc2_ in _loc1_)
         {
            _loc15_ = int(uint(_loc2_.@id));
            _poolHash.add(uint(_loc2_.@id),_loc2_);
         }
         _loc3_ = _loc1_[0].elements("item");
         for each(_loc4_ in _loc3_)
         {
            _petHashMap.add(uint(_loc4_.@monsterid),_loc4_);
         }
         _loc5_ = _loc1_[1].elements("item");
         for each(_loc6_ in _loc5_)
         {
            _petHashMap.add(uint(_loc6_.@monsterid),_loc6_);
         }
         _loc8_ = (_loc7_ = _xml.elements("Shop"))[0];
         _shopPetHashMap = new HashMap();
         _loc9_ = _loc8_.elements("Monster");
         _loc10_ = 0;
         for each(_loc11_ in _loc9_)
         {
            _shopPetHashMap.add(_loc10_,_loc11_);
            _loc10_++;
         }
         _shopItemHashMap = new HashMap();
         _loc12_ = _loc8_.elements("item");
         _loc13_ = 0;
         for each(_loc14_ in _loc12_)
         {
            _shopItemHashMap.add(_loc13_,_loc14_);
            _loc13_++;
         }
      }
      
      public static function getPoolById(param1:Boolean = false) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:XML = _poolHash.getValue(param1 ? 2 : 1);
         var _loc3_:XMLList = _loc2_.elements("item");
         var _loc4_:Array = [];
         for each(_loc5_ in _loc3_)
         {
            (_loc6_ = new Object()).monsterid = int(_loc5_.@monsterid);
            _loc6_.kind = int(_loc5_.@kind);
            _loc6_.monstername = String(_loc5_.@monstername);
            if(_loc5_.@isjustone != null)
            {
               _loc6_.isjustone = int(_loc5_.@isjustone);
            }
            else
            {
               _loc6_.isjustone = -1;
            }
            if(_loc5_.@isone != null)
            {
               _loc6_.isone = int(_loc5_.@isone);
            }
            else
            {
               _loc6_.isone = -1;
            }
            if(_loc5_.@time != null)
            {
               _loc6_.time = int(_loc5_.@time);
            }
            else
            {
               _loc6_.time = -1;
            }
            _loc6_.Opentime = String(_loc5_.@Opentime);
            _loc6_.Endtime = String(_loc5_.@Endtime);
            _loc4_.push(_loc6_);
         }
         return _loc4_;
      }
      
      public static function getLimitPets(param1:int) : Array
      {
         var _loc5_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:Array = getPoolById(true);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            if((_loc5_ = _loc3_[_loc4_] as Object).time == param1 && getIsinTime(_loc5_.Opentime,_loc5_.Endtime))
            {
               _loc2_.push(_loc5_);
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      public static function getPetsByLv(param1:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:XML = _poolHash.getValue(1);
         var _loc3_:XMLList = _loc2_.elements("item");
         var _loc4_:Array = [];
         for each(_loc5_ in _loc3_)
         {
            (_loc6_ = new Object()).monsterid = int(_loc5_.@monsterid);
            _loc6_.kind = int(_loc5_.@kind);
            _loc6_.monstername = String(_loc5_.@monstername);
            if(_loc5_.@isjustone != null)
            {
               _loc6_.isjustone = int(_loc5_.@isjustone);
            }
            else
            {
               _loc6_.isjustone = -1;
            }
            if(_loc5_.@isone != null)
            {
               _loc6_.isone = int(_loc5_.@isone);
            }
            else
            {
               _loc6_.isone = -1;
            }
            if(_loc5_.@time != null)
            {
               _loc6_.time = int(_loc5_.@time);
            }
            else
            {
               _loc6_.time = -1;
            }
            if(int(_loc5_.@kind) == param1)
            {
               _loc4_.push(_loc6_);
            }
         }
         return _loc4_;
      }
      
      public static function getPetInfoByMonsterid(param1:int) : Object
      {
         var _loc2_:XML = _petHashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.monsterid = int(_loc2_.@monsterid);
         _loc3_.kind = int(_loc2_.@kind);
         _loc3_.monstername = String(_loc2_.@monstername);
         if(_loc2_.@isjustone != null)
         {
            _loc3_.puton = int(_loc2_.@isjustone);
         }
         else
         {
            _loc3_.puton = -1;
         }
         if(_loc2_.@isone != null)
         {
            _loc3_.puton = int(_loc2_.@isone);
         }
         else
         {
            _loc3_.puton = -1;
         }
         if(_loc2_.@time != null)
         {
            _loc3_.time = int(_loc2_.@time);
         }
         else
         {
            _loc3_.time = -1;
         }
         return _loc3_;
      }
      
      public static function getShopPetInfos() : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Object = null;
         var _loc1_:Array = _shopPetHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as XML;
            (_loc5_ = new Object()).ID = int(_loc4_.@ID);
            _loc5_.requireItemId = int(_loc4_.@requireItemId);
            _loc5_.requireNum = String(_loc4_.@requireNum);
            _loc2_.push(_loc5_);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getShopItemInfos() : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Object = null;
         var _loc1_:Array = _shopItemHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as XML;
            (_loc5_ = new Object()).ID = int(_loc4_.@ID);
            _loc5_.type = int(_loc4_.@type);
            _loc5_.requireItemId = int(_loc4_.@requireItemId);
            _loc5_.requireNum = String(_loc4_.@requireNum);
            _loc5_.limit = String(_loc4_.@limit);
            _loc5_.oneBuyGetNum = String(_loc4_.@oneBuyGetNum);
            _loc2_.push(_loc5_);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getSurplusTime(param1:String) : Number
      {
         if(param1 == "*")
         {
            return 99999;
         }
         var _loc2_:String = param1;
         var _loc3_:Date = SystemTimerManager.get24DateByStr(_loc2_);
         var _loc4_:Number = SystemTimerManager.time;
         return (_loc3_.time - _loc4_ * 1000) * 0.001;
      }
      
      public static function getLeftDay(param1:String) : int
      {
         return int(getSurplusTime(param1) / (24 * 60 * 60) + 1);
      }
      
      public static function getNumberDay(param1:String) : int
      {
         if(param1 == "*")
         {
            return 0;
         }
         var _loc2_:String = param1;
         var _loc3_:Date = SystemTimerManager.get0DateByStr(_loc2_);
         var _loc4_:Number;
         var _loc5_:Number = ((_loc4_ = SystemTimerManager.time) * 1000 - _loc3_.time) * 0.001;
         return int(_loc5_ / (24 * 60 * 60) + 1);
      }
      
      public static function getIsinTime(param1:String, param2:String) : Boolean
      {
         if(param1 == "*" && param2 != "*")
         {
            if(getLeftDay(param2) > 0)
            {
               return true;
            }
            return false;
         }
         if(param1 != "*" && param2 == "*")
         {
            if(getNumberDay(param1) > 0)
            {
               return true;
            }
            return false;
         }
         if(param1 != "*" && param2 != "*")
         {
            if(getNumberDay(param1) > 0 && getLeftDay(param2) > 0)
            {
               return true;
            }
            return false;
         }
         return true;
      }
   }
}
