package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class ShopCartDiscountXMLInfo
   {
      
      private static var xmlClass:Class = ShopCartDiscountXMLInfo_xmlClass;
      
      private static var _xml:XML;
      
      private static var _version:XML;
      
      private static var _isRefresh:Boolean;
      
      {
         setup();
      }
      
      public function ShopCartDiscountXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
      }
      
      private static function get currentVersion() : XML
      {
         var _loc1_:Date = null;
         if(_version != null)
         {
            _loc1_ = SystemTimerManager.sysBJDate;
            if(!_isRefresh && _loc1_.minutes % 30 == 0)
            {
               _version = getVersion();
               _isRefresh = true;
            }
            else
            {
               _isRefresh = false;
            }
         }
         else
         {
            _version = getVersion();
            _isRefresh = true;
         }
         return _version;
      }
      
      private static function getVersion() : XML
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc1_:int = int(SystemTimerManager.time);
         for each(_loc2_ in _xml.elements("version"))
         {
            _loc3_ = int(_loc2_.@start_time);
            _loc4_ = int(_loc2_.@end_time);
            if(_loc1_ >= _loc3_ && _loc1_ <= _loc4_)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function computeDiscount(param1:Number) : Number
      {
         var _loc4_:XML = null;
         var _loc2_:Array = [];
         var _loc3_:XML = currentVersion;
         if(_loc3_ == null)
         {
            return 1;
         }
         for each(_loc4_ in _loc3_.elements("discount"))
         {
         }
         return 0;
      }
      
      public static function getTotalPrice(param1:Array) : Number
      {
         var ver:XML;
         var discounts:Array;
         var sum:Number = NaN;
         var obj:Object = null;
         var new_sum:Number = NaN;
         var tmp:Number = NaN;
         var productList:Array = param1;
         sum = 0;
         productList.map(function(param1:Array, param2:int, param3:Array):void
         {
            sum = sum + GoldProductXMLInfo.getPriceByProID(param1[0]) * param1[1];
         });
         ver = currentVersion;
         if(ver == null)
         {
            return sum;
         }
         discounts = getDiscountArrByVer(currentVersion);
         obj = getDiscountObj(sum,discounts);
         if(obj == null)
         {
            return sum;
         }
         if(obj.type == 1)
         {
            new_sum = 0;
            productList.map(function(param1:Array, param2:int, param3:Array):void
            {
               tmp = GoldProductXMLInfo.getPriceByProID(param1[0]) * param1[1];
               tmp = tmp * (obj.param / 100);
               if(tmp < 1)
               {
                  tmp = 1;
               }
               new_sum = new_sum + tmp;
            });
            sum = new_sum;
         }
         else if(obj.type == 2)
         {
            sum = sum - obj.param;
         }
         return sum;
      }
      
      private static function getDiscountArrByVer(param1:XML) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(var _loc6_ in param1.elements("discount"))
         {
            _loc3_ = _loc6_;
            _loc6_;
            _loc2_.push({
               "type":int(_loc3_.@disounts_type),
               "amount":int(_loc3_.@amount),
               "param":int(_loc3_.@number)
            });
         }
         return _loc2_;
      }
      
      private static function getDiscountObj(param1:int, param2:Array) : Object
      {
         var _loc3_:Object = null;
         param2.sortOn(["amount"],Array.DESCENDING | Array.NUMERIC);
         for each(var _loc6_ in param2)
         {
            _loc3_ = _loc6_;
            _loc6_;
            if(param1 >= _loc3_.amount)
            {
               return _loc3_;
            }
         }
         return null;
      }
   }
}
