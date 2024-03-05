package com.robot.app.mapProcess
{
   import com.robot.app.control.NinjaTurtlesController;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_77 extends BaseMapProcess
   {
       
      
      public function MapProcess_77()
      {
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("主题活动0613","进入活动场景77",StatManager.RUN_ACT);
         NinjaTurtlesController.closeScene();
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
