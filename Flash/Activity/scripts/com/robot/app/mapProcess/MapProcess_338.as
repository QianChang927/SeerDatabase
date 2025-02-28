package com.robot.app.mapProcess
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_338 extends BaseMapProcess
   {
       
      
      public function MapProcess_338()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86060641);
         this.conLevel["task738_1"].visible = false;
         conLevel["machine"].visible = false;
         conLevel["machine"].addEventListener(MouseEvent.CLICK,this.onClickMachine);
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").init();
      }
      
      private function onClickMachine(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getTaskModule("DragonWorldIntro"),"正在打开面板....",1);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").destroy();
         conLevel["machine"].removeEventListener(MouseEvent.CLICK,this.onClickMachine);
      }
   }
}
