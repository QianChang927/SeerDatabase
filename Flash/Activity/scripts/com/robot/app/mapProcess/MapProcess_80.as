package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1447;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_80 extends BaseMapProcess
   {
       
      
      private var cls:*;
      
      public function MapProcess_80()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         SocketConnection.send(1022,86056818);
      }
      
      override public function destroy() : void
      {
         Task1447.destroy();
      }
   }
}
