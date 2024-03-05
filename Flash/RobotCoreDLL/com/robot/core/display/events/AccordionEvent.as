package com.robot.core.display.events
{
   import flash.events.Event;
   
   public class AccordionEvent extends Event
   {
      
      public static const CHANGE:String = "change";
      
      public static const OPEN:String = "open";
      
      public static const CLOSE:String = "close";
      
      public static const CHANGEEND:String = "changeend";
       
      
      public function AccordionEvent(param1:String, param2:Boolean = false, param3:Boolean = false)
      {
         super(param1,param2,param3);
      }
      
      override public function clone() : Event
      {
         return new AccordionEvent(type,bubbles,cancelable);
      }
      
      override public function toString() : String
      {
         return this.formatToString("AccordionEvent","type","bubbles","cancelable");
      }
   }
}
