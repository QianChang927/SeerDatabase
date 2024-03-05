package com.robot.app.task.petstory.evt
{
   import flash.events.Event;
   
   public class ItemSelectEvent extends Event
   {
      
      public static const SELECT_ITEM:String = "selectItem";
       
      
      public function ItemSelectEvent(param1:String = "selectItem", param2:Boolean = false, param3:Boolean = false)
      {
         super(param1,param2,param3);
      }
   }
}
