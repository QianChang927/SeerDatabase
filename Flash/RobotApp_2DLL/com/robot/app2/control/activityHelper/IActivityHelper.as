package com.robot.app2.control.activityHelper
{
   import com.codecatalyst.promise.Promise;
   
   public interface IActivityHelper
   {
       
      
      function getValue(param1:String) : *;
      
      function doAction(param1:String, param2:* = null) : Promise;
   }
}
