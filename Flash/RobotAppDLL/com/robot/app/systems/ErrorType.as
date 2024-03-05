package com.robot.app.systems
{
   public class ErrorType
   {
       
      
      public function ErrorType()
      {
         super();
      }
      
      public static function getErr0rType(param1:uint) : String
      {
         return "error_" + param1;
      }
   }
}
