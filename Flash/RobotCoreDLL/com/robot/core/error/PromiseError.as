package com.robot.core.error
{
   public class PromiseError extends Error
   {
       
      
      public function PromiseError(param1:* = null)
      {
         super(!!param1 ? param1 : "Promise error");
      }
   }
}
