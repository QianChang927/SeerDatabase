package com.robot.app.mapProcess
{
   import com.robot.app.control.VanishAirBrickController;
   import com.robot.app.task.taskscollection.Task1388;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_68 extends BaseMapProcess
   {
       
      
      public function MapProcess_68()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task1388.initForMap68(this);
         SocketConnection.send(1022,86054752);
         VanishAirBrickController.initForMap68(this);
      }
      
      override public function destroy() : void
      {
         Task1388.destroy();
      }
   }
}
