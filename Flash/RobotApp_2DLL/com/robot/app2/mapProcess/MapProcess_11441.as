package com.robot.app2.mapProcess
{
   import com.robot.app2.control.HongbaoCollectionController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11441 extends BaseMapProcess
   {
       
      
      public function MapProcess_11441()
      {
         super();
      }
      
      override public function destroy() : void
      {
         HongbaoCollectionController.destroyBoss(this);
         super.destroy();
      }
      
      override protected function init() : void
      {
         HongbaoCollectionController.initBoss(this);
         super.init();
      }
   }
}
