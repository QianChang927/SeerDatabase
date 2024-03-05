package com.robot.app.summergift.model
{
   public class SummerGiftModelAlarm
   {
       
      
      public var armId:int;
      
      public var type:int;
      
      public var content:String;
      
      public var module:String;
      
      public var func:int;
      
      public var params:String;
      
      public var close:int;
      
      public function SummerGiftModelAlarm()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelAlarm
      {
         if(null == param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelAlarm = new SummerGiftModelAlarm();
         _loc2_.armId = param1.attribute("id");
         _loc2_.type = param1.attribute("type");
         _loc2_.content = param1.attribute("content");
         _loc2_.module = param1.attribute("module");
         _loc2_.func = param1.attribute("func");
         _loc2_.params = param1.attribute("params");
         _loc2_.close = param1.attribute("close");
         return _loc2_;
      }
   }
}
