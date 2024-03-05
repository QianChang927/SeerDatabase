package com.robot.app.sumstone.model
{
   public class SumGiftModelStep
   {
       
      
      public var stepId:int;
      
      public var monsters:Array;
      
      public var maxVal:int;
      
      public var exchangeId:int;
      
      public var productId:int;
      
      public function SumGiftModelStep()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelStep
      {
         var _loc2_:SumGiftModelStep = new SumGiftModelStep();
         _loc2_.stepId = param1.attribute("id");
         _loc2_.monsters = String(param1.attribute("monster")).split(",");
         _loc2_.maxVal = param1.attribute("maxvalue");
         _loc2_.exchangeId = param1.attribute("exchange");
         _loc2_.productId = param1.attribute("product");
         return _loc2_;
      }
   }
}
