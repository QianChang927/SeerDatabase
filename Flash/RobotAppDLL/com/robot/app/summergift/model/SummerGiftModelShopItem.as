package com.robot.app.summergift.model
{
   public class SummerGiftModelShopItem
   {
       
      
      public var itemId:int;
      
      public var productId:int;
      
      public var icon:int;
      
      public var exchange:int;
      
      public var itemNum:int;
      
      public var outItem:int;
      
      public var name:String;
      
      public function SummerGiftModelShopItem()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelShopItem
      {
         if(!param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelShopItem = new SummerGiftModelShopItem();
         _loc2_.itemId = param1.attribute("id");
         _loc2_.productId = param1.attribute("productid");
         _loc2_.icon = param1.attribute("icon");
         _loc2_.exchange = param1.attribute("exchange");
         _loc2_.itemNum = param1.attribute("itmnum");
         _loc2_.outItem = param1.attribute("outitem");
         _loc2_.name = param1.attribute("name");
         return _loc2_;
      }
   }
}
