package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1104 extends BaseMapProcess
   {
       
      
      private var _id:int;
      
      public function MapProcess_1104()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
