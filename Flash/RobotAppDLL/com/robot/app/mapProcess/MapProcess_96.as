package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_96 extends BaseMapProcess
   {
       
      
      public function MapProcess_96()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86062888);
         getDefinitionByName("com.robot.app2.control.CNCBController").setup(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.CNCBController").destroy();
         super.destroy();
      }
   }
}
