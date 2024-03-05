package com.robot.app2.mapProcess
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   
   public class MapProcess_11827 extends BaseMapProcess
   {
      
      public static var _map:MapModel;
       
      
      public function MapProcess_11827()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         _map = MapManager.currentMap;
         _map.topLevel.mouseChildren = false;
         _map.topLevel.mouseEnabled = false;
      }
   }
}
