package com.robot.app2.control.jsControl
{
   import flash.events.Event;
   
   public class JSEvent extends Event
   {
      
      public static const JSEVENT:String = "JS-EVENT";
       
      
      private var _command:String;
      
      private var _args;
      
      public function JSEvent(param1:String, param2:Boolean = false, param3:Boolean = false)
      {
         super(param1,param2,param3);
      }
      
      public function set command(param1:String) : void
      {
         this._command = param1;
      }
      
      public function get command() : String
      {
         return this._command;
      }
      
      public function get args() : *
      {
         return this._args;
      }
      
      public function set args(param1:*) : void
      {
         this._args = param1;
      }
   }
}
