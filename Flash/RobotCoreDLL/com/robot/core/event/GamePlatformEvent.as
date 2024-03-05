package com.robot.core.event
{
   import flash.events.Event;
   
   public class GamePlatformEvent extends Event
   {
      
      public static const GAME_WIN:String = "gameWin";
      
      public static const GAME_LOST:String = "gameLost";
       
      
      public var gameIndex:uint = 0;
      
      public function GamePlatformEvent(param1:String, param2:uint, param3:Boolean = false, param4:Boolean = false)
      {
         this.gameIndex = param2;
         super(param1,param3,param4);
      }
   }
}
