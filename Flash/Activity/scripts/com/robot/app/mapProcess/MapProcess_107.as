package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_107 extends BaseMapProcess
   {
       
      
      public function MapProcess_107()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").initMap(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.ATieDaExclusiveSuitController").initMap107(this);
         SocketConnection.send(1022,84807027);
      }
      
      private function afterPlayGo() : void
      {
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.ATieDaExclusiveSuitController").destroyMap107();
      }
   }
}
