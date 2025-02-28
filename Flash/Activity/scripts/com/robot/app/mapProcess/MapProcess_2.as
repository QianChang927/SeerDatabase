package com.robot.app.mapProcess
{
   import com.robot.app.systems.HelpManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_2 extends BaseMapProcess
   {
       
      
      public function MapProcess_2()
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
         if(MainManager.isDebug)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetStorageOld"));
         }
         else
         {
            HelpManager.show(0);
         }
      }
   }
}
