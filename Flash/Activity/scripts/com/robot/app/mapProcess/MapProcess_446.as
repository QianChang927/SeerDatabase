package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task648;
   import com.robot.app.task.taskscollection.Task698;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_446 extends BaseMapProcess
   {
       
      
      public function MapProcess_446()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task648.initTaskForMap446(this);
         Task698.initTaskForMap446(this);
      }
      
      override public function destroy() : void
      {
         Task648.destroy();
         Task698.destroy();
         ModuleManager.destroy(ClientConfig.getAppModule("HolePanel"));
      }
      
      public function gotoHoleFight() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HolePanel"),"炫彩山山洞入口面板");
      }
   }
}
