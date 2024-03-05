package com.robot.app.energy.utils
{
   import flash.events.Event;
   
   public class EnergyEvent extends Event
   {
      
      public static const COMPLETE:String = "collect_complete";
       
      
      public var obj:Object;
      
      public function EnergyEvent(param1:String, param2:Object)
      {
         super(param1,false,false);
         this.obj = param2;
      }
   }
}
