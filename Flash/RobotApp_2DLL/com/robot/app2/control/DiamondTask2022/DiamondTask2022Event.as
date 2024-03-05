package com.robot.app2.control.DiamondTask2022
{
   import flash.events.Event;
   
   public class DiamondTask2022Event extends Event
   {
      
      public static const CompleteRoutineTask:String = "CompleteRoutineTask";
      
      public static const GetLivenessGift:String = "GetLivenessGift";
      
      public static const GetRetrieveGift:String = "GetRetrieveGift";
      
      public static const CloseDiamondTask:String = "CloseDiamondTask";
       
      
      public var targetType:int;
      
      public var targetIdx:int;
      
      public var args:Array;
      
      public function DiamondTask2022Event(param1:String, param2:int = 0, param3:int = 0, param4:Array = null, param5:Boolean = true, param6:Boolean = false)
      {
         super(param1,param5,param6);
         this.targetType = param2;
         this.targetIdx = param3;
         this.args = param4;
      }
   }
}
