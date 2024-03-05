package com.robot.core.event
{
   import flash.events.Event;
   
   public class CarnivalEvent extends Event
   {
      
      public static const HURDLES:String = "hurdles";
      
      public static const TUGGAME:String = "tuggame";
      
      public static const JUMPGAME:String = "jumpgame";
       
      
      public var gameId:int;
      
      public var gameSuccess:Boolean;
      
      public function CarnivalEvent(param1:String, param2:int, param3:Boolean)
      {
         super(param1);
         this.gameId = param2;
         this.gameSuccess = param3;
      }
      
      override public function clone() : Event
      {
         return new CarnivalEvent(type,this.gameId,this.gameSuccess);
      }
   }
}
