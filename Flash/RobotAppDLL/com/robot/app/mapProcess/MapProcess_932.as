package com.robot.app.mapProcess
{
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_932 extends BaseMapProcess
   {
       
      
      public function MapProcess_932()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         MapListenerManager.add(this.depthLevel["goMapBtn"],function():void
         {
            MapManager.changeMap(95);
         },"天蛇花原");
      }
      
      override public function destroy() : void
      {
      }
   }
}
