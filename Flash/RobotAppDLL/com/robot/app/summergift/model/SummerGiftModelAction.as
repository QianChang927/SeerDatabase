package com.robot.app.summergift.model
{
   public class SummerGiftModelAction
   {
      
      public static const ACTION_TYPE_DAILY:int = 1;
      
      public static const ACTION_TYPE_FOREVER:int = 2;
      
      public static const ACTION_TYPE_PROTOCOL:int = 3;
      
      public static const ACTION_TYPE_MODULE:int = 4;
      
      public static const ACTION_TYPE_MAP:int = 5;
      
      public static const ACTION_TYPE_MOVIE:int = 6;
      
      public static const ACTION_TYPE_FIGHT:int = 7;
       
      
      public var actId:int;
      
      public var type:int;
      
      public var value:String;
      
      public var params:String;
      
      public function SummerGiftModelAction()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelAction
      {
         if(null == param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelAction = new SummerGiftModelAction();
         _loc2_.actId = param1.attribute("id");
         _loc2_.type = param1.attribute("type");
         _loc2_.value = param1.attribute("value");
         _loc2_.params = param1.attribute("params");
         return _loc2_;
      }
   }
}
