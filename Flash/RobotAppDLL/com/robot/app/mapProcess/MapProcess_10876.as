package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_10876 extends BaseMapProcess
   {
       
      
      public function MapProcess_10876()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.control.WuYiAct1Control").initMap10876(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.WuYiAct1Control").destroy();
         super.destroy();
      }
   }
}