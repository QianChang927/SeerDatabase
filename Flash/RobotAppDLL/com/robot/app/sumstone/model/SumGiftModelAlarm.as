package com.robot.app.sumstone.model
{
   public class SumGiftModelAlarm
   {
       
      
      public var alarmId:int;
      
      public var type:int;
      
      public var content:String;
      
      public var module:String;
      
      public function SumGiftModelAlarm()
      {
         super();
      }
      
      public static function readXmlData(param1:XML) : SumGiftModelAlarm
      {
         var _loc2_:SumGiftModelAlarm = new SumGiftModelAlarm();
         _loc2_.alarmId = param1.attribute("id");
         _loc2_.type = param1.attribute("type");
         _loc2_.content = param1.attribute("content");
         _loc2_.module = param1.attribute("module");
         return _loc2_;
      }
   }
}
