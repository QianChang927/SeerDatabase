package com.robot.core.event
{
   import flash.events.Event;
   
   public class LittleGameEvent extends Event
   {
      
      public static const GAME_OVER:String = "seer_little_game_over";
       
      
      public var data:Object;
      
      public function LittleGameEvent(param1:String, param2:Object = null, param3:Boolean = false, param4:Boolean = false)
      {
         this.data = param2;
         super(param1,param3,param4);
      }
   }
}
