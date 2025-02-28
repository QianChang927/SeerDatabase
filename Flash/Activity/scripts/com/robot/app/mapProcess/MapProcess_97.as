package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_97 extends BaseMapProcess
   {
       
      
      public function MapProcess_97()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86070092);
      }
      
      override public function destroy() : void
      {
      }
   }
}
