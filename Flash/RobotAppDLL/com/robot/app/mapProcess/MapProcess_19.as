package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task812;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_19 extends BaseMapProcess
   {
       
      
      private var cls;
      
      public function MapProcess_19()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86059548);
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         Task812.initFor19(this);
      }
      
      override public function destroy() : void
      {
         Task812.destroy();
         super.destroy();
      }
   }
}
