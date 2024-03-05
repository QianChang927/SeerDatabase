package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class MidAutumnCelebrationController
   {
       
      
      public function MidAutumnCelebrationController()
      {
         super();
      }
      
      public static function tryFinish(param1:int, param2:Function = null) : void
      {
         var index:int = param1;
         var backFun:Function = param2;
         SocketConnection.sendWithCallback(41517,function(param1:SocketEvent):void
         {
            if(backFun != null)
            {
               backFun();
            }
         },index);
      }
      
      public static function getState(param1:Function) : void
      {
         var backFun:Function = param1;
         KTool.getMultiValue([1530],function(param1:Array):void
         {
            var _loc2_:Array = [];
            var _loc3_:int = 1;
            while(_loc3_ <= 10)
            {
               _loc2_.push(KTool.getBit(param1[0],_loc3_));
               _loc3_++;
            }
            backFun(_loc2_);
         });
      }
   }
}
