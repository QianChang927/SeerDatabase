package com.robot.app2.mapProcess
{
   import com.robot.app2.control.SecretsOfTheDeadGiantControllerl;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11588 extends BaseMapProcess
   {
       
      
      public function MapProcess_11588()
      {
         super();
      }
      
      override protected function init() : void
      {
         SecretsOfTheDeadGiantControllerl.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         SecretsOfTheDeadGiantControllerl.destroy();
         super.destroy();
      }
   }
}
