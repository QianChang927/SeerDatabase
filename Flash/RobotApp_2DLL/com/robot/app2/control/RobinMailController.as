package com.robot.app2.control
{
   import com.robot.core.net.SocketConnection;
   
   public class RobinMailController
   {
       
      
      public function RobinMailController()
      {
         super();
      }
      
      public static function check() : void
      {
         SocketConnection.send(45512,5);
      }
   }
}
