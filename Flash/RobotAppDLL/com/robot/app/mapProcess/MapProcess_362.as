package com.robot.app.mapProcess
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.taskscollection.Task1336;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.RectangleMask;
   import flash.events.Event;
   
   public class MapProcess_362 extends BaseMapProcess
   {
       
      
      public function MapProcess_362()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.y = 660;
         MapListenerManager.add(depthLevel["petCollect"],this.onClickPetCollect,"精灵收集计划");
         Task1336.initFor362(this);
         MapNamePanel.hideExp();
      }
      
      private function onClickPetCollect(param1:Event) : void
      {
         RectangleMask.destroy();
         ModuleManager.showModule(ClientConfig.getAppModule("PetCollectionPanel"));
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.y = 0;
         MapNamePanel.showExp();
      }
   }
}
