package com.robot.app2.control.activityHelper
{
   import com.codecatalyst.promise.Promise;
   
   public interface IAction
   {
       
      
      function doAction(param1:* = null) : Promise;
   }
}
