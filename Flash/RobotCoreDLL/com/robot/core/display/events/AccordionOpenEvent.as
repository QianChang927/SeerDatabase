package com.robot.core.display.events
{
   import flash.events.Event;
   
   public class AccordionOpenEvent extends Event
   {
      
      public static const OPEN:String = "open";
       
      
      public var selectedItemIndex:int;
      
      public function AccordionOpenEvent(param1:String, param2:int, param3:Boolean = false, param4:Boolean = false)
      {
         this.selectedItemIndex = param2;
         super(param1,param3,param4);
      }
      
      override public function clone() : Event
      {
         return new AccordionOpenEvent(type,this.selectedItemIndex,bubbles,cancelable);
      }
      
      override public function toString() : String
      {
         return this.formatToString("AccordionOpenEvent","type","bubbles","cancelable");
      }
   }
}
