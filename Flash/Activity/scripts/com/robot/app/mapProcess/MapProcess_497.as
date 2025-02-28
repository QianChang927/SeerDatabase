package com.robot.app.mapProcess
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_497 extends BaseMapProcess
   {
       
      
      public function MapProcess_497()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["hadesaEnvoMC"].visible = false;
         conLevel["NPCbenzhu"].visible = false;
         conLevel["benzhu"].visible = false;
         getDefinitionByName("com.robot.app2.control.AncestryMasterAndApprenticeReturnController").initMap(this);
      }
      
      private function onMorraClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MorraSweetGame"),"正在加载面板",true);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.AncestryMasterAndApprenticeReturnController").destroy();
      }
      
      private function initForAllTask() : void
      {
         this.topLevel["invertedMc"].mouseEnabled = false;
         this.topLevel["invertedMc"].mouseChildren = false;
         this.conLevel["task633Hit"].mouseEnabled = false;
         this.conLevel["task633Hit"].mouseChildren = false;
      }
      
      public function gotoNextMap() : void
      {
         MapManager.changeMap(476);
      }
   }
}
