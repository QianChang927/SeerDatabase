package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task426ReUse;
   import com.robot.app.task.taskscollection.Task788;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_683 extends BaseMapProcess
   {
       
      
      public function MapProcess_683()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task426ReUse.initTaskforMap683(this);
         MapListenerManager.add(conLevel["adBtn"],this.showPanel,"紫水晶中的生命");
         Task788.initTaskForMap683(this);
      }
      
      private function showPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AmethystOfLife"),"","9月19日-9月25日 11:00-13:00");
      }
      
      override public function destroy() : void
      {
         Task426ReUse.destroy();
         Task788.destroy();
      }
   }
}
