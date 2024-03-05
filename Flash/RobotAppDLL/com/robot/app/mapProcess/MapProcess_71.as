package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_71 extends BaseMapProcess
   {
       
      
      public function MapProcess_71()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86068518);
         getDefinitionByName("com.robot.app2.control.EvilTeamController").initMap71(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.EvilTeamController").destroy();
      }
   }
}
