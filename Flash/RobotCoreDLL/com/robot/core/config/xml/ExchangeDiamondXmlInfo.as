package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class ExchangeDiamondXmlInfo
   {
      
      private static var xmlClass:Class = ExchangeDiamondXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _showRewardMap:HashMap;
      
      private static var _starttime:String;
      
      private static var _endtime:String;
      
      private static var exchangeneed:String;
      
      private static var xml:XML;
      
      private static var _diaShopMap:HashMap;
      
      private static var showallreward:Array;
      
      private static var needdiamonds:Array;
      
      {
         setup();
      }
      
      public function ExchangeDiamondXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:Array = null;
         var _loc9_:Array = null;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:Array = null;
         var _loc13_:XML = null;
         var _loc14_:Array = null;
         var _loc15_:XMLList = null;
         var _loc16_:XML = null;
         var _loc17_:Object = null;
         var _loc18_:Object = null;
         _dataMap = new HashMap();
         xml = XML(new xmlClass());
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:Date = new Date(2021,4,7,0,0,0);
         _showRewardMap = new HashMap();
         _diaShopMap = new HashMap();
         starttime = String(xml.Atime[0].@CumStart);
         _dataMap = new HashMap();
         endtime = String(xml.Atime[0].@CumEnd);
         var _loc3_:XMLList = xml.CumulativeClass;
         needdiamonds = [];
         for each(_loc4_ in _loc3_)
         {
            _dataMap.add(int(_loc4_.@ID),_loc4_);
            needdiamonds.push(int(_loc4_.@Quantity));
         }
         exchangeneed = String(xml.ExchangeNeed[0].@need);
         _loc5_ = xml.LuckDrawItem;
         showallreward = [];
         for each(_loc6_ in _loc5_)
         {
            _loc14_ = [];
            _loc15_ = _loc6_.item;
            for each(_loc16_ in _loc15_)
            {
               (_loc17_ = {}).name = String(_loc16_.@name);
               _loc17_.id = int(_loc16_.@id);
               _loc17_.type = int(_loc6_.@type);
               _loc17_.ImageID = String(_loc16_.@ImageID);
               _loc17_.Timelimited = int(_loc16_.@Timelimited);
               _loc17_.limStart = String(_loc16_.@limStart);
               _loc17_.limEnd = String(_loc16_.@limEnd);
               _loc17_.PerMax = int(_loc16_.@PerMax);
               _loc17_.AllMax = int(_loc16_.@AllMax);
               _loc17_.text = String(_loc16_.@text);
               _loc17_.Label = int(_loc16_.@Label);
               _loc17_.num = String(_loc16_.@output);
               _loc14_.push(_loc17_);
               showallreward.push(_loc17_);
            }
            _showRewardMap.add(int(_loc6_.@type),_loc14_);
         }
         _loc7_ = xml.DiaShop;
         _loc8_ = [];
         _loc9_ = [];
         _loc10_ = [];
         _loc11_ = [];
         _loc12_ = [];
         for each(_loc13_ in _loc7_)
         {
            (_loc18_ = {}).name = String(_loc13_.@name);
            _loc18_.type = int(_loc13_.@type);
            _loc18_.id = int(_loc13_.@id);
            _loc18_.ImageID = String(_loc13_.@ImageID);
            _loc18_.Timelimited = int(_loc13_.@Timelimited);
            _loc18_.limStart = String(_loc13_.@limStart);
            _loc18_.limEnd = String(_loc13_.@limEnd);
            _loc18_.PerMax = int(_loc13_.@PerMax);
            _loc18_.AllMax = int(_loc13_.@AllMax);
            _loc18_.Price = String(_loc13_.@Price);
            _loc18_.DiscountPrice = int(_loc13_.@DiscountPrice);
            _loc18_.DiscountStone = int(_loc13_.@DiscountStone);
            _loc18_.forever = int(_loc13_.@forever);
            _loc18_.bit = int(_loc13_.@bit);
            _loc18_.subkey = int(_loc13_.@subkey);
            if(_loc18_.type == 0)
            {
               _loc18_.index = _loc8_.length;
               _loc8_.push(_loc18_);
            }
            else if(_loc18_.type == 1)
            {
               _loc18_.index = _loc9_.length;
               _loc9_.push(_loc18_);
            }
            else if(_loc18_.type == 2)
            {
               _loc18_.index = _loc10_.length;
               _loc10_.push(_loc18_);
            }
            else if(_loc18_.type == 3)
            {
               _loc18_.index = _loc11_.length;
               _loc11_.push(_loc18_);
            }
            else if(_loc18_.type == 4)
            {
               _loc18_.index = _loc12_.length;
               _loc12_.push(_loc18_);
            }
         }
         _diaShopMap.add(0,_loc8_);
         _diaShopMap.add(1,_loc9_);
         _diaShopMap.add(2,_loc10_);
         _diaShopMap.add(3,_loc11_);
         _diaShopMap.add(4,_loc12_);
      }
      
      public static function getitembyIndex(param1:int) : Object
      {
         return showallreward[param1];
      }
      
      public static function isintime() : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc1_:int = int(SystemTimerManager.time);
         _loc2_ = SystemTimerManager.get0DateByStr(starttime).time / 1000;
         _loc3_ = SystemTimerManager.get24DateByStr(endtime).time / 1000;
         if(_loc1_ > _loc2_ && _loc1_ < _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public static function showdiashapArr() : Array
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc1_:Array = (_diaShopMap.getValue(0) as Array).concat(_diaShopMap.getValue(1)).concat(_diaShopMap.getValue(2)).concat(_diaShopMap.getValue(3)).concat(_diaShopMap.getValue(4));
         var _loc2_:Array = [];
         var _loc3_:int = int(SystemTimerManager.time);
         var _loc6_:int = 0;
         while(_loc6_ < _loc1_.length)
         {
            _loc4_ = SystemTimerManager.get0DateByStr(_loc1_[_loc6_].limStart).time / 1000;
            _loc5_ = SystemTimerManager.get24DateByStr(_loc1_[_loc6_].limEnd).time / 1000;
            if(!_loc1_[_loc6_].Timelimited || _loc1_[_loc6_].Timelimited && _loc3_ > _loc4_ && _loc3_ < _loc5_)
            {
               _loc1_[_loc6_].left = Math.ceil((_loc5_ - _loc3_) / (3600 * 24));
               _loc2_.push(_loc1_[_loc6_]);
            }
            _loc6_++;
         }
         return _loc2_;
      }
      
      public static function showrewardArr(param1:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc2_:Array = _showRewardMap.getValue(param1);
         var _loc3_:Array = [];
         var _loc4_:int = int(SystemTimerManager.time);
         var _loc7_:int = 0;
         while(_loc7_ < _loc2_.length)
         {
            _loc5_ = SystemTimerManager.get0DateByStr(_loc2_[_loc7_].limStart).time / 1000;
            _loc6_ = SystemTimerManager.get24DateByStr(_loc2_[_loc7_].limEnd).time / 1000;
            if(!_loc2_[_loc7_].Timelimited || _loc2_[_loc7_].Timelimited && _loc4_ > _loc5_ && _loc4_ < _loc6_)
            {
               _loc3_.push(_loc2_[_loc7_]);
            }
            _loc7_++;
         }
         _loc3_.sortOn("Label",Array.DESCENDING);
         return _loc3_;
      }
      
      public static function get starttime() : String
      {
         return _starttime;
      }
      
      public static function set starttime(param1:String) : void
      {
         _starttime = param1;
      }
      
      public static function get endtime() : String
      {
         return _endtime;
      }
      
      public static function set endtime(param1:String) : void
      {
         _endtime = param1;
      }
      
      public static function getQuantityByid(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getKey(param1);
         if(_loc2_)
         {
            return int(_loc2_.@Quantity);
         }
         return 0;
      }
      
      public static function needDiamond() : Array
      {
         return needdiamonds;
      }
      
      public static function exchangeNeed() : Array
      {
         return exchangeneed.split(",");
      }
      
      public static function get showindexs() : Array
      {
         var _loc1_:String = String(xml.LuckDraw[0].@show);
         var _loc2_:Array = _loc1_.split(",");
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc2_[_loc3_] = parseInt(_loc2_[_loc3_]);
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
