package com.robot.app.sumstone.model
{
   public class SumGiftModelSign
   {
       
      
      public var signId:int;
      
      public var month:int;
      
      public var date:int;
      
      public var productId:int;
      
      public var exchangeId:int;
      
      public function SumGiftModelSign()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelSign
      {
         var _loc2_:SumGiftModelSign = new SumGiftModelSign();
         _loc2_.signId = param1.attribute("id");
         _loc2_.month = param1.attribute("month");
         _loc2_.date = param1.attribute("date");
         _loc2_.productId = param1.attribute("product");
         _loc2_.exchangeId = param1.attribute("exchange");
         return _loc2_;
      }
   }
}
