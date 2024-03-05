package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.IExchange_cltInfo;
   import org.taomee.ds.HashMap;
   
   public class ExchangeXMLInfo
   {
      
      private static var xmlClass:Class = ExchangeXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function ExchangeXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _shop2itemshashMap = new HashMap();
         _xmllist = _xml.elements("item");
         for each(_loc1_ in _xmllist)
         {
            _itemshashMap.add(uint(_loc1_.@id),_loc1_);
            if(_loc1_.@shopid == 2)
            {
               _shop2itemshashMap.add(uint(_loc1_.@id),_loc1_);
            }
         }
      }
      
      public static function getAllElevnKingPetIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 2)
            {
               if(uint(_loc2_.@id) < 206 || uint(_loc2_.@id) > 222)
               {
                  _loc1_.push(uint(_loc2_.@id));
               }
            }
         }
         return _loc1_;
      }
      
      public static function getAllElevnKingMarkIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 4)
            {
               _loc1_.push(uint(_loc2_.@id));
            }
         }
         return _loc1_;
      }
      
      public static function getAllGxPetIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _shop2itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 1)
            {
               _loc1_.push(int(_loc2_.@id));
            }
         }
         _loc1_.sort(Array.NUMERIC | Array.DESCENDING);
         return _loc1_;
      }
      
      public static function getAllGxMarkIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _shop2itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 3)
            {
               _loc1_.push(uint(_loc2_.@id));
            }
         }
         return _loc1_;
      }
      
      public static function getAllCultureItemsIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _shop2itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 11)
            {
               _loc1_.push(uint(_loc2_.@id));
            }
         }
         return _loc1_;
      }
      
      public static function getAllOutOfPrinttAchieveIds() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _shop2itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 8)
            {
               _loc1_.push(uint(_loc2_.@id));
            }
         }
         _loc1_.sort(Array.NUMERIC);
         return _loc1_;
      }
      
      public static function getAllYinZi() : Array
      {
         var _loc2_:* = undefined;
         var _loc1_:Array = [];
         for each(_loc2_ in _shop2itemshashMap.getValues())
         {
            if(_loc2_.@Subtag == 19)
            {
               _loc1_.push(uint(_loc2_.@id));
            }
         }
         _loc1_.sort(Array.NUMERIC);
         return _loc1_;
      }
      
      public static function getInfoById(param1:int) : IExchange_cltInfo
      {
         var _loc2_:IExchange_cltInfo = new IExchange_cltInfo();
         var _loc3_:XML = _itemshashMap.getValue(param1);
         _loc2_.id = _loc3_.@id;
         _loc2_.realid = _loc3_.@realid;
         _loc2_.monappend = String(_loc3_.@monappend);
         _loc2_.type = _loc3_.@type;
         _loc2_.Subtag = _loc3_.@Subtag;
         _loc2_.batch = _loc3_.@batch;
         _loc2_.shopid = _loc3_.@shopid;
         _loc2_.cointype = _loc3_.@cointype;
         _loc2_.coinid = _loc3_.@coinid;
         _loc2_.price = _loc3_.@price;
         _loc2_.cond_id = _loc3_.@cond_id;
         _loc2_.UserInfoId = _loc3_.@UserInfoId;
         _loc2_.isjustone = _loc3_.@isjustone;
         _loc2_.Limittype = _loc3_.@Limittype;
         _loc2_.LimitCnt = _loc3_.@LimitCnt;
         _loc2_.count = _loc3_.@count;
         return _loc2_;
      }
   }
}
