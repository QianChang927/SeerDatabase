package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_1046 extends BaseMapProcess
   {
       
      
      public function MapProcess_1046()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         getDefinitionByName("com.robot.app2.mapProcess.control.ShenchongSuperEnvolveShenchongzhilingRecController").initMap(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.ShenchongSuperEnvolveShenchongzhilingRecController").destroy();
         super.destroy();
      }
   }
}
