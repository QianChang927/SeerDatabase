package com.robot.app.sumfire.model
{
   public class SumGiftFireBaseInfo
   {
       
      
      public var id:int;
      
      public var fightNum:int;
      
      public var productId:int;
      
      public var exchangeId:int;
      
      public var boss:Array;
      
      public function SumGiftFireBaseInfo()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SumGiftFireBaseInfo
      {
         if(null == param1)
         {
            return null;
         }
         var _loc2_:SumGiftFireBaseInfo = new SumGiftFireBaseInfo();
         _loc2_.id = param1.attribute("id");
         _loc2_.fightNum = param1.attribute("fightnum");
         _loc2_.productId = param1.attribute("product");
         _loc2_.exchangeId = param1.attribute("exchange");
         _loc2_.boss = String(param1.attribute("boss")).split(",");
         return _loc2_;
      }
   }
}
