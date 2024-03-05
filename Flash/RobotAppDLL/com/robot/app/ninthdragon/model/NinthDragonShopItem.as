package com.robot.app.ninthdragon.model
{
   public class NinthDragonShopItem
   {
       
      
      public var id:int;
      
      public var product:int;
      
      public var exchange:int;
      
      public function NinthDragonShopItem()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : NinthDragonShopItem
      {
         var _loc2_:NinthDragonShopItem = new NinthDragonShopItem();
         _loc2_.id = param1.attribute("id");
         _loc2_.product = param1.attribute("product");
         _loc2_.exchange = param1.attribute("exchange");
         return _loc2_;
      }
   }
}
