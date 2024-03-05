package com.robot.app2.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_11331 extends BaseMapProcess
   {
       
      
      public function MapProcess_11331()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.control.ResurrectionStarKingWulingControl").initForMap11331(this);
         super.init();
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ResurrectionStarKingWulingControl").destroy();
         super.destroy();
      }
   }
}
