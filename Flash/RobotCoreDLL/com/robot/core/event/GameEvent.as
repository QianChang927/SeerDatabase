package com.robot.core.event
{
   import flash.events.Event;
   
   public class GameEvent extends Event
   {
      
      public static const OVER:String = "gameOverEvent";
      
      public static const START:String = "gameStartEvent";
      
      public static const CANCEL:String = "gameCancelEvent";
       
      
      public var name:String;
      
      public var sorce:uint;
      
      public var level:uint;
      
      public function GameEvent(param1:String, param2:String, param3:uint = 0, param4:uint = 0, param5:Boolean = false, param6:Boolean = false)
      {
         param2 = param2;
         param3 = param3;
         param4 = param4;
         super(param1,param5,param6);
      }
   }
}
