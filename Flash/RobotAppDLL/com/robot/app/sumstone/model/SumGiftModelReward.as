package com.robot.app.sumstone.model
{
   public class SumGiftModelReward
   {
       
      
      public var rwdId:int;
      
      public var desc:String;
      
      public var reqNum:int;
      
      public function SumGiftModelReward()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelReward
      {
         var _loc2_:SumGiftModelReward = new SumGiftModelReward();
         _loc2_.rwdId = param1.attribute("id");
         _loc2_.desc = param1.attribute("desc");
         _loc2_.reqNum = param1.attribute("req");
         return _loc2_;
      }
   }
}
