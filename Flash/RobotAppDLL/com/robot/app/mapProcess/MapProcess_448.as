package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task658;
   import com.robot.app.task.taskscollection.Task707;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_448 extends BaseMapProcess
   {
       
      
      public function MapProcess_448()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel["lightMC"].mouseChildren = topLevel["lightMC"].mouseEnabled = false;
         Task658.initTaskForMap448(this);
         Task707.initTaskForMap448(this);
      }
      
      override public function destroy() : void
      {
         Task658.destroy();
         Task707.destroy();
         ModuleManager.destroy(ClientConfig.getAppModule("HolePanel"));
      }
      
      public function gotoHoleFight() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HolePanel"),"炫彩山山洞入口面板");
      }
   }
}
