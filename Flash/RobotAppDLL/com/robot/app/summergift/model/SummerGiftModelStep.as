package com.robot.app.summergift.model
{
   public class SummerGiftModelStep
   {
       
      
      public var stepId:int;
      
      public var desc:String;
      
      public var rwdId:int;
      
      public var statusFlag:int;
      
      public var passVal:int;
      
      public var paramGetRwd:String;
      
      public function SummerGiftModelStep()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : SummerGiftModelStep
      {
         if(!param1)
         {
            return null;
         }
         var _loc2_:SummerGiftModelStep = new SummerGiftModelStep();
         _loc2_.stepId = param1.attribute("id");
         _loc2_.desc = param1.attribute("desc");
         _loc2_.rwdId = param1.attribute("rwdid");
         _loc2_.statusFlag = param1.attribute("statusflag");
         _loc2_.passVal = param1.attribute("passval");
         _loc2_.paramGetRwd = param1.attribute("paramgetrwd");
         return _loc2_;
      }
   }
}
