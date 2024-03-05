package com.robot.app.mapProcess
{
   import com.robot.app.systems.HelpManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_3 extends BaseMapProcess
   {
       
      
      public function MapProcess_3()
      {
         super();
      }
      
      override protected function init() : void
      {
      }
      
      override public function destroy() : void
      {
      }
      
      public function onGuard() : void
      {
         HelpManager.show(0);
      }
   }
}
