package com.robot.app.mapProcess
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_103 extends BaseMapProcess
   {
       
      
      private var _gifIcon:InteractiveObject;
      
      private var _icon:MovieClip;
      
      public function MapProcess_103()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapListenerManager.add(btnLevel["btn"],this.onBtnClick);
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").initMap(this);
      }
      
      private function afterPlayGo() : void
      {
      }
      
      public function onBtnClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PartingOfTheWingsOfTheBirthGiftMainPanel"),"正在打开....");
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").destroy();
         super.destroy();
      }
   }
}
