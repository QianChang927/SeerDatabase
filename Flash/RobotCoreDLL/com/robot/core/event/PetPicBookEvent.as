package com.robot.core.event
{
   import flash.events.Event;
   
   public class PetPicBookEvent extends Event
   {
      
      public static const COMPLETE:String = "complete";
       
      
      public function PetPicBookEvent(param1:String, param2:Boolean = false, param3:Boolean = false)
      {
         super(param1,param2,param3);
      }
   }
}
