package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1411;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   
   public class MapProcess_70 extends BaseMapProcess
   {
       
      
      public function MapProcess_70()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task1411.initForMap70(this);
         SocketConnection.send(1022,86055024);
         this.obstacleMC.gotoAndStop("end");
         MapListenerManager.add(conLevel["doorToGabage"] as MovieClip,function():void
         {
            MapManager.changeMap(84);
         },"前往谜度废墟");
      }
      
      private function get obstacleMC() : MovieClip
      {
         return MapManager.currentMap.animatorLevel["obstacleMC"];
      }
      
      override public function destroy() : void
      {
         Task1411.destroy();
         super.destroy();
      }
   }
}
