package com.robot.app.task.petstory.evt
{
   import flash.events.Event;
   
   public class PetBagEvent extends Event
   {
      
      public static const CLOSE_PET_BAG:String = "closePetBag";
       
      
      public function PetBagEvent(param1:String = "closePetBag", param2:Boolean = false, param3:Boolean = false)
      {
         super(param1,param2,param3);
      }
   }
}
