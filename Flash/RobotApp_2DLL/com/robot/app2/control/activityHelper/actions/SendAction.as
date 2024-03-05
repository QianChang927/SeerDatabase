package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.net.SocketConnection;
   
   public class SendAction extends BaseAction
   {
       
      
      public function SendAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var _loc5_:Number = NaN;
         var _loc2_:Array = new Array();
         if(_data["debug"] != null)
         {
            return Deferred.resolve(null);
         }
         if(_data["args"] != null)
         {
            _loc2_ = _loc2_.concat(_data["args"]);
         }
         var _loc3_:int = 1;
         while(_loc3_ <= _loc2_.length)
         {
            if(_loc2_[_loc3_ - 1] == "arg")
            {
               if(param1 != null)
               {
                  if(param1 is Array)
                  {
                     _loc2_[_loc3_ - 1] = (param1 as Array).shift();
                  }
                  else
                  {
                     _loc2_[_loc3_ - 1] = param1;
                     param1 = null;
                  }
               }
               else
               {
                  _loc2_[_loc3_ - 1] = 0;
               }
            }
            else if(String(_loc2_[_loc3_ - 1]).indexOf("-") != -1)
            {
               _loc5_ = parseInt(String(_loc2_[_loc3_ - 1]).split("-")[0]);
               if(param1 != null)
               {
                  if(param1 is Array)
                  {
                     _loc2_[_loc3_ - 1] = _loc5_ - 1 + (param1 as Array).shift();
                  }
                  else
                  {
                     _loc2_[_loc3_ - 1] = _loc5_ - 1 + param1;
                     param1 = null;
                  }
               }
               else
               {
                  _loc2_[_loc3_ - 1] = _loc5_;
               }
            }
            _loc3_++;
         }
         _loc3_ = 1;
         while(_loc3_ <= _loc2_.length)
         {
            _loc2_[_loc3_ - 1] = parseInt(String(_loc2_[_loc3_ - 1]));
            _loc3_++;
         }
         if(param1 != null)
         {
            _loc2_ = _loc2_.concat(param1);
         }
         var _loc4_:int = int(_data["cmdId"]);
         return SocketConnection.sendWithPromise(_loc4_,_loc2_);
      }
   }
}
