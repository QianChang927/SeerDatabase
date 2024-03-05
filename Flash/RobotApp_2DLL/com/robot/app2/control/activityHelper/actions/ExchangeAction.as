package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   
   public class ExchangeAction extends BaseAction
   {
       
      
      public function ExchangeAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var _loc2_:int = int(_data["cmdId"]);
         if(param1 is int)
         {
            _loc2_ += param1;
         }
         return KTool.doExchange(_loc2_);
      }
   }
}
