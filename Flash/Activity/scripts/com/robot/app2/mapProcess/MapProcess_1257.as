package com.robot.app2.mapProcess
{
   import com.robot.app2.control.ElfKingLimitedDeliveryController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1257 extends BaseMapProcess
   {
       
      
      public function MapProcess_1257()
      {
         super();
      }
      
      override protected function init() : void
      {
         ElfKingLimitedDeliveryController.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         ElfKingLimitedDeliveryController.destroy();
         super.destroy();
      }
   }
}
