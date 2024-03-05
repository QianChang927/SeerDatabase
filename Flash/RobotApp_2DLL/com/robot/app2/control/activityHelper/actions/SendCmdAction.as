package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Promise;
   import com.robot.core.net.SocketConnection;
   
   public class SendCmdAction extends BaseAction
   {
       
      
      public function SendCmdAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var _loc2_:Array = _data["args"];
         if(param1 != null)
         {
            _loc2_ = param1;
         }
         _loc2_ = _loc2_ == null ? [] : _loc2_;
         var _loc3_:int = int(_data["cmdId"]);
         return SocketConnection.sendWithPromise(_loc3_,_loc2_);
      }
   }
}
