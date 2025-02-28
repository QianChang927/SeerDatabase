package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_78 extends BaseMapProcess
   {
       
      
      public function MapProcess_78()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86062103);
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         getDefinitionByName("com.robot.app2.control.WitherController").initMap78(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.WitherController").destroy();
      }
   }
}
