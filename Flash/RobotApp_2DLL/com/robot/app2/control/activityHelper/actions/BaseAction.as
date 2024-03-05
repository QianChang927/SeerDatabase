package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app2.control.activityHelper.IAction;
   
   public class BaseAction implements IAction
   {
       
      
      protected var _data;
      
      public function BaseAction(param1:*)
      {
         super();
         this._data = param1;
      }
      
      public function doAction(param1:* = null) : Promise
      {
         return null;
      }
   }
}
