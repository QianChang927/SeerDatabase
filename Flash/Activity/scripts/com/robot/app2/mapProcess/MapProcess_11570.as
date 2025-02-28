package com.robot.app2.mapProcess
{
   import com.robot.app2.control.VipEighthAnniversaryAchievementController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11570 extends BaseMapProcess
   {
       
      
      public function MapProcess_11570()
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
