package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_73 extends BaseMapProcess
   {
       
      
      public function MapProcess_73()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86061587);
         SocketConnection.sendByQueue(44004,null);
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         getDefinitionByName("com.robot.app2.control.KylinSpaceController").init(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.KylinSpaceController").destroy();
      }
   }
}
