package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.net.SocketConnection;
   
   public class BestSignupController
   {
       
      
      public function BestSignupController()
      {
         super();
      }
      
      public static function receiveInvited() : void
      {
         KTool.getBitSet([460],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] == 0)
            {
               SocketConnection.sendByQueue(45612,[5,0],function(param1:*):void
               {
               });
            }
         });
      }
   }
}
