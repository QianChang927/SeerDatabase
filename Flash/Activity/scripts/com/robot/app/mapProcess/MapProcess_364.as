package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_364 extends BaseMapProcess
   {
       
      
      public function MapProcess_364()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86070875);
         getDefinitionByName("com.robot.app2.control.DarkDoor201403").initFor364(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.DarkDoor201403").destroyFor364(this);
      }
   }
}
