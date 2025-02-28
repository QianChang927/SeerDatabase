package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_98 extends BaseMapProcess
   {
       
      
      public function MapProcess_98()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86071302);
         topLevel.mouseChildren = topLevel.mouseEnabled = false;
         SocketConnection.send(1022,86073016);
      }
      
      override public function destroy() : void
      {
      }
   }
}
