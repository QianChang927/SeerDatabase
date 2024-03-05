package com.robot.core.event
{
   import flash.events.Event;
   
   public class XMLEvent extends Event
   {
      
      public static const COMPLETE:String = Event.COMPLETE;
       
      
      private var _data:XML;
      
      public function XMLEvent(param1:String, param2:XML)
      {
         super(param1);
         this._data = param2;
      }
      
      public function get data() : XML
      {
         return this._data;
      }
   }
}
