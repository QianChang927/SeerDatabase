package com.robot.app2.control
{
   import com.robot.core.net.SocketConnection;
   
   public class VipAnnualSignController
   {
       
      
      public function VipAnnualSignController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.send(45524,4,0,0);
      }
   }
}
