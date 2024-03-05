package com.robot.app.sumstone.model
{
   public class SumGiftModelConst
   {
       
      
      public var vipMax:int;
      
      public var normal:int;
      
      public var product:int;
      
      public var exchange:int;
      
      public var movieMapId:int;
      
      public var sceneMapId:int;
      
      public function SumGiftModelConst()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelConst
      {
         var _loc2_:SumGiftModelConst = new SumGiftModelConst();
         _loc2_.vipMax = param1.attribute("vipmax");
         _loc2_.normal = param1.attribute("normal");
         _loc2_.product = param1.attribute("product");
         _loc2_.exchange = param1.attribute("exchange");
         _loc2_.movieMapId = param1.attribute("moviemap");
         _loc2_.sceneMapId = param1.attribute("scenemap");
         return _loc2_;
      }
   }
}
