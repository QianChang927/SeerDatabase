package com.robot.app2.control.jsControl.command
{
   public class BaseCommand
   {
       
      
      protected var args;
      
      public function BaseCommand(param1:* = null)
      {
         super();
         this.args = param1;
      }
      
      public function excute() : void
      {
      }
   }
}
