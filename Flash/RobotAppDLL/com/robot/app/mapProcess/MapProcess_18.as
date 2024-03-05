package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_18 extends BaseMapProcess
   {
       
      
      private var cls;
      
      public function MapProcess_18()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.cls = getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.MoonValleyController");
         this.cls.initForMap(this);
      }
      
      override public function destroy() : void
      {
         this.cls.destroy();
         super.destroy();
      }
   }
}
