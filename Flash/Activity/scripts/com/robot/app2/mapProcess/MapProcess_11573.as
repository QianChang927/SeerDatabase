package com.robot.app2.mapProcess
{
   import com.robot.app2.control.VipEighthAnniversaryAchievementController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11573 extends BaseMapProcess
   {
       
      
      public function MapProcess_11573()
      {
         super();
      }
      
      override protected function init() : void
      {
         VipEighthAnniversaryAchievementController.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         VipEighthAnniversaryAchievementController.destroy();
         super.destroy();
      }
   }
}
