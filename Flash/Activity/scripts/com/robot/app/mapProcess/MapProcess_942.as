package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_942 extends BaseMapProcess
   {
       
      
      public function MapProcess_942()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86061744);
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
